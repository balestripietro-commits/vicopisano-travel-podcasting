import { expect, test } from "@playwright/test";
import {
  collectRuntimeErrors,
  enterSite,
  expectInsideViewport,
  expectNoRuntimeErrors,
  openFullPlayer,
  stopButton,
} from "./helpers.mjs";

test("low mobile viewport keeps the full player controls and stop navigation on screen", async ({ page }) => {
  const errors = collectRuntimeErrors(page);
  await enterSite(page);
  await stopButton(page, 6).click();
  await openFullPlayer(page);

  await expect
    .poll(() => page.locator("#player-overlay").evaluate((element) => element.scrollHeight <= element.clientHeight + 1))
    .toBe(true);

  const controls = [
    "#player-close-button",
    "#detail-title",
    "#player-progress-input",
    "#player-play-button",
    "#player-speed-button",
    "#player-previous-preview",
    "#player-next-preview",
    "#player-transcript-dock",
  ];

  for (const selector of controls) {
    const control = page.locator(selector);
    await expect(control).toBeVisible();
    await expectInsideViewport(control, page);
  }

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
  );
  expect(hasHorizontalOverflow).toBe(false);
  await expectNoRuntimeErrors(errors);
});

test("low mobile viewport keeps the mini-player tutorial callout visible and separate", async ({ page }) => {
  const errors = collectRuntimeErrors(page);
  await enterSite(page, { guide: true });

  const guide = page.locator("#guide-card");
  const miniPlayer = page.locator("#mini-player");
  const next = page.locator("#guide-next-button");

  await next.click();
  await next.click();
  await next.click();

  await expect(miniPlayer).toHaveClass(/is-guide-highlighted/);
  await expectInsideViewport(guide, page);
  await expectInsideViewport(miniPlayer, page);

  const [guideBox, miniPlayerBox] = await Promise.all([guide.boundingBox(), miniPlayer.boundingBox()]);
  expect(guideBox).not.toBeNull();
  expect(miniPlayerBox).not.toBeNull();
  expect(guideBox.y + guideBox.height).toBeLessThanOrEqual(miniPlayerBox.y + 1);

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
  );
  expect(hasHorizontalOverflow).toBe(false);
  await expectNoRuntimeErrors(errors);
});
