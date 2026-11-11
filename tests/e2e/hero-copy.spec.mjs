import { expect, test } from "@playwright/test";
import { enterSite } from "./helpers.mjs";

for (const language of ["it", "en", "de", "fr", "es", "pt", "ru"]) {
  test(`${language}: compact introduction, Italian greeting and monument names`, async ({ page }, info) => {
    if (info.project.name === "mobile-chrome") await page.setViewportSize({ width: 375, height: 812 });
    await enterSite(page, { language });
    await expect(page.locator("#landing-title")).toHaveText("Buondì!");
    const copy = page.locator("#intro-text");
    const result = await page.evaluate(() => {
      const element = document.querySelector("#intro-text");
      const text = element.textContent;
      const box = element.getBoundingClientRect();
      const range = document.createRange();
      range.selectNodeContents(element);
      // The gold closing quote intentionally extends below the text box.
      // Check the real text rectangles, not pseudo-element scroll overflow.
      const textRects = [...range.getClientRects()].filter(rect => rect.width > 0);
      return {
        text,
        length: text.length,
        italianLength: getUiStrings("IT").intro.length,
        clipped: textRects.some(rect => rect.bottom > box.bottom + 1 || rect.right > box.right + 1),
        italianNames: tappe.every(stop => getStopTitle(stop, currentLanguage) === getStopTitle(stop, "IT")),
        greetings: tappe.map(() => getUiStrings(currentLanguage).mainTitle),
        bodyFont: getComputedStyle(element).fontFamily,
        nameFont: getComputedStyle(document.querySelector("#intro-lead-text")).fontFamily,
      };
    });
    expect(result.length).toBeLessThanOrEqual(result.italianLength * 1.2);
    expect(result.text.split("\n")).toHaveLength(3);
    expect(result.clipped, `${language} introduction must not be cut off`).toBe(false);
    expect(result.italianNames).toBe(true);
    expect(result.greetings).toEqual(Array(8).fill("Buondì!"));
    expect(result.bodyFont).toBe(result.nameFont);
    await expect(copy).toBeVisible();
    if (["it", "de", "fr", "ru"].includes(language)) {
      await page.locator(".intro-copy").screenshot({ path: info.outputPath(`hero-${language}.png`) });
    }
  });
}
