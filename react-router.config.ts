import type { Config } from '@react-router/dev/config';
import { execFileSync } from 'node:child_process';
import { copyFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { getAllWork } from './app/data/work.server';
import { SITE_URL } from './app/data/site';

/**
 * Every route that should ship real HTML. Derived from content/work so adding a
 * case study can never silently leave its page out of the build.
 */
const work = getAllWork();
const ALL_CONTENT = work.map((w) => `content/work/${w.slug}.md`);

/**
 * Every route that should ship real HTML, with the source files whose changes
 * change that page. Derived from content/work so adding a case study can never
 * silently leave its page out of the build or the sitemap.
 */
// In navigation order, then the case studies in their `order`; the sitemap
// lists them the same way.
const routes: { path: string; sources: string[] }[] = [
  // Home lists the featured case studies, so their files count too.
  { path: '/', sources: ['app/routes/home.tsx', ...ALL_CONTENT] },
  { path: '/work', sources: ['app/routes/work.tsx', ...ALL_CONTENT] },
  { path: '/about', sources: ['app/routes/about.tsx'] },
  { path: '/contact', sources: ['app/routes/contact.tsx'] },
  ...work.map((w) => ({
    path: `/work/${w.slug}`,
    sources: ['app/routes/work-detail.tsx', `content/work/${w.slug}.md`],
  })),
];

/**
 * The date of the last commit that touched any of `files`, as YYYY-MM-DD.
 *
 * A build-date lastmod would mark every page changed on every deploy, and
 * search engines stop trusting lastmod on sites that do that. Vercel clones
 * only recent history, so a file whose last change is older than the clone
 * has no date; the URL then omits lastmod rather than guessing.
 */
function lastCommitDate(files: string[]): string | undefined {
  try {
    const date = execFileSync('git', ['log', '-1', '--format=%cs', '--', ...files], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    return /^\d{4}-\d{2}-\d{2}$/.test(date) ? date : undefined;
  } catch {
    return undefined;
  }
}

// priority and changefreq are left out: Google and Bing ignore both. The
// stylesheet only changes how a browser shows the file (public/sitemap.css).
function sitemap() {
  const urls = routes
    .map(({ path: route, sources }) => {
      const loc = route === '/' ? SITE_URL : `${SITE_URL}${route}`;
      const lastmod = lastCommitDate(sources);
      return `  <url>\n    <loc>${loc}</loc>\n${lastmod ? `    <lastmod>${lastmod}</lastmod>\n` : ''}  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/css" href="/sitemap.css"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export default {
  appDirectory: 'app',
  // No server at runtime — but prerender still emits static HTML per route at
  // build time, so crawlers get real content instead of an empty SPA shell.
  ssr: false,
  prerender: () => routes.map((r) => r.path),

  // Generated from the same `routes` array that drives prerendering, so the
  // sitemap cannot drift out of sync with what the site actually ships.
  buildEnd: async ({ reactRouterConfig }) => {
    const client = path.join(reactRouterConfig.buildDirectory, 'client');
    const out = path.join(client, 'sitemap.xml');
    await writeFile(out, sitemap(), 'utf8');
    console.log(`Wrote sitemap with ${routes.length} URLs -> ${out}`);

    // Vercel serves 404.html, with a 404 status, for any path with no file.
    // The SPA fallback hydrates there and the router renders the catch-all
    // not-found route inside the layout.
    await copyFile(path.join(client, '__spa-fallback.html'), path.join(client, '404.html'));
  },
} satisfies Config;
