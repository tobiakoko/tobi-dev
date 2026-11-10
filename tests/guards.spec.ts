import fs from 'node:fs';
import path from 'node:path';
import { expect, test } from '@playwright/test';

/** Every source file under app/, for the design and content guards below. */
function sources(dir = 'app'): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) return entry.name === '+types' ? [] : sources(file);
    return /\.(tsx?|css)$/.test(entry.name) ? [file] : [];
  });
}

const offenders = (pattern: RegExp) =>
  sources().filter((file) => pattern.test(fs.readFileSync(file, 'utf8')));

test('no blue: the mock-ups’ #213cff or the word blue never comes back', () => {
  expect(offenders(/#213cff|\bblue\b/i)).toEqual([]);
});

test('no Inter: the old font is gone', () => {
  expect(offenders(/\bInter\b|fontsource-variable\/inter/)).toEqual([]);
});

test('no placeholder copy', () => {
  expect(offenders(/lorem ipsum|\blorem\b/i)).toEqual([]);
});

test('the hero photo has real alt text and no credit line (CONTENT.md §2.2)', async ({ page }) => {
  // Checked on the rendered page: home.ts imports image files Node can't load.
  await page.goto('/');
  await expect(page.locator('.hero-photo img')).not.toHaveAttribute('alt', '');
  await expect(page.locator('.hero-credit')).toHaveCount(0);
  await expect(page.locator('.hero')).not.toContainText('Unsplash');
});
