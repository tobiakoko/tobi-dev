import { defineConfig } from '@playwright/test';

/*
 * Runs against the prerendered build (npm run build first). Locally it uses
 * the installed Chrome; CI installs Playwright's Chromium instead.
 */
export default defineConfig({
  testDir: 'tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL: 'http://localhost:4178',
    channel: process.env.CI ? undefined : 'chrome',
  },
  webServer: {
    command: 'node tests/serve.mjs',
    url: 'http://localhost:4178',
    reuseExistingServer: !process.env.CI,
  },
});
