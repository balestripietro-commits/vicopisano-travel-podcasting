import { expect } from "@playwright/test";

export const languageNames = {
  it: "Italiano",
  en: "English",
  de: "Deutsch",
  fr: "Français",
  es: "Español",
  pt: "Português",
  ru: "Русский",
};

export function collectRuntimeErrors(page, { responseOrigin } = {}) {
  const errors = [];

  page.on("pageerror", (error) => errors.push(`pageerror: ${error.message}`));
  page.on("console", (message) => {
    if (message.type() === "error" && !message.text().startsWith("Failed to load resource:")) {
      errors.push(`console: ${message.text()}`);
    }
  });
  page.on("response", (response) => {
    const url = response.url();
    const tracksResponse = !responseOrigin || new URL(url).origin === responseOrigin;
    if (tracksResponse && response.status() >= 400 && !url.endsWith("/favicon.ico")) {
      errors.push(`resource ${response.status()}: ${url}`);
    }
  });

  return errors;
}

export async function completeEmailGateForTest(page) {
  const emailGate = page.locator("#email-gate-overlay");
  if (await emailGate.isVisible()) {
    const { hostname, origin } = new URL(page.url());
    if (!["localhost", "127.0.0.1", "::1"].includes(hostname)) {
      // Keep deployed smoke runs read-only: exercise the success path without
      // sending a test address to Netlify Forms.
      await page.route("**/*", async (route) => {
        const request = route.request();
        if (request.method() === "POST" && new URL(request.url()).origin === origin) {
          await route.fulfill({ status: 200, body: "Accepted by E2E mock" });
          return;
        }
        await route.continue();
      });
    }

    await page.locator("#email-gate-address").fill("anteprima@example.com");
    await page.locator("#email-gate-submit").click();
    await expect(emailGate).toBeHidden();
  }
}

export async function enterSite(page, { language = "it", guide = false, stop = 1 } = {}) {
  await page.goto(`/?tappa=${stop}&lang=${language}`, { waitUntil: "domcontentloaded" });
  await completeEmailGateForTest(page);
  await expect(page.locator("#onboarding-overlay")).toBeVisible();
  await page
    .locator("#onboarding-language-chips .onboarding-language-option")
    .filter({ hasText: new RegExp(`^${language.toUpperCase()}\\s`) })
    .click();

  await expect(page.locator("#guide-layer")).toBeVisible();
  if (!guide) {
    await page.locator("#guide-skip-button").click();
    await expect(page.locator("#guide-layer")).toBeHidden();
  }

  await expect(page.locator("#mini-player")).toBeVisible();
}

export async function openFullPlayer(page) {
  await page.locator("#mini-player-open").click();
  await expect(page.locator("#player-overlay")).toBeVisible();
  await expect(page.locator("#player-overlay")).toHaveAttribute("aria-hidden", "false");
  await expect
    .poll(() =>
      page.locator(".player-sheet").evaluate((element) => {
        const rect = element.getBoundingClientRect();
        return element.closest(".is-mobile-map-player")
          ? Math.abs(rect.bottom - window.innerHeight) < 1
          : Math.abs(rect.top) < 1;
      }),
    )
    .toBe(true);
}

export function stopButton(page, stopNumber) {
  return page.locator(".stop-button").nth(stopNumber - 1);
}

export async function watchClass(page, selector, className) {
  await page.evaluate(
    ({ watchedSelector, watchedClass }) => {
      const element = document.querySelector(watchedSelector);
      window.__e2eObservedClasses ||= {};
      window.__e2eObservedClasses[watchedClass] = element?.classList.contains(watchedClass) || false;
      const observer = new MutationObserver(() => {
        if (element?.classList.contains(watchedClass)) {
          window.__e2eObservedClasses[watchedClass] = true;
          observer.disconnect();
        }
      });
      if (element) {
        observer.observe(element, { attributes: true, attributeFilter: ["class"] });
      }
    },
    { watchedSelector: selector, watchedClass: className },
  );
}

export async function expectClassObserved(page, className) {
  await expect
    .poll(() => page.evaluate((watchedClass) => window.__e2eObservedClasses?.[watchedClass], className))
    .toBe(true);
}

export async function expectAudioPlaying(page) {
  await expect.poll(() => page.locator("audio").evaluate((audio) => !audio.paused)).toBe(true);
}

export async function expectNoRuntimeErrors(errors) {
  expect(errors, errors.join("\n")).toEqual([]);
}

export async function expectInsideViewport(locator, page) {
  const [box, viewport] = await Promise.all([
    locator.boundingBox(),
    page.evaluate(() => ({ width: window.innerWidth, height: window.innerHeight })),
  ]);

  expect(box).not.toBeNull();
  expect(box.x).toBeGreaterThanOrEqual(0);
  expect(box.y).toBeGreaterThanOrEqual(0);
  expect(box.x + box.width).toBeLessThanOrEqual(viewport.width + 1);
  expect(box.y + box.height).toBeLessThanOrEqual(viewport.height + 1);
}
