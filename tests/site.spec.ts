import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { PAGES, THEMES } from './pages';

/*
 * Every page in the sitemap, in both themes: it loads, has one H1, its own
 * title and canonical, the footer's analytics note, no sideways scroll at
 * 320px, no console or CSP errors, and no serious or critical axe findings.
 */

const titles = new Map<string, string>();

for (const path of PAGES) {
  test.describe(path, () => {
    test('loads with its own title, canonical and one H1', async ({ page }) => {
      const res = await page.goto(path);
      expect(res?.status()).toBe(200);
      await expect(page.locator('h1')).toHaveCount(1);

      const title = await page.title();
      expect(title).not.toBe('');
      expect([...titles.values()]).not.toContain(title);
      titles.set(path, title);

      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
      expect(canonical).toBe(
        path === '/' ? 'https://tobiakoko.com' : `https://tobiakoko.com${path}`,
      );

      await expect(page.locator('footer')).toContainText('This site uses Google Analytics');
    });

    test('ships its main text in the prerendered HTML', async ({ request }) => {
      const html = await (await request.get(path)).text();
      expect(html).toMatch(/<h1[\s>]/);
      expect(html).toContain('<meta name="description"');
    });

    for (const theme of THEMES) {
      test(`${theme}: no sideways scroll at 320px, no errors, axe clean`, async ({ page }) => {
        const errors: string[] = [];
        page.on('pageerror', (e) => errors.push(e.message));
        // Vercel serves its analytics script only in production; locally it 404s.
        page.on('console', (m) => {
          if (m.type() !== 'error') return;
          if (/_vercel\/insights|Failed to load resource/.test(m.text())) return;
          errors.push(m.text());
        });

        await page.setViewportSize({ width: 320, height: 800 });
        await page.emulateMedia({ colorScheme: theme });
        await page.goto(path, { waitUntil: 'networkidle' });
        await expect(page.locator('html')).toHaveAttribute('data-theme', theme);

        const overflow = await page.evaluate(
          () => document.documentElement.scrollWidth > window.innerWidth,
        );
        expect(overflow, 'page scrolls sideways at 320px').toBe(false);

        await page.setViewportSize({ width: 1280, height: 900 });
        const { violations } = await new AxeBuilder({ page }).analyze();
        const serious = violations.filter((v) => ['serious', 'critical'].includes(v.impact ?? ''));
        expect(serious.map((v) => `${v.id}: ${v.help}`)).toEqual([]);
        expect(errors).toEqual([]);
      });
    }
  });
}

test('an unknown URL returns the 404 page inside the layout', async ({ page }) => {
  const res = await page.goto('/no-such-page');
  expect(res?.status()).toBe(404);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Page not found');
  await expect(page.locator('header').first()).toBeVisible();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex');
});
