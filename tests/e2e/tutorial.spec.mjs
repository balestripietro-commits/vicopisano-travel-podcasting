import { expect, test } from "@playwright/test";
import { collectRuntimeErrors, enterSite, expectInsideViewport, expectNoRuntimeErrors } from "./helpers.mjs";

test("tutorial supports forward, back, close and final step", async ({ page }) => {
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
  await expectInsideViewport(guide, page);

  const secondText = await text.textContent();
  await previous.click();
  await expect(text).toHaveText(firstText);
  await next.click();
  await expect(text).toHaveText(secondText);

  await next.click();
  await next.click();
  await expectInsideViewport(guide, page);
  await next.click();
  await expect(page.locator("#player-overlay")).toBeVisible();
  await expectInsideViewport(guide, page);
  await expect(next).toHaveText("✓");

  await next.click();
  await expect(page.locator("#guide-layer")).toBeHidden();
  await expect(page.locator("#player-overlay")).toBeHidden();
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
