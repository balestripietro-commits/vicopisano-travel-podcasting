import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

function formatViolations(violations) {
  return violations
    .map((violation) => {
      const targets = violation.nodes.map((node) => node.target.join(", ")).join(" | ");
      return `${violation.id} (${violation.impact || "unknown"}): ${violation.help} — ${targets}`;
    })
    .join("\n");
}

async function expectNoAxeViolations(page, selector) {
  // Leaflet owns a large, continuously mutating tile/SVG subtree; map controls
  // remain covered by Axe while the third-party rendering surface is excluded.
  const builder = new AxeBuilder({ page })
    .include(selector)
    .exclude("#map")
    .withRules([
      "aria-allowed-attr",
      "aria-required-attr",
      "aria-valid-attr",
      "button-name",
      "color-contrast",
      "heading-order",
      "image-alt",
      "label",
      "link-name",
      "landmark-one-main",
      "region",
    ]);
  const results = await builder.analyze();
  expect(results.violations, formatViolations(results.violations)).toEqual([]);
}

async function ensureOnboardingVisible(page) {
  const overlay = page.locator("#onboarding-overlay");
  await page.locator("#onboarding-language-chips .onboarding-language-option").first().waitFor();
  // The production app normally opens this on first load. Make the fixture
  // deterministic when a reused browser profile has already dismissed it.
  if (!(await overlay.isVisible())) {
    await overlay.evaluate((element) => element.classList.remove("is-hidden"));
  }
  await expect(overlay).toBeVisible();
}

test.describe("accessibility", () => {
  test("onboarding surface has no axe violations", async ({ page }) => {
    await page.goto("/?tappa=1&lang=it", { waitUntil: "domcontentloaded" });
    await ensureOnboardingVisible(page);
    await expectNoAxeViolations(page, "#onboarding-overlay .onboarding-card");
  });

  test("unavailable language feedback is a readable modal", async ({ page }) => {
    test.setTimeout(90_000);
    await page.goto("/?tappa=1&lang=it", { waitUntil: "domcontentloaded" });
    await ensureOnboardingVisible(page);
    const unavailableLanguages = [
      ["EN", "Language unavailable", "Close"],
      ["DE", "Sprache nicht verfügbar", "Schließen"],
      ["FR", "Langue indisponible", "Fermer"],
      ["ES", "Idioma no disponible", "Cerrar"],
      ["PT", "Idioma indisponível", "Fechar"],
      ["RU", "Язык недоступен", "Закрыть"],
    ];
    let axeChecked = false;
    for (const [code, title, closeLabel] of unavailableLanguages) {
      await page.locator("#onboarding-language-chips .onboarding-language-option").filter({ hasText: new RegExp(`^${code}\\s`) }).click();
      await expect(page.locator("#language-unavailable-modal")).toBeVisible();
      await expect(page.locator("#language-unavailable-title")).toHaveText(title);
      await expect(page.locator("#language-unavailable-close-label")).toHaveText(closeLabel);
      if (!axeChecked) {
        await expectNoAxeViolations(page, "#language-unavailable-modal .language-unavailable-card");
        axeChecked = true;
      }
      await page.locator("#language-unavailable-close").click();
      await expect(page.locator("#language-unavailable-modal")).toBeHidden();
    }
  });

  test("player surface has no axe violations", async ({ page }) => {
    await page.goto("/?tappa=1&lang=it", { waitUntil: "domcontentloaded" });
    await ensureOnboardingVisible(page);
    await page.locator("#onboarding-language-chips .onboarding-language-option").filter({ hasText: /^IT\s/ }).click();
    await page.locator("#guide-skip-button").click();
    await page.locator("#mini-player-open").click();
    await expect(page.locator("#player-overlay")).toBeVisible();
    if (test.info().project.name === "mobile-chrome") {
      await expect(page.locator("#player-map-button")).toBeVisible();
    } else {
      await expect(page.locator("#player-map-button")).toBeHidden();
    }
    await expect(page.locator("#player-directions-button")).toBeHidden();
    if (test.info().project.name === "desktop-chrome") {
      await expect(page.locator("#player-overlay .is-mascot-layer")).toBeHidden();
      await expect(page.locator(".map-explore-mascot")).toBeVisible();
    } else {
      await expect(page.locator("#player-overlay .is-mascot-layer")).toBeVisible();
    }
    await expect(page.locator("#mini-player")).not.toHaveAttribute("aria-live");
    await expect(page.locator(".player-sheet")).not.toHaveAttribute("aria-live");
    const desktopPanelLayout = await page.locator("#player-overlay").evaluate((overlay) => {
      const sheet = overlay.querySelector(".player-sheet");
      const side = overlay.querySelector(".player-side");
      return {
        sheetOverflowX: sheet ? sheet.scrollWidth - sheet.clientWidth : 0,
        sideOverflowY: side ? side.scrollHeight - side.clientHeight : 0,
      };
    });
    expect(desktopPanelLayout.sheetOverflowX).toBeLessThanOrEqual(1);
    if (test.info().project.name === "desktop-chrome") {
      expect(desktopPanelLayout.sideOverflowY).toBeLessThanOrEqual(1);
    }
    await expectNoAxeViolations(page, "#player-overlay");
  });

  test("home route controls keep sufficient contrast", async ({ page }) => {
    await page.goto("/?tappa=1&lang=it", { waitUntil: "domcontentloaded" });
    await ensureOnboardingVisible(page);
    await page.locator("#onboarding-language-chips .onboarding-language-option").filter({ hasText: /^IT\s/ }).click();
    await page.locator("#guide-skip-button").click();
    await page.locator(".stop-button").nth(1).click();
    await expect(page.locator('.stop-button[aria-current="true"] .stop-index')).toHaveText("2");
    await expectNoAxeViolations(page, "#main-content");
  });

  test("mobile full player exposes a map return button", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "mobile-chrome", "The map return button is mobile-only.");
    await page.goto("/?tappa=1&lang=it", { waitUntil: "domcontentloaded" });
    await ensureOnboardingVisible(page);
    await page.locator("#onboarding-language-chips .onboarding-language-option").filter({ hasText: /^IT\s/ }).click();
    await page.locator("#guide-skip-button").click();
    await page.locator("#mini-player-open").click();
    await expect(page.locator("#player-map-button")).toBeVisible();
    await page.locator("#player-map-button").click();
    await expect(page.locator("#player-overlay")).toBeHidden();
      await expect(page.locator(".map-stage-frame")).toBeInViewport();
  });

  test("keyboard flow keeps focus and controls usable", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "desktop-chrome", "Keyboard audit runs once on desktop Chrome.");
    await page.goto("/?tappa=1&lang=it", { waitUntil: "domcontentloaded" });
    await ensureOnboardingVisible(page);

    const italian = page.locator("#onboarding-language-chips .onboarding-language-option").filter({ hasText: /^IT\s/ });
    await italian.focus();
    await page.keyboard.press("Enter");
    await expect(page.locator("#guide-layer")).toBeVisible();

    await page.locator("#guide-skip-button").focus();
    await page.keyboard.press("Enter");
    await expect(page.locator("#guide-layer")).toBeHidden();

    const stopTwo = page.locator(".stop-button").nth(1);
    await stopTwo.focus();
    await page.keyboard.press("Enter");
    await expect(page.locator('.stop-button[aria-current="true"] .stop-index')).toHaveText("2");

    const openButton = page.locator("#mini-player-open");
    await openButton.focus();
    await page.keyboard.press("Enter");
    await expect(page.locator("#player-overlay")).toBeVisible();

    const playButton = page.locator("#player-play-button");
    await playButton.focus();
    if (!(await page.locator("audio").evaluate((audio) => audio.paused))) {
      await page.keyboard.press("Enter");
      await expect.poll(() => page.locator("audio").evaluate((audio) => audio.paused)).toBe(true);
    }
    await page.keyboard.press("Enter");
    await expect.poll(() => page.locator("audio").evaluate((audio) => !audio.paused)).toBe(true);
    await page.keyboard.press("Enter");
    await expect.poll(() => page.locator("audio").evaluate((audio) => audio.paused)).toBe(true);

    const progress = page.locator("#player-progress-input");
    await progress.focus();
    const before = await progress.inputValue();
    await page.keyboard.press("ArrowRight");
    await expect(progress).not.toHaveValue(before);

    const closeButton = page.locator("#player-close-button");
    await closeButton.focus();
    await page.keyboard.press("Enter");
    await expect(page.locator("#player-overlay")).toBeHidden();
    await expect(page.locator("#mini-player-open")).toBeFocused();
  });

  test("200% and 400% zoom equivalents keep the layout within the viewport", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "desktop-chrome", "Zoom audit runs once with desktop Chrome.");

    for (const width of [720, 360]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto("/?tappa=1&lang=it", { waitUntil: "domcontentloaded" });
      await ensureOnboardingVisible(page);
      await page.locator("#onboarding-language-chips .onboarding-language-option").filter({ hasText: /^IT\s/ }).click();
      await page.locator("#guide-skip-button").click();
      await page.locator("#mini-player-open").click();
      await expect(page.locator("#player-overlay")).toBeVisible();

      const geometry = await page.evaluate(() => ({
        documentWidth: document.documentElement.scrollWidth,
        viewportWidth: document.documentElement.clientWidth,
      }));
      expect(geometry.documentWidth).toBeLessThanOrEqual(geometry.viewportWidth + 1);
      const controlBoxes = await Promise.all([
        page.locator("#player-prev-button").boundingBox(),
        page.locator("#player-play-button").boundingBox(),
        page.locator("#player-next-button").boundingBox(),
        page.locator("#player-speed-button").boundingBox(),
      ]);
      controlBoxes.forEach((box) => expect(box).not.toBeNull());
      for (let index = 1; index < controlBoxes.length; index += 1) {
        expect(controlBoxes[index].x).toBeGreaterThanOrEqual(controlBoxes[index - 1].x + controlBoxes[index - 1].width - 2);
      }
    }
  });
});
