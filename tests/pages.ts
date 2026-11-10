import fs from 'node:fs';

/** Every public path, read from the built sitemap so new pages are tested too. */
export const PAGES = [
  ...fs
    .readFileSync('build/client/sitemap.xml', 'utf8')
    .matchAll(/<loc>https:\/\/tobiakoko\.com([^<]*)<\/loc>/g),
].map((m) => m[1] || '/');

export const THEMES = ['light', 'dark'] as const;
