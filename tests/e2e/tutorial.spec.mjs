import { expect, test } from "@playwright/test";
import { collectRuntimeErrors, enterSite, expectInsideViewport, expectNoRuntimeErrors } from "./helpers.mjs";

test("tutorial keeps desktop in the map experience and mobile in the full player", async ({ page }, testInfo) => {
  test.setTimeout(75_000);
  const errors = collectRuntimeErrors(page);
  await enterSite(page, { guide: true });

  const guide = page.locator("#guide-card");
  const text = page.locator("#guide-step-text");
  const next = page.locator("#guide-next-button");
  const previous = page.locator("#guide-prev-button");

  await expect(previous).toBeDisabled();
  const firstText = await text.textContent();

  await next.click();
  await expect(previous).toBeEnabled();
  await expect(text).not.toHaveText(firstText);
  await expect(guide).toHaveClass(/is-pointing-/);
  await expect(guide).not.toHaveClass(/is-repositioning/);
  await expectInsideViewport(guide, page);
  if (testInfo.project.name !== "desktop-chrome") {
    await expect(text).toContainText("ricentra");
    await expect(page.locator("#map-recenter-button")).toHaveClass(/is-guide-highlighted/);
    await expect(page.locator(".map-floating-controls")).toHaveCSS("z-index", "4250");

    await next.click();
    await expect(text).toContainText("Google Maps");
    const guideOverlapsDirections = await page.evaluate(() => {
      const guideRect = document.querySelector("#guide-card")?.getBoundingClientRect();
      const directionsRect = document.querySelector("#map-directions-button")?.getBoundingClientRect();
      if (!guideRect || !directionsRect) {
        return true;
      }
      return !(
        guideRect.right <= directionsRect.left ||
        guideRect.left >= directionsRect.right ||
        guideRect.bottom <= directionsRect.top ||
        guideRect.top >= directionsRect.bottom
      );
    });
    expect(guideOverlapsDirections).toBe(false);

    const directionsText = await text.textContent();
    await previous.click();
    await expect(text).toContainText("ricentra");
    await next.click();
    await expect(text).toHaveText(directionsText);
    await next.click();
  }

  await expect(guide).not.toHaveClass(/is-repositioning/);
  await expect(guide).not.toHaveClass(/is-arriving/);
  const stopsGuideGeometry = await page.evaluate(() => {
    const guide = document.querySelector("#guide-card");
    const guideRect = guide?.getBoundingClientRect();
    const panelRect = document.querySelector(".stops-panel")?.getBoundingClientRect();
    if (!guide || !guideRect || !panelRect) {
      return null;
    }

    return {
      overlaps: !(
        guideRect.right <= panelRect.left ||
        guideRect.left >= panelRect.right ||
        guideRect.bottom <= panelRect.top ||
        guideRect.top >= panelRect.bottom
      ),
      isAbove: guideRect.bottom <= panelRect.top - 8,
      pointerX: Number.parseFloat(getComputedStyle(guide).getPropertyValue("--guide-pointer-x")),
      targetX: panelRect.left + panelRect.width / 2 - guideRect.left,
    };
  });
  expect(stopsGuideGeometry).not.toBeNull();
  expect(stopsGuideGeometry.overlaps).toBe(false);
  expect(Math.abs(stopsGuideGeometry.pointerX - stopsGuideGeometry.targetX)).toBeLessThanOrEqual(1);
  if (testInfo.project.name === "desktop-chrome") {
    expect(stopsGuideGeometry.isAbove).toBe(true);
  }
  await expectInsideViewport(guide, page);
  const stopsGuidePosition = await page.evaluate(() => {
    const rect = document.querySelector("#guide-card")?.getBoundingClientRect();
    return rect ? { left: rect.left, top: rect.top } : null;
  });
  await page.waitForTimeout(850);
  const settledStopsGuidePosition = await page.evaluate(() => {
    const rect = document.querySelector("#guide-card")?.getBoundingClientRect();
    return rect ? { left: rect.left, top: rect.top } : null;
  });
  expect(stopsGuidePosition).not.toBeNull();
  expect(settledStopsGuidePosition).not.toBeNull();
  expect(Math.abs(stopsGuidePosition.left - settledStopsGuidePosition.left)).toBeLessThanOrEqual(1);
  expect(Math.abs(stopsGuidePosition.top - settledStopsGuidePosition.top)).toBeLessThanOrEqual(1);

  await next.click();
  await expect(text).toContainText("player resta");
  await expect(guide).not.toHaveClass(/is-repositioning/);
  await expectInsideViewport(guide, page);
  await next.click();

  if (testInfo.project.name === "desktop-chrome") {
    await expect(text).toContainText("mappa estesa");
    await expect(guide).not.toHaveClass(/is-repositioning/);
    await expectInsideViewport(guide, page);
    await expect(guide).toHaveClass(/is-pointing-down/);
    const exploreGuideGeometry = await page.evaluate(() => {
      const guideRect = document.querySelector("#guide-card")?.getBoundingClientRect();
      const expandRect = document.querySelector("#mini-player-expand")?.getBoundingClientRect();
      if (!guideRect || !expandRect) {
        return null;
      }
      const expandCenterX = expandRect.left + expandRect.width / 2;
      return {
        isAbove: guideRect.bottom <= expandRect.top - 8,
        pointsAtExpand: expandCenterX >= guideRect.left && expandCenterX <= guideRect.right,
      };
    });
    expect(exploreGuideGeometry).not.toBeNull();
    expect(exploreGuideGeometry.isAbove).toBe(true);
    expect(exploreGuideGeometry.pointsAtExpand).toBe(true);
    await expect(page.locator("#player-overlay")).toBeHidden();
    await expect(text).toContainText("mappa estesa");
    await expect(next).toHaveText("→");

    await next.click();
    await expect(page.locator("#guide-action-demo")).toHaveClass(/is-visible/);
    await expect(page.locator(".guide-action-demo-ripple")).toHaveCount(0);
    await expect(page.locator(".guide-action-demo-cursor")).toHaveText("touch_app");
    const actionDemoGeometry = await page.evaluate(() => {
      const demoRect = document.querySelector("#guide-action-demo")?.getBoundingClientRect();
      const targetRect = document.querySelector("#mini-player-expand")?.getBoundingClientRect();
      if (!demoRect || !targetRect) {
        return null;
      }

      return {
        xDifference: Math.abs(demoRect.left - (targetRect.left + targetRect.width / 2)),
        yDifference: Math.abs(demoRect.top - (targetRect.top + targetRect.height / 2)),
      };
    });
    expect(actionDemoGeometry).not.toBeNull();
    expect(actionDemoGeometry.xDifference).toBeLessThan(2);
    expect(actionDemoGeometry.yDifference).toBeLessThan(2);
    await expect(page.locator("#player-overlay")).toBeVisible({ timeout: 7_000 });
    await expect(page.locator("#player-overlay")).toHaveClass(/is-map-panel/);
    await expect(page.locator("body")).toHaveClass(/is-map-player-panel/);
    await expect(page.locator("#guide-layer")).toBeVisible();
    await expect(page.locator(".map-stage-frame")).toHaveClass(/is-guide-highlighted/);
    await expect(guide).not.toHaveClass(/is-floating-guide-card/);
    await expect(guide).toHaveClass(/is-pointing-up/);
    await expectInsideViewport(guide, page);
    const exploreMapGuideGeometry = await page.evaluate(() => {
      const guideRect = document.querySelector("#guide-card")?.getBoundingClientRect();
      const mapRect = document.querySelector(".map-stage-frame")?.getBoundingClientRect();
      if (!guideRect || !mapRect) {
        return null;
      }

      return {
        centered: Math.abs(
          guideRect.left + guideRect.width / 2 - (mapRect.left + mapRect.width / 2),
        ) <= 1,
        atBottom: guideRect.bottom <= mapRect.bottom - 16,
      };
    });
    expect(exploreMapGuideGeometry).not.toBeNull();
    expect(exploreMapGuideGeometry.centered).toBe(true);
    expect(exploreMapGuideGeometry.atBottom).toBe(true);
    const guideIsFrontmost = await page.evaluate(() => {
      const card = document.querySelector("#guide-card");
      const rect = card?.getBoundingClientRect();
      if (!card || !rect) {
        return false;
      }
      const topElement = document.elementFromPoint(
        rect.left + rect.width / 2,
        rect.top + rect.height / 2,
      );
      return topElement instanceof Node && card.contains(topElement);
    });
    expect(guideIsFrontmost).toBe(true);
    await expect(text).toContainText("vista estesa");
    await expect(next).toHaveText("✓");
    await page.waitForTimeout(450);
    await expect(page.locator("#guide-layer")).toBeVisible();
    await expect(text).toContainText("vista estesa");
  } else {
    await expect(page.locator("#player-overlay")).toBeVisible();
    await expect(text).toContainText("vista completa del player");
    await expect(next).toHaveText("✓");
  }

  await next.click();
  if (testInfo.project.name === "desktop-chrome") {
    await expect(page.locator("#guide-action-demo")).toHaveClass(/is-visible/);
  }
  await expect(page.locator("#guide-layer")).toBeHidden({ timeout: 10_000 });
  await expect(page.locator("#player-overlay")).toBeHidden({ timeout: 10_000 });
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
  await expect(page.locator(".app-shell")).toHaveJSProperty("inert", false);
  await expectNoRuntimeErrors(errors);
});

test("tutorial can be closed immediately", async ({ page }) => {
  const errors = collectRuntimeErrors(page);
  await enterSite(page, { guide: true });
  await page.locator("#guide-skip-button").click();
  await expect(page.locator("#guide-layer")).toBeHidden();
  await expect(page.locator("#player-overlay")).toBeHidden();
  await expectNoRuntimeErrors(errors);
});

test("tutorial asks for confirmation before interrupting from its backdrop", async ({ page }) => {
  const errors = collectRuntimeErrors(page);
  await enterSite(page, { guide: true });

  const guide = page.locator("#guide-layer");
  const confirm = page.locator("#guide-exit-confirm");
  const initialStep = await page.locator("#guide-step-text").textContent();
  await guide.click({ position: { x: 8, y: 8 } });
  await expect(confirm).toBeVisible();
  await expect(confirm).toContainText("Vuoi interrompere il tutorial?");
  await expect(confirm).toHaveCSS("background-color", "rgb(255, 255, 255)");

  await page.locator("#guide-exit-confirm-cancel").click();
  await expect(confirm).toBeHidden();
  await expect(page.locator("#guide-step-text")).toHaveText(initialStep);

  await guide.click({ position: { x: 8, y: 8 } });
  await page.locator("#guide-exit-confirm-accept").click();
  await expect(guide).toBeHidden();
  await expect(page.locator(".app-shell")).toHaveJSProperty("inert", false);
  await expectNoRuntimeErrors(errors);
});

test("tutorial blocks pointer, keyboard and assistive access to background controls", async ({ page }, testInfo) => {
  const errors = collectRuntimeErrors(page);
  await enterSite(page, { guide: true });

  await expect(page.locator(".app-shell")).toHaveJSProperty("inert", true);
  await expect(page.locator("#mini-player")).toHaveJSProperty("inert", true);
  await expect(page.locator("#guide-next-button")).toBeFocused();

  const stop = page.locator(".stop-button").nth(1);
  const stopBox = await stop.boundingBox();
  expect(stopBox).not.toBeNull();
  await page.mouse.click(stopBox.x + stopBox.width / 2, stopBox.y + stopBox.height / 2);
  await expect(page.locator('.stop-button[aria-current="true"] .stop-index')).toHaveText("1");

  if (testInfo.project.name === "desktop-chrome") {
    await expect(page.locator("#guide-exit-confirm")).toBeVisible();
    await page.locator("#guide-exit-confirm-cancel").click();
    await expect(page.locator("#guide-exit-confirm")).toBeHidden();
  }
  await page.locator("#guide-skip-button").click();
  await expect(page.locator(".app-shell")).toHaveJSProperty("inert", false);
  await expect(page.locator("#mini-player")).toHaveJSProperty("inert", false);
  await expectNoRuntimeErrors(errors);
});
