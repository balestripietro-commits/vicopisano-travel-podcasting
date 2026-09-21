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

test("hero mascot acknowledges mouse and touch activation with its dedicated jump", async ({ page }, testInfo) => {
  const errors = collectRuntimeErrors(page);
  await enterSite(page);

  const mascot = page.locator(".mascot-motion-shell--hero");
  await expect(mascot).toHaveAttribute("role", "button");
  await watchClass(page, ".mascot-motion-shell--hero", "is-hero-tap-reaction");
  if (testInfo.project.name === "mobile-chrome") {
    const box = await mascot.boundingBox();
    expect(box).not.toBeNull();
    await page.touchscreen.tap(box.x + box.width / 2, box.y + box.height / 2);
  } else {
    await mascot.click();
  }
  await expectClassObserved(page, "is-hero-tap-reaction");
  await expect(mascot).toHaveCSS("animation-name", "mascot-hero-tap-reaction");
  await expectNoRuntimeErrors(errors);
});

test("mini player cycles playback speed like the full player", async ({ page }) => {
  const errors = collectRuntimeErrors(page);
  await enterSite(page);
  await stopButton(page, 1).click();
  await expectAudioPlaying(page);

  const speedButton = page.locator("#mini-player-speed-button");
  await expect(speedButton).toHaveText("x1");
  await expect(page.locator("[data-mini-playback-rate]")).toHaveCount(0);
  await expect(page.locator("#mini-player-mute, #mini-player-volume, #player-mute, #player-volume")).toHaveCount(0);
  await expect.poll(() => page.locator("audio").evaluate((audio) => ({ volume: audio.volume, muted: audio.muted }))).toEqual({ volume: 1, muted: false });
  await speedButton.click();
  await expect(speedButton).toHaveText("x1,5");
  await expect.poll(() => page.locator("audio").evaluate((audio) => audio.playbackRate)).toBe(1.5);
  await speedButton.click();
  await expect(speedButton).toHaveText("x2");
  await speedButton.click();
  await expect(speedButton).toHaveText("x1");
  await expect.poll(() => page.locator("audio").evaluate((audio) => audio.playbackRate)).toBe(1);
  await expectNoRuntimeErrors(errors);
});

test("desktop mini-player dedicates the remaining row to the seek timeline", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop-chrome", "The expanded mini-player row is desktop-only.");
  const errors = collectRuntimeErrors(page);
  await enterSite(page);

  const [controlsBox, timelineBox, seekBox, expandBox] = await Promise.all([
    page.locator(".mini-player-controls").boundingBox(),
    page.locator(".mini-player-timeline").boundingBox(),
    page.locator("#mini-player-progress-input").boundingBox(),
    page.locator("#mini-player-expand").boundingBox(),
  ]);
  expect(controlsBox).not.toBeNull();
  expect(timelineBox).not.toBeNull();
  expect(seekBox).not.toBeNull();
  expect(expandBox).not.toBeNull();
  expect(timelineBox.x).toBeGreaterThanOrEqual(controlsBox.x + controlsBox.width + 12);
  expect(timelineBox.x + timelineBox.width).toBeLessThanOrEqual(expandBox.x - 12);
  expect(seekBox.width).toBeGreaterThanOrEqual(330);
  await expectNoRuntimeErrors(errors);
});

test("desktop home keeps the stop photo square while prioritizing the map", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop-chrome", "The square home preview is desktop-only.");
  const errors = collectRuntimeErrors(page);
  await enterSite(page);

  const [mapBox, previewBox, imageBox] = await Promise.all([
    page.locator(".map-stage").boundingBox(),
    page.locator("#stop-preview").boundingBox(),
    page.locator("#stop-preview-image").boundingBox(),
  ]);
  expect(mapBox).not.toBeNull();
  expect(previewBox).not.toBeNull();
  expect(imageBox).not.toBeNull();
  expect(Math.abs(imageBox.width - imageBox.height)).toBeLessThanOrEqual(1);
  expect(mapBox.width).toBeGreaterThan(previewBox.width);
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

test("selected narration advances after playback starts", async ({ page }) => {
  const errors = collectRuntimeErrors(page);
  await enterSite(page);

  await stopButton(page, 2).click();
  await page.waitForTimeout(800);
  const initialAudioState = await page.locator("audio").evaluate((audio) => ({
    paused: audio.paused,
    ended: audio.ended,
    currentTime: audio.currentTime,
    readyState: audio.readyState,
    networkState: audio.networkState,
    error: audio.error?.message || null,
    currentSrc: audio.currentSrc,
  }));
  expect(initialAudioState, JSON.stringify(initialAudioState)).toMatchObject({ paused: false });
  const startTime = await page.locator("audio").evaluate((audio) => audio.currentTime);
  await page.waitForTimeout(1_000);
  await expect
    .poll(() => page.locator("audio").evaluate((audio) => audio.currentTime))
    .toBeGreaterThan(startTime + 0.15);
  await expectNoRuntimeErrors(errors);
});

test("mascot lip sync preloads cues and applies the visual lead", async ({ page }) => {
  const errors = collectRuntimeErrors(page);
  await enterSite(page);

  await stopButton(page, 1).click();
  await expectAudioPlaying(page);
  await page.locator("audio").evaluate((audio) => {
    audio.currentTime = 0.44;
    audio.dispatchEvent(new Event("seeking"));
    audio.dispatchEvent(new Event("seeked"));
  });

  await expect
    .poll(() => page.locator("#detail-mascot-image").getAttribute("src"))
    .toContain("mascotte_F.webp");
  await expectNoRuntimeErrors(errors);
});

test("Italian master audio keeps the map subtitle synchronized and fades it after pause", async ({ page }, testInfo) => {
  test.setTimeout(60_000);
  const errors = collectRuntimeErrors(page);
  await enterSite(page);

  await stopButton(page, 1).click();
  await expectAudioPlaying(page);
  const caption = page.locator("#map-live-caption");
  await expect(caption).toBeVisible();

  await page.locator("audio").evaluate((audio) => {
    audio.currentTime = 74;
    audio.dispatchEvent(new Event("seeking"));
    audio.dispatchEvent(new Event("seeked"));
    audio.dispatchEvent(new Event("timeupdate"));
  });
  await expect(caption).toContainText("Torre delle Quattro Porte");
  if (testInfo.project.name === "desktop-chrome") {
    await expect(caption).toHaveCSS("white-space", "nowrap");
    await page.locator("#map-fullscreen-button").click();
    await expect(page.locator("body")).toHaveClass(/is-map-player-panel/);
    await page.locator("audio").evaluate((audio) => audio.dispatchEvent(new Event("timeupdate")));
    await expect(caption).toHaveCSS("white-space", "pre-line");
    await expect(caption).toHaveText(/\n/);
  }

  await page.locator("audio").evaluate((audio) => audio.pause());
  await expect(caption).toBeVisible();
  await page.waitForTimeout(3_000);
  await expect(caption).toBeHidden();
  await expectNoRuntimeErrors(errors);
});

test("map location control recenters the route on desktop and locates the user on mobile", async ({ page }, testInfo) => {
  const errors = collectRuntimeErrors(page);
  if (testInfo.project.name !== "desktop-chrome") {
    await page.context().grantPermissions(["geolocation"]);
    await page.context().setGeolocation({ latitude: 43.6995, longitude: 10.5865, accuracy: 12 });
  }
  await enterSite(page);

  await expect(page.locator("#map-recenter-button")).toHaveAttribute("aria-label", /.+/);
  await expect(page.locator("#map-recenter-button .material-symbols-rounded")).toHaveText("my_location");
  await page.locator("#map-recenter-button").click();
  if (testInfo.project.name !== "desktop-chrome") {
    await expect(page.locator(".map-user-location-marker")).toBeVisible();
    await expect(page.locator("#map-load-status")).toContainText("Posizione trovata");
    await expectNoRuntimeErrors(errors);
    return;
  }

  await expect(page.locator("#map-recenter-button")).not.toHaveClass(/is-recenter-cued/);
  await expect(page.locator("#map-recenter-button")).toHaveClass(/is-route-centered/);
  await expect(page.locator("#map-recenter-button")).toHaveAttribute("data-route-off-center", "false");
  await expect(page.locator("#map-recenter-button")).toHaveAttribute("data-route-centered", "true");
  const recenterStyles = await page.locator("#map-recenter-button").evaluate((button) => {
    const centered = getComputedStyle(button);
    const centeredStyles = { background: centered.backgroundColor, border: centered.borderColor, shadow: centered.boxShadow };
    button.classList.remove("is-route-centered");
    const standard = getComputedStyle(button);
    const standardStyles = { background: standard.backgroundColor, border: standard.borderColor, shadow: standard.boxShadow };
    button.classList.add("is-route-centered");
    return { centeredStyles, standardStyles };
  });
  expect(recenterStyles.centeredStyles).toEqual(recenterStyles.standardStyles);
  await expectNoRuntimeErrors(errors);
});

test("map cannot zoom out beyond the local route context", async ({ page }) => {
  const errors = collectRuntimeErrors(page);
  await enterSite(page);

  const zoomOut = page.getByRole("button", { name: "Zoom out" });
  for (let attempt = 0; attempt < 8; attempt += 1) {
    if ((await zoomOut.getAttribute("aria-disabled")) === "true") {
      break;
    }
    await zoomOut.click({ force: true });
  }

  await expect(zoomOut).toHaveAttribute("aria-disabled", "true");
  await expect(page.locator(".map-marker")).toHaveCount(7);
  await expect(page.locator("#map-recenter-button")).toHaveAttribute("data-route-off-center", "false");
  await expectNoRuntimeErrors(errors);
});

test("desktop map stays anchored above the mini-player while the stops column scrolls", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop-chrome", "The split sticky layout is desktop-only.");
  const errors = collectRuntimeErrors(page);
  await enterSite(page);

  await page.waitForTimeout(1_000);
  await page.evaluate(() => window.scrollTo({ top: window.innerHeight * 0.7, behavior: "auto" }));
  await page.waitForTimeout(180);
  const pageScrollY = await page.evaluate(() => window.scrollY);
  expect(pageScrollY).toBeGreaterThan(0);

  const [mapBox, miniPlayerBox] = await Promise.all([
    page.locator(".map-stage-frame").boundingBox(),
    page.locator(".mini-player").boundingBox(),
  ]);
  expect(mapBox).not.toBeNull();
  expect(miniPlayerBox).not.toBeNull();
  expect(mapBox.y + mapBox.height).toBeLessThanOrEqual(miniPlayerBox.y - 8);
  expect(miniPlayerBox.y - (mapBox.y + mapBox.height)).toBeLessThanOrEqual(28);
  await expectNoRuntimeErrors(errors);
});

test("free mini-player areas open the desktop map experience or mobile full player without hijacking controls", async ({ page }, testInfo) => {
  const errors = collectRuntimeErrors(page);
  await enterSite(page);

  await page.locator("#mini-player-toggle").click();
  await expect(page.locator("#player-overlay")).toBeHidden();

  await page.locator("#mini-player-open").click();
  if (testInfo.project.name === "desktop-chrome") {
    await expect(page.locator("body")).toHaveClass(/is-map-fullscreen/);
    await expect(page.locator("#player-overlay")).toHaveClass(/is-map-panel/);
  } else {
    await expect(page.locator("#player-overlay")).toBeVisible();
    await expect(page.locator("#player-overlay")).toHaveAttribute("aria-hidden", "false");
  }
  await expectNoRuntimeErrors(errors);
});

test("mini-player expansion opens Explore on desktop and the full player on mobile", async ({ page }, testInfo) => {
  const errors = collectRuntimeErrors(page);
  await enterSite(page);

  await page.locator("#mini-player-expand").click();
  if (testInfo.project.name === "desktop-chrome") {
    await expect(page.locator("body")).toHaveClass(/is-map-fullscreen/);
    await expect(page.locator(".map-stage-frame")).toHaveClass(/is-expanded/);
    if (await page.locator("#player-overlay").isVisible()) {
      await expect(page.locator("#player-overlay")).toHaveClass(/is-map-panel/);
    }
  } else {
    await expect(page.locator("#player-overlay")).toBeVisible();
    await expect(page.locator("#player-overlay")).toHaveAttribute("aria-hidden", "false");
    await expect(page.locator("body")).not.toHaveClass(/is-map-fullscreen/);
    await expect(page.locator("#mini-player-expand")).toHaveAttribute(
      "aria-label",
      "Apri player a schermo intero",
    );
  }

  await expectNoRuntimeErrors(errors);
});

test("mobile removes map fullscreen and anchors the live transcript at the map bottom", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === "desktop-chrome", "The mobile map layout is phone-only.");
  const errors = collectRuntimeErrors(page);
  await enterSite(page);

  await expect(page.locator("#map-fullscreen-button")).toBeHidden();
  await stopButton(page, 1).click();
  await expectAudioPlaying(page);
  const [mapBox, captionBox] = await Promise.all([
    page.locator("#map").boundingBox(),
    page.locator("#map-live-caption").boundingBox(),
  ]);
  expect(mapBox).not.toBeNull();
  expect(captionBox).not.toBeNull();
  expect(captionBox.bottom).toBeLessThanOrEqual(mapBox.bottom - 12);

  await expectNoRuntimeErrors(errors);
});

test("desktop Explore mode keeps all player controls in the contextual panel", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop-chrome", "The side player panel is desktop-only.");
  test.setTimeout(60_000);
  const errors = collectRuntimeErrors(page);
  await enterSite(page);

  await page.locator("#map-fullscreen-button").click();
  await expect(page.locator("#player-overlay")).toBeVisible();

  await expect(page.locator("body")).toHaveClass(/is-map-player-panel/);
  await expect(page.locator("#player-overlay")).toHaveClass(/is-map-panel/);
  await expect(page.locator(".mini-player")).toBeHidden();
  await expect(page.locator("#mini-player-expand")).toBeHidden();
  await expect(page.locator("#detail-number")).toBeHidden();
  await expect(page.locator("#player-share-button")).toBeHidden();
  await expect(page.locator("#player-overlay .player-timeline")).toBeVisible();
  await expect(page.locator("#player-overlay .player-command-row")).toBeVisible();
  await expect(page.locator("#map-live-caption")).toHaveCSS("white-space", "pre-line");
  await expect
    .poll(() => page.locator("#map-live-caption").evaluate((element) => getComputedStyle(element).webkitLineClamp))
    .toBe("2");
  await expect(page.locator("#mini-player-progress-input")).toBeHidden();
  await expect(page.locator(".mini-player-controls")).toBeHidden();
  await expect(page.locator("#player-next-preview-image")).toBeVisible();
  await expect(page.locator("#detail-title")).toBeVisible();
  await expect(page.locator(".mini-player-main")).toBeHidden();

  const [mapBox, playerBox] = await Promise.all([
    page.locator(".map-stage-frame").boundingBox(),
    page.locator("#player-overlay").boundingBox(),
  ]);
  expect(mapBox).not.toBeNull();
  expect(playerBox).not.toBeNull();
  expect(playerBox.x).toBeGreaterThanOrEqual(mapBox.x + mapBox.width - 1);

  const [artworkBox, navigationBox, panelTimelineBox, panelControlsBox, mapMascotBox] = await Promise.all([
    page.locator("#player-overlay .player-artwork").boundingBox(),
    page.locator(".player-stop-navigation").boundingBox(),
    page.locator("#player-overlay .player-timeline").boundingBox(),
    page.locator("#player-overlay .player-command-row").boundingBox(),
    page.locator("#map-explore-mascot-image").boundingBox(),
  ]);
  expect(artworkBox).not.toBeNull();
  expect(navigationBox).not.toBeNull();
  expect(panelTimelineBox).not.toBeNull();
  expect(panelControlsBox).not.toBeNull();
  expect(mapMascotBox).not.toBeNull();
  expect(artworkBox.x).toBeGreaterThanOrEqual(playerBox.x);
  expect(artworkBox.x + artworkBox.width).toBeLessThanOrEqual(playerBox.x + playerBox.width);
  expect(Math.abs(artworkBox.width - artworkBox.height)).toBeLessThanOrEqual(2);
  expect(navigationBox.y).toBeGreaterThan(artworkBox.y + artworkBox.height);
  await expect(page.locator("#player-transcript-dock")).toBeHidden();
  expect(panelTimelineBox.x).toBeGreaterThanOrEqual(playerBox.x);
  expect(panelTimelineBox.x + panelTimelineBox.width).toBeLessThanOrEqual(playerBox.x + playerBox.width);
  expect(panelControlsBox.y).toBeGreaterThan(panelTimelineBox.y);
  await expect(page.locator("#map-recenter-button")).toBeHidden();
  await expect(page.locator("#map-fullscreen-button")).toBeHidden();
  expect(mapMascotBox.x).toBeGreaterThanOrEqual(mapBox.x);
  expect(mapMascotBox.y + mapMascotBox.height).toBeLessThanOrEqual(mapBox.y + mapBox.height);
  expect(mapMascotBox.y).toBeGreaterThan(mapBox.y + mapBox.height / 2);
  expect(mapMascotBox.width).toBeGreaterThanOrEqual(170);
  expect(mapBox.y + mapBox.height).toBeGreaterThanOrEqual(playerBox.y + playerBox.height - 1);

  const [previousControlBox, playControlBox, nextControlBox] = await Promise.all([
    page.locator("#player-prev-button").boundingBox(),
    page.locator("#player-play-button").boundingBox(),
    page.locator("#player-next-button").boundingBox(),
  ]);
  expect(previousControlBox).not.toBeNull();
  expect(playControlBox).not.toBeNull();
  expect(nextControlBox).not.toBeNull();
  expect(playControlBox.x - (previousControlBox.x + previousControlBox.width)).toBeGreaterThanOrEqual(14);
  expect(nextControlBox.x - (playControlBox.x + playControlBox.width)).toBeGreaterThanOrEqual(14);

  await page.locator("#player-close-button").click();
  await expect(page.locator("#player-overlay")).toBeHidden();
  await expect(page.locator("body")).not.toHaveClass(/is-map-fullscreen/);
  await expect(page.locator("body")).not.toHaveClass(/is-map-player-panel/);
  await expect(page.locator(".map-stage-frame")).not.toHaveClass(/is-expanded/);
  await expectNoRuntimeErrors(errors);
});

test("full player controls playback, seek, speed and live transcript", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === "desktop-chrome", "Desktop keeps controls in the map experience.");
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
  await expect(page.locator("#player-seek-feedback")).toHaveText("−10s");
  await page.locator("#player-next-button").click();
  await expect.poll(() => page.locator("audio").evaluate((audio) => audio.currentTime)).toBeGreaterThan(29);
  await expect(page.locator("#player-seek-feedback")).toHaveText("+10s");
  await expect(page.locator(".seek-feedback")).toHaveCount(0);

  await page.locator("#player-speed-button").click();
  await expect(page.locator("#player-speed-button")).toHaveText("x1,5");
  await expect.poll(() => page.locator("audio").evaluate((audio) => audio.playbackRate)).toBe(1.5);

  if (testInfo.project.name === "desktop-chrome") {
    await expect(page.locator("#player-share-button")).toBeHidden();
  } else {
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
  }

  await expect(page.locator("#player-transcript-dock")).toBeVisible();
  await expect(page.locator("#detail-copy-title")).toBeHidden();
  await expect(page.locator("#player-mobile-live-transcript")).toBeVisible();
  await expect(page.locator("#player-mobile-live-transcript-text")).not.toHaveText("");

  await watchClass(page, "#player-overlay", "is-closing");
  await page.locator("#player-close-button").click();
  await expectClassObserved(page, "is-closing");
  await expect(page.locator("#player-overlay")).toBeHidden();
  await expectNoRuntimeErrors(errors);
});

test("previous and next navigation reflects first, intermediate and last stops", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === "desktop-chrome", "Desktop navigation is covered by Explore mode.");
  const errors = collectRuntimeErrors(page);
  await enterSite(page);
  await openFullPlayer(page);

  await expect(page.locator("#player-previous-preview")).toBeHidden();
  await expect(page.locator("#player-next-preview")).toBeVisible();
  await page.locator("#player-next-stop-button").click();
  await expect(page.locator("#detail-number")).toHaveText("2");
  await expect(page.locator("#player-previous-preview")).toBeVisible();
  await expect(page.locator("#player-next-preview")).toBeVisible();
  await expect(page.locator("#player-previous-preview-image")).toHaveAttribute("src", /.+/);
  await expect(page.locator("#player-next-preview-image")).toHaveAttribute("src", /.+/);

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
