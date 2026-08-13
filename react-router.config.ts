import type { Config } from '@react-router/dev/config';
import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { projects } from './app/data/projects';
import { SITE_URL } from './app/data/site';

/**
 * Every route that should ship real HTML. Derived from projects.ts so adding a
 * project can never silently leave its page out of the build.
 */
const routes = [
  '/',
  '/about',
  '/projects',
  '/contact',
  ...projects.map((p) => `/projects/${p.slug}`),
];

function sitemap() {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = routes
    .map((route) => {
      const loc = route === '/' ? SITE_URL : `${SITE_URL}${route}`;
      const priority = route === '/' ? '1.0' : '0.8';
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export default {
  appDirectory: 'app',
  // No server at runtime — but prerender still emits static HTML per route at
  // build time, so crawlers get real content instead of an empty SPA shell.
  ssr: false,
  prerender: () => routes,

  // Generated from the same `routes` array that drives prerendering, so the
  // sitemap cannot drift out of sync with what the site actually ships.
  buildEnd: async ({ reactRouterConfig }) => {
    const out = path.join(reactRouterConfig.buildDirectory, 'client', 'sitemap.xml');
    await writeFile(out, sitemap(), 'utf8');
    console.log(`Wrote sitemap with ${routes.length} URLs -> ${out}`);
  },
} satisfies Config;
