import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { THEMES } from './pages';

test('brand reads "Tobi Akoko." with the period in its own span', async ({ page }) => {
  await page.goto('/');
  const brand = page.locator('header a[href="/"]').first();
  await expect(brand).toHaveText('Tobi Akoko.');
  await expect(brand.locator('span')).toHaveText('.');
});

test('desktop nav marks the current section, Work included on case studies', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto('/work/afromerica');
  const current = page.locator('header nav[aria-label="Main"] a[aria-current="page"]').first();
  await expect(current).toHaveText('Work');
});

test.describe('mobile menu', () => {
  test.use({ viewport: { width: 375, height: 800 } });

  test('toggles Menu/Close, marks the current page, closes on Escape', async ({ page }) => {
    await page.goto('/about');
    // Its name changes from Menu to Close, so find it by what it controls.
    const button = page.locator('button[aria-controls="mobile-menu"]');
    await expect(button).toHaveText('Menu');
    await expect(button).toHaveAttribute('aria-expanded', 'false');

    await button.click();
    await expect(button).toHaveText('Close');
    await expect(button).toHaveAttribute('aria-expanded', 'true');
    const drawer = page.locator('#mobile-menu');
    await expect(drawer).toBeVisible();
    await expect(drawer.locator('a[aria-current="page"]')).toHaveText('About');

    await page.keyboard.press('Escape');
    await expect(drawer).toBeHidden();
    await expect(button).toBeFocused();
  });

  test('closes after navigating', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /menu/i }).click();
    await page.locator('#mobile-menu').getByRole('link', { name: 'Contact' }).click();
    await expect(page).toHaveURL(/\/contact$/);
    await expect(page.locator('#mobile-menu')).toBeHidden();
  });

  for (const theme of THEMES) {
    test(`${theme}: axe clean with the drawer open`, async ({ page }) => {
      await page.emulateMedia({ colorScheme: theme });
      await page.goto('/');
      await page.getByRole('button', { name: /menu/i }).click();
      const { violations } = await new AxeBuilder({ page }).analyze();
      const serious = violations.filter((v) => ['serious', 'critical'].includes(v.impact ?? ''));
      expect(serious.map((v) => `${v.id}: ${v.help}`)).toEqual([]);
    });
  }
});

test('theme toggle switches the theme and names the next action', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'light' });
  await page.goto('/');
  const toggle = page.getByRole('button', { name: 'Switch to dark theme' });
  await toggle.click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await expect(page.getByRole('button', { name: 'Switch to light theme' })).toBeVisible();
});
