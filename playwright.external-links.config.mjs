import { defineConfig } from "@playwright/test";

const baseURL = process.env.E2E_BASE_URL || "https://transcendent-meerkat-166cbe.netlify.app";

export default defineConfig({
  testDir: "./tests/e2e",
  testMatch: /external-links\.spec\.mjs/,
  outputDir: "./work/external-links/results",
  timeout: 90_000,
  expect: {
    timeout: 10_000,
  },
  fullyParallel: false,
  workers: 1,
  retries: process.env.CI ? 1 : 0,
  reporter: [
    ["line"],
    ["html", { open: "never", outputFolder: "./work/external-links/html-report" }],
  ],
  use: {
    baseURL,
    channel: process.env.PLAYWRIGHT_BROWSER_CHANNEL || "chrome",
    headless: true,
    locale: "it-IT",
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
    video: "off",
    viewport: { width: 1440, height: 900 },
  },
  projects: [
    {
      name: "external-links",
    },
  ],
});
