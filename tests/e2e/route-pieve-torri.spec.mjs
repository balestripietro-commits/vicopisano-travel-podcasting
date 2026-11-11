import { expect, test } from "@playwright/test";
import { enterSite } from "./helpers.mjs";

// Public OSM street geometry: Via Moricotti -> Via Loris Baroni ->
// Via del Municipio. The first/last points are the existing stop markers.
const expectedLeg = [
  [10.5833924, 43.7002026],
  [10.583557, 43.70015],
  [10.583821, 43.70017],
  [10.58384, 43.700072],
  [10.583888, 43.699942],
  [10.583942, 43.699928],
  [10.584002, 43.699925],
  [10.584106, 43.699919],
  [10.584149, 43.699904],
  [10.5842514, 43.6999256],
];

test("Pieve to Torri Gemelle follows the named streets without the diagonal", async ({ page }) => {
  await enterSite(page, { stop: 7 });
  const route = await page.evaluate(() => {
    const start = routeCoordinateIndexByStop.get(6);
    const end = routeCoordinateIndexByStop.get(7);
    return {
      leg: displayRouteCoordinates.slice(start, end + 1),
      approach: displayRouteCoordinates.slice(start - 4, start + 1),
      shortcutPresent: displayRouteCoordinates.some(([lon, lat]) => lon === 10.58365 && lat === 43.7001),
      allAnchorsMatchStops: tappe.every(stop => {
        const point = displayRouteCoordinates[routeCoordinateIndexByStop.get(stop.numero)];
        return point[0] === stop.longitudine && point[1] === stop.latitudine;
      }),
    };
  });
  expect(route.leg).toEqual(expectedLeg);
  expect(route.shortcutPresent).toBe(false);
  expect(route.allAnchorsMatchStops).toBe(true);
  // The incoming leg must not leave a shortcut visible underneath leg 6->7.
  expect(route.approach.slice(1)).toEqual(expectedLeg.slice(0, 4).reverse());
  expect(route.approach[0][0]).toBeCloseTo(expectedLeg[4][0], 6);
  expect(route.approach[0][1]).toBeCloseTo(expectedLeg[4][1], 6);
});

test("the highlighted 6 to 7 path is the same route displayed on the map", async ({ page }, info) => {
  await enterSite(page, { stop: 7 });
  await page.locator("#map").scrollIntoViewIfNeeded();
  await page.evaluate(() => {
    focusStop(tappe.find(stop => stop.numero === 7), { autoplay: false, skipFly: true });
    map.invalidateSize({ animate: false });
    map.fitBounds([[43.69984, 10.58330], [43.70030, 10.58436]], {
      padding: [24, 24], animate: false, maxZoom: 20,
    });
  });
  const highlighted = await page.evaluate(() => activeRouteLayer.getLatLngs().map(point => [point.lng, point.lat]));
  expect(highlighted).toEqual(expectedLeg);
  await expect(page.locator(".map-route-active")).toBeVisible();
  await page.locator("#map").screenshot({ path: info.outputPath("pieve-torri-corrected.png") });
});
