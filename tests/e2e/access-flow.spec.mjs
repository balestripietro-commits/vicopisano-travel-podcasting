import { expect, test } from "@playwright/test";

test("first access asks for email then language; later accesses remember both steps", async ({ page }) => {
  test.setTimeout(90_000);
  await page.clock.setFixedTime(new Date("2026-10-09T18:30:00+02:00"));
  let localPostRequests = 0;
  page.on("request", (request) => {
    if (request.method() === "POST") localPostRequests += 1;
  });

  await page.goto("/?tappa=1&lang=it", { waitUntil: "domcontentloaded" });
  await expect(page.locator("#email-gate-overlay")).toBeVisible();
  await expect(page.locator("#onboarding-overlay")).toBeHidden();

  await page.locator("#email-gate-address").fill("anteprima@example.com");
  await page.locator("#email-gate-submit").click();
  await expect(page.locator("#email-gate-overlay")).toBeHidden();
  await expect(page.locator("#onboarding-overlay")).toBeVisible();
  await expect(page.locator("#guide-layer")).toBeHidden();

  await page.locator("#onboarding-language-chips .onboarding-language-option")
    .filter({ hasText: /^IT\s/ })
    .click();
  await expect(page.locator("#onboarding-overlay")).toBeHidden();
  await expect(page.locator("#guide-layer")).toBeVisible();

  const savedState = await page.evaluate(() => ({
    emailGateCompleted: localStorage.getItem("tp-email-demo-gate-completed"),
    onboardingCompleted: localStorage.getItem("vicopisano-onboarding-completed"),
    language: localStorage.getItem("vicopisano-language"),
    savedValues: Object.values(localStorage),
  }));
  expect(savedState.emailGateCompleted).toBe("true");
  expect(savedState.onboardingCompleted).toBe("true");
  expect(savedState.language).toBe("IT");
  expect(savedState.savedValues).not.toContain("anteprima@example.com");
  expect(localPostRequests).toBe(0);

  await page.evaluate(() => window.sessionStorage.clear());
  await page.reload({ waitUntil: "domcontentloaded" });
  await expect(page.locator("#email-gate-overlay")).toBeHidden();
  await expect(page.locator("#onboarding-overlay")).toBeHidden();
  await expect(page.locator("#guide-layer")).toBeHidden();
  await expect(page.locator("html")).toHaveAttribute("lang", "it");
});

for (const scenario of [
  { name: "before the event window", time: "2026-10-09T17:59:00+02:00", active: false },
  { name: "at the 18:00 start", time: "2026-10-09T18:00:00+02:00", active: true },
  { name: "at 20:59", time: "2026-10-09T20:59:00+02:00", active: true },
  { name: "at the 21:00 end", time: "2026-10-09T21:00:00+02:00", active: false },
  { name: "on the following day", time: "2026-10-10T18:30:00+02:00", active: false },
]) {
  test(`email gate is ${scenario.active ? "active" : "bypassed"} ${scenario.name}`, async ({ page }) => {
    await page.clock.setFixedTime(new Date(scenario.time));
    await page.goto("/?tappa=1&lang=it", { waitUntil: "domcontentloaded" });

    if (scenario.active) {
      await expect(page.locator("#email-gate-overlay")).toBeVisible();
      await expect(page.locator("#onboarding-overlay")).toBeHidden();
    } else {
      await expect(page.locator("#email-gate-overlay")).toBeHidden();
      await expect(page.locator("#onboarding-overlay")).toBeVisible();
    }
  });
}
