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

  const [miniTitle, miniTimeline, miniControls, miniArtwork, stopPreviewImage] = await Promise.all([
    page.locator("#mini-player-title").boundingBox(),
    page.locator(".TPMiniPlayer .mini-player-timeline").boundingBox(),
    page.locator(".TPMiniPlayer .mini-player-controls").boundingBox(),
    page.locator("#mini-player-artwork").boundingBox(),
    page.locator("#stop-preview-image").boundingBox(),
  ]);
  [miniTitle, miniTimeline, miniControls, miniArtwork, stopPreviewImage].forEach((box) => expect(box).not.toBeNull());
  expect(miniTimeline.y).toBeGreaterThan(miniTitle.y + miniTitle.height - 1);
  expect(miniTimeline.y + miniTimeline.height).toBeLessThanOrEqual(miniControls.y + 1);
  expect(Math.abs(miniArtwork.width - miniArtwork.height)).toBeLessThanOrEqual(1);
  expect(Math.abs(stopPreviewImage.width - stopPreviewImage.height)).toBeLessThanOrEqual(1);

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
    "#player-mobile-live-transcript",
  ];

  for (const selector of controls) {
    const control = page.locator(selector);
    await expect(control).toBeVisible();
    await expectInsideViewport(control, page);
  }

  const [fullArtwork, nextPreviewImage] = await Promise.all([
    page.locator("#detail-artwork-image").boundingBox(),
    page.locator("#player-next-preview-image").boundingBox(),
  ]);
  [fullArtwork, nextPreviewImage].forEach((box) => expect(box).not.toBeNull());
  expect(Math.abs(fullArtwork.width - fullArtwork.height)).toBeLessThanOrEqual(1);
  expect(Math.abs(nextPreviewImage.width - nextPreviewImage.height)).toBeLessThanOrEqual(1);

  const controlBoxes = await Promise.all([
    page.locator("#player-prev-button").boundingBox(),
    page.locator("#player-play-button").boundingBox(),
    page.locator("#player-next-button").boundingBox(),
    page.locator("#player-speed-button").boundingBox(),
  ]);
  controlBoxes.forEach((box) => expect(box).not.toBeNull());

  const centers = controlBoxes.map((box) => ({
    x: box.x + box.width / 2,
    y: box.y + box.height / 2,
  }));
  const gaps = centers.slice(1).map((center, index) => center.x - centers[index].x);
  const averageGap = gaps.reduce((sum, gap) => sum + gap, 0) / gaps.length;

  centers.forEach((center) => expect(Math.abs(center.y - centers[0].y)).toBeLessThanOrEqual(1));
  gaps.forEach((gap) => expect(Math.abs(gap - averageGap)).toBeLessThanOrEqual(2));

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
