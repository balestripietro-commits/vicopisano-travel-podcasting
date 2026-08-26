import { expect, test } from "@playwright/test";
import {
  collectRuntimeErrors,
  enterSite,
  expectAudioPlaying,
  expectClassObserved,
  expectNoRuntimeErrors,
  openFullPlayer,
  stopButton,
  watchClass,
} from "./helpers.mjs";

test("marker selects a stop, starts audio and keeps the full player closed", async ({ page }) => {
  const errors = collectRuntimeErrors(page);
  await enterSite(page);

  await watchClass(page, "#map-directions-button", "is-directions-cued");
  await page.locator(".map-marker").filter({ hasText: "3" }).click();
  await expectClassObserved(page, "is-directions-cued");
  await expect(page.locator('.stop-button[aria-current="true"] .stop-index')).toHaveText("3");
  await expect(page.locator("#player-overlay")).toBeHidden();
  await expectAudioPlaying(page);
  await expect(page.locator(".map-route-active")).toBeVisible();
  await expectNoRuntimeErrors(errors);
});

test("stop list selection provides the same route and directions feedback", async ({ page }) => {
  const errors = collectRuntimeErrors(page);
  await enterSite(page);

  await watchClass(page, "#map-directions-button", "is-directions-cued");
  await stopButton(page, 5).click();
  await expectClassObserved(page, "is-directions-cued");
  await expect(page.locator('.stop-button[aria-current="true"] .stop-index')).toHaveText("5");
  await expect(page.locator(".map-route-active")).toBeVisible();
  await expect(page.locator("#player-overlay")).toBeHidden();
  await expectAudioPlaying(page);
  await expectNoRuntimeErrors(errors);
});

test("full player controls playback, seek, speed, mute and transcript", async ({ page }, testInfo) => {
  test.setTimeout(60_000);
  const errors = collectRuntimeErrors(page);
  await enterSite(page);
  await stopButton(page, 2).click();
  await expectAudioPlaying(page);
  await openFullPlayer(page);

  await page.locator("#player-play-button").click();
  await expect.poll(() => page.locator("audio").evaluate((audio) => audio.paused)).toBe(true);
  await page.locator("#player-play-button").click();
  await expectAudioPlaying(page);

  await page.locator("audio").evaluate((audio) => {
    if (!Number.isFinite(audio.duration)) {
      Object.defineProperty(audio, "duration", { configurable: true, value: 224 });
    }
    audio.currentTime = 30;
  });
  await page.locator("#player-prev-button").click();
  await expect.poll(() => page.locator("audio").evaluate((audio) => audio.currentTime)).toBeLessThan(21);
  await page.locator("#player-next-button").click();
  await expect.poll(() => page.locator("audio").evaluate((audio) => audio.currentTime)).toBeGreaterThan(29);

  await page.locator("#player-speed-button").click();
  await expect(page.locator("#player-speed-button")).toHaveText("x1.5");
  await expect.poll(() => page.locator("audio").evaluate((audio) => audio.playbackRate)).toBe(1.5);

  if (testInfo.project.name === "desktop-chrome") {
    await page.locator("#player-mute").click();
    await expect.poll(() => page.locator("audio").evaluate((audio) => audio.muted)).toBe(true);
    await expect(page.locator("#player-volume")).toHaveValue("0");
    await page.locator("#player-mute").click();
    await expect.poll(() => page.locator("audio").evaluate((audio) => audio.muted)).toBe(false);
  }

  await page.evaluate(() => {
    Object.defineProperty(navigator, "share", {
      configurable: true,
      value: async (data) => {
        window.__e2eSharedStop = data;
      },
    });
  });
  await page.locator("#player-share-button").click();
  await expect.poll(() => page.evaluate(() => window.__e2eSharedStop?.url)).toContain("tappa=2");

  await expect(page.locator("#player-transcript-dock")).toBeVisible();
  await page.locator("#detail-copy-title").click();
  await expect(page.locator("#detail-copy-panel")).toBeVisible();
  await page.locator("#detail-copy-title").click();
  await expect(page.locator("#detail-copy-panel")).toBeHidden();

  await watchClass(page, "#player-overlay", "is-closing");
  await page.locator("#player-close-button").click();
  await expectClassObserved(page, "is-closing");
  await expect(page.locator("#player-overlay")).toBeHidden();
  await expectNoRuntimeErrors(errors);
});

test("previous and next navigation reflects first, intermediate and last stops", async ({ page }) => {
  const errors = collectRuntimeErrors(page);
  await enterSite(page);
  await openFullPlayer(page);

  await expect(page.locator("#player-previous-preview")).toBeHidden();
  await expect(page.locator("#player-next-preview")).toBeVisible();
  await page.locator("#player-next-stop-button").click();
  await expect(page.locator("#detail-number")).toHaveText("2");
  await expect(page.locator("#player-previous-preview")).toBeVisible();
  await expect(page.locator("#player-next-preview")).toBeVisible();

  await page.locator("#player-close-button").click();
  await stopButton(page, 7).click();
  await openFullPlayer(page);
  await expect(page.locator("#player-previous-preview")).toBeVisible();
  await expect(page.locator("#player-next-preview")).toBeHidden();
  await expectNoRuntimeErrors(errors);
});

test("ending a track advances and autoplays, except on the last stop", async ({ page }) => {
  const errors = collectRuntimeErrors(page);
  await enterSite(page);
  await stopButton(page, 1).click();
  await expectAudioPlaying(page);

  await page.locator("audio").evaluate((audio) => audio.dispatchEvent(new Event("ended")));
  await expect(page.locator('.stop-button[aria-current="true"] .stop-index')).toHaveText("2");
  await expectAudioPlaying(page);

  await stopButton(page, 7).click();
  await expectAudioPlaying(page);
  await page.locator("audio").evaluate((audio) => audio.dispatchEvent(new Event("ended")));
  await expect(page.locator('.stop-button[aria-current="true"] .stop-index')).toHaveText("7");
  await expectNoRuntimeErrors(errors);
});
