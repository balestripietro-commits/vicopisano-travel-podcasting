import { expect, test } from "@playwright/test";
import {
  collectRuntimeErrors,
  enterSite,
  expectInsideViewport,
  expectNoRuntimeErrors,
  languageNames,
  openFullPlayer,
  stopButton,
} from "./helpers.mjs";

const languageChecks = [
  { code: "it", locate: "Trova la mia posizione" },
  { code: "en", locate: "Find my location" },
  { code: "de", locate: "Meinen Standort finden" },
  { code: "fr", locate: "Trouver ma position" },
  { code: "es", locate: "Encontrar mi posición" },
  { code: "pt", locate: "Encontrar minha localização" },
  { code: "ru", locate: "Найти мое местоположение" },
];

for (const { code, locate } of languageChecks) {
  test(`interface localization is complete in ${languageNames[code]}`, async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "desktop-chrome", "Language matrix runs once on desktop Chrome");
    const errors = collectRuntimeErrors(page);
    await enterSite(page, { language: code });

    await expect(page.locator("html")).toHaveAttribute("lang", code);
    await expect(page.locator("#global-language-current-label")).toHaveText(languageNames[code]);
    await expect(page.locator("#locate-me-button")).toHaveAttribute("aria-label", locate);
    await expect(page.locator("#map-directions-button")).not.toHaveAttribute("aria-label", "");
    await expect(page.locator("#mini-player-expand")).not.toHaveAttribute("aria-label", "");
    await expectNoRuntimeErrors(errors);
  });
}

test("full player fits the viewport without horizontal overflow", async ({ page }) => {
  const errors = collectRuntimeErrors(page);
  await enterSite(page, { stop: 6 });
  await openFullPlayer(page);

  await expect.poll(() => page.evaluate(() => getComputedStyle(document.documentElement).overflowX)).toBe("hidden");
  await expect.poll(() => page.locator("#player-overlay").evaluate((element) => element.scrollHeight <= element.clientHeight + 1)).toBe(true);
  await expectInsideViewport(page.locator("#player-play-button"), page);
  await expectInsideViewport(page.locator("#player-speed-button"), page);
  await expectInsideViewport(page.locator("#player-close-button"), page);
  await expectInsideViewport(page.locator("#player-transcript-dock"), page);
  await expectNoRuntimeErrors(errors);
});

test("reduced motion keeps route feedback functional without animation", async ({ page }) => {
  const errors = collectRuntimeErrors(page);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await enterSite(page);
  await stopButton(page, 4).click();

  await expect(page.locator("#map-directions-button")).toHaveClass(/is-directions-cued/);
  await expect(page.locator(".map-route-active")).toBeVisible();
  const animationDuration = await page.locator("#map-directions-button").evaluate(
    (element) => getComputedStyle(element).animationDuration,
  );
  expect(["0s", "0.001s"]).toContain(animationDuration);
  await expectNoRuntimeErrors(errors);
});

test("external platform and share links are valid", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop-chrome", "Link matrix runs once on desktop Chrome");
  const errors = collectRuntimeErrors(page);
  await enterSite(page);

  const links = page.locator(".platform-logo, .share-icon");
  expect(await links.count()).toBeGreaterThanOrEqual(8);
  for (const link of await links.all()) {
    const href = await link.getAttribute("href");
    expect(href).toMatch(/^(https?:|mailto:)/);
  }
  await expectNoRuntimeErrors(errors);
});

test("social sharing section is hidden only on mobile", async ({ page }, testInfo) => {
  const errors = collectRuntimeErrors(page);
  await enterSite(page);

  if (testInfo.project.name === "mobile-chrome") {
    await expect(page.locator(".share-panel")).toBeHidden();
  } else {
    await expect(page.locator(".share-panel")).toBeVisible();
  }
  await expect(page.locator(".platforms-panel")).toBeVisible();
  await expectNoRuntimeErrors(errors);
});
