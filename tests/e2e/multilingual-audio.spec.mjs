import { expect, test } from "@playwright/test";
import { enterSite, openFullPlayer, stopButton, expectAudioPlaying } from "./helpers.mjs";

const codes = ["en", "fr", "de", "es", "pt", "ru"];

test("all six language packs have eight distinct narrations and two reusable interludes", async ({ page, request }, info) => {
  test.skip(info.project.name !== "desktop-chrome", "The asset matrix is viewport-independent.");
  test.setTimeout(120_000);
  await enterSite(page);
  const catalog = await page.evaluate(() => window.VICOPISANO_MULTILINGUAL);
  expect(catalog.readyLanguages.slice().sort()).toEqual(codes.map(x => x.toUpperCase()).sort());
  expect(catalog.tracks).toHaveLength(48);
  for (const code of codes) {
    const tracks = catalog.tracks.filter(track => track.code === code.toUpperCase());
    expect(tracks.map(track => track.stop)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    for (const track of tracks) {
      expect(track.ready).toBe(true);
      expect(track.audio).toMatch(new RegExp(`^audio/${code}/.+_${code}\\.mp3\\?v=`));
      const response = await request.get(`/${track.audio}`, { headers: { Range: "bytes=0-1023" } });
      expect(response.status()).toBe(206);
      const captions = await request.get(`/${track.subtitleSource}`);
      expect(captions.ok()).toBe(true);
      const document = await captions.json();
      expect(document.language).toBe(code);
      expect(document.segments.length).toBeGreaterThan(5);
      let end = 0;
      for (const segment of document.segments) {
        expect(segment.start).toBeGreaterThanOrEqual(end);
        expect(segment.end).toBeGreaterThan(segment.start);
        expect(segment.end).toBeLessThanOrEqual(document.audio.duration + 0.05);
        end = segment.end;
      }
    }
    const interludes = catalog.interludes[code.toUpperCase()];
    expect(Object.keys(interludes).sort()).toEqual(["between", "final"]);
    for (const [kind, interlude] of Object.entries(interludes)) {
      expect(interlude.ready).toBe(true);
      expect(interlude.audio).toContain(`/transition_${kind === "between" ? "between_stops" : "final"}_${code}.mp3`);
      expect((await request.get(`/${interlude.audio}`, { headers: { Range: "bytes=0-1023" } })).status()).toBe(206);
      expect(interlude.transcript.segments.length).toBeGreaterThan(0);
    }
  }
});

for (const code of codes) {
  test(`${code}: direct links, player, localized captions and repeated interlude`, async ({ page }) => {
    test.setTimeout(90_000);
    await enterSite(page, { language: code, stop: 2 });
    await expect(page.locator("html")).toHaveAttribute("lang", code);
    await expect(page.locator("audio")).toHaveAttribute("src", new RegExp(`audio/${code}/02_`));
    await stopButton(page, 3).click();
    await expectAudioPlaying(page);
    await expect(page.locator("audio")).toHaveAttribute("src", new RegExp(`audio/${code}/03_`));
    const captionReady = await page.waitForFunction(() => activeMapTranscript?.segments?.length > 0);
    await captionReady.dispose();
    expect(await page.evaluate(() => activeMapTranscript.language)).toBe(code);
    const expectedText = await page.evaluate(() => window.VICOPISANO_MULTILINGUAL.tracks.find(t => t.stop === 3 && t.code === currentLanguage).text);
    await expect(page.locator("#detail-description")).toContainText(expectedText.split("\n")[0]);
    await page.locator("audio").evaluate(audio => audio.dispatchEvent(new Event("ended")));
    await expect(page.locator("body")).toHaveClass(/is-transition-audio/);
    await expect(page.locator("audio")).toHaveAttribute("src", new RegExp(`transition_between_stops_${code}\\.mp3`));
    expect(await page.evaluate(() => activeMapTranscript.language)).toBe(code);
    await page.locator("audio").evaluate(audio => audio.dispatchEvent(new Event("ended")));
    await expect(page.locator("#detail-number")).toHaveText("4");
    await expect(page.locator("audio")).toHaveAttribute("src", new RegExp(`audio/${code}/04_`));
    expect(await page.locator("audio").evaluate(audio => audio.paused)).toBe(true);
    await page.reload({ waitUntil: "domcontentloaded" });
    await expect(page.locator("html")).toHaveAttribute("lang", code);
    await expect(page.locator("audio")).toHaveAttribute("src", new RegExp(`audio/${code}/04_`));
  });
}

test("the translated final interlude returns to a replayable last stop", async ({ page }) => {
  await enterSite(page, { language: "fr", stop: 8 });
  await stopButton(page, 8).click();
  await expectAudioPlaying(page);
  await page.locator("audio").evaluate(audio => audio.dispatchEvent(new Event("ended")));
  await expect(page.locator("audio")).toHaveAttribute("src", /transition_final_fr\.mp3/);
  await page.locator("audio").evaluate(audio => audio.dispatchEvent(new Event("ended")));
  await expect(page.locator("body")).not.toHaveClass(/is-transition-audio/);
  await expect(page.locator("audio")).toHaveAttribute("src", /08_palazzo_comunale_fr\.mp3/);
  expect(await page.locator("audio").evaluate(audio => audio.paused)).toBe(true);
  await page.locator("#mini-player-toggle").click();
  await expectAudioPlaying(page);
});

test("a language switch starts its own narration and subtitle timing from zero", async ({ page }) => {
  await enterSite(page, { language: "en", stop: 3 });
  await page.locator("audio").evaluate(audio => { audio.currentTime = 45; });
  await page.evaluate(() => setCurrentLanguage("DE", { animate: false }));
  await expect(page.locator("audio")).toHaveAttribute("src", /audio\/de\/03_/);
  expect(await page.locator("audio").evaluate(audio => audio.currentTime)).toBeLessThan(1);
  await page.waitForFunction(() => activeMapTranscript?.language === "de");
  await openFullPlayer(page);
});

test("translated live captions are visible during narration and the interlude", async ({ page }, info) => {
  test.setTimeout(90_000);
  await enterSite(page, { language: "ru", stop: 4 });
  await stopButton(page, 4).click();
  await expectAudioPlaying(page);
  await openFullPlayer(page);
  const mobile = info.project.name === "mobile-chrome";
  if (mobile) await page.locator("#player-map-button").click();
  await page.waitForFunction(() => activeMapTranscript?.language === "ru");
  await page.evaluate(() => {
    const segment = activeMapTranscript.segments[0];
    currentAudio.currentTime = segment.start + Math.min(0.2, (segment.end - segment.start) / 2);
    currentAudio.dispatchEvent(new Event("timeupdate"));
  });
  const caption = page.locator(mobile ? "#player-mobile-live-transcript" : "#map-live-caption");
  await expect(caption).toBeVisible();
  const initialText = await page.evaluate(() => activeMapTranscript.segments[0].text);
  await expect(caption).toContainText(initialText.split(/\s+/)[0]);
  await page.screenshot({ path: info.outputPath("multilingual-captions.png") });
  await page.locator("audio").evaluate(audio => audio.dispatchEvent(new Event("ended")));
  await expect(page.locator("audio")).toHaveAttribute("src", /transition_between_stops_ru\.mp3/);
  await expect(caption).toBeVisible();
  await expect(caption).toContainText("Эта");
});
