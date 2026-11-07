import { expect, test } from '@playwright/test';

test('sections run hero, proof strip, selected work, how I can help, availability', async ({
  page,
}) => {
  await page.goto('/');
  const order = await page
    .locator('main > section')
    .evaluateAll((sections) =>
      sections.map(
        (s) =>
          s.getAttribute('aria-label') ??
          document.getElementById(s.getAttribute('aria-labelledby') ?? '')?.textContent ??
          '',
      ),
    );
  expect(order).toEqual([
    'I engineer software and systems people can rely on.',
    'Experience highlights',
    'Selected work',
    'How I can help',
    'Availability',
  ]);
});

test.describe('on a 390px phone', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('the headline and "View selected work" fit on the first screen', async ({ page }) => {
    await page.goto('/');
    const button = page.getByRole('link', { name: /view selected work/i });
    const box = await button.boundingBox();
    expect(box).not.toBeNull();
    expect(box!.y + box!.height).toBeLessThanOrEqual(844);
  });
});

test('project cards show number, year, "NN / 07", proposition and a CTA', async ({ page }) => {
  await page.goto('/work');
  const cards = page.locator('.project-card');
  const total = await cards.count();
  expect(total).toBeGreaterThan(0);
  const first = cards.first();
  await expect(first).toContainText(`01 / ${String(total).padStart(2, '0')}`);
  await expect(first.locator('.project-summary')).not.toBeEmpty();
  await expect(first).toContainText('Read case study');
  await expect(first.locator('.project-media__overlay').first()).toHaveText('01');
});

test('every service links to its proof case study', async ({ page }) => {
  await page.goto('/');
  const links = page.locator('.service a');
  await expect(links).toHaveCount(3);
  await expect(links.nth(0)).toHaveAttribute('href', '/work/led-wall');
  await expect(links.nth(1)).toHaveAttribute('href', '/work/afromerica');
  await expect(links.nth(2)).toHaveAttribute('href', '/work/lewisville');
});

test('case studies have a facts row and previous/next links', async ({ page }) => {
  await page.goto('/work/afromerica');
  await expect(page.locator('.case-facts dt')).toHaveText(['Year', 'Work', 'Tools']);
  const pager = page.getByRole('navigation', { name: 'More case studies' });
  await expect(pager.getByRole('link')).toHaveCount(2);
});
