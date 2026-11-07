import fs from 'node:fs';
import path from 'node:path';
import { expect, test } from '@playwright/test';
import { HERO_PHOTO } from '../app/data/home';

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

test('the hero photo never ships without its photographer’s credit', async ({ page }) => {
  await page.goto('/');
  const photo = page.locator('.hero-photo img');
  const credit = page.locator('.hero-credit');
  if (HERO_PHOTO) {
    expect(HERO_PHOTO.photographer.trim()).not.toBe('');
    expect(HERO_PHOTO.alt.trim()).not.toBe('');
    await expect(photo).toHaveCount(1);
    await expect(credit).toHaveText(`Editorial photo by ${HERO_PHOTO.photographer} on Unsplash`);
  } else {
    await expect(photo).toHaveCount(0);
    await expect(credit).toHaveCount(0);
  }
});
