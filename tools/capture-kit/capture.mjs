// Portfolio screenshots: desktop 1440x900 and phone 390x844, both at 2x, saved as WebP.
//
//   node capture.mjs                         every project in projects.json
//   node capture.mjs lewisville afromerica   only these projects
//   node capture.mjs lewisville --base http://localhost:3000   a local build instead of the live site
//
// Output: out/<project>/<page>-desktop.webp, <page>-phone.webp and, where "full" is set,
// <page>-desktop-full.webp (the whole page, capped at 8,000 px tall).
import { chromium } from 'playwright';
import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

const args = process.argv.slice(2);
const baseFlag = args.indexOf('--base');
const baseOverride = baseFlag >= 0 ? args[baseFlag + 1] : null;
const only = args.filter((a, i) => !a.startsWith('--') && (baseFlag < 0 || i !== baseFlag + 1));
const projects = JSON.parse(await fs.readFile(new URL('./projects.json', import.meta.url), 'utf8'));

const VIEWPORTS = {
  desktop: { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 },
  phone: { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1' },
};
const MAX_FULL_HEIGHT = 8000;

async function settle(page) {
  await page.waitForLoadState('networkidle', { timeout: 20000 }).catch(() => {});
  // Scroll through once so lazy images load, then return to the top.
  await page.evaluate(async () => {
    // Smooth scrolling would leave the page mid-animation when the shot is taken.
    document.documentElement.style.scrollBehavior = 'auto';
    document.body.style.scrollBehavior = 'auto';
    for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight * 0.8) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 150));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
  await page.waitForTimeout(800);
}

async function save(buffer, file) {
  await sharp(buffer).webp({ quality: 82, effort: 5 }).toFile(file);
  const { size } = await fs.stat(file);
  console.log(`  ${path.relative(process.cwd(), file)}  ${(size / 1024).toFixed(0)} kB`);
}

async function resolvePath(context, base, spec) {
  if (spec.path) return spec.path;
  const page = await context.newPage();
  await page.goto(base + '/', { waitUntil: 'domcontentloaded' });
  await settle(page);
  const href = await page.locator(spec.discover).first().getAttribute('href').catch(() => null);
  await page.close();
  if (!href) return null;
  const url = new URL(href, base);
  return url.pathname.replace(/\/$/, '') + (spec.suffix || '');
}

const browser = await chromium.launch();
for (const [slug, project] of Object.entries(projects)) {
  if (only.length && !only.includes(slug)) continue;
  const base = (baseOverride || project.base).replace(/\/$/, '');
  const outDir = path.join('out', slug);
  await fs.mkdir(outDir, { recursive: true });
  console.log(`\n${slug}  (${base})`);

  for (const [vpName, vp] of Object.entries(VIEWPORTS)) {
    const context = await browser.newContext({ ...vp, reducedMotion: 'reduce', colorScheme: 'light' });
    for (const spec of project.pages) {
      const p = await resolvePath(context, base, spec);
      if (!p) { console.log(`  skipped ${spec.name}: nothing matched ${spec.discover}`); continue; }
      const page = await context.newPage();
      const res = await page.goto(base + p, { waitUntil: 'domcontentloaded', timeout: 45000 }).catch((e) => ({ status: () => e.message }));
      if (typeof res?.status === 'function' && res.status() !== 200) console.log(`  warning: ${p} returned ${res.status()}`);
      await settle(page);
      const mask = (project.mask || []).map((s) => page.locator(s));
      await save(await page.screenshot({ mask }), path.join(outDir, `${spec.name}-${vpName}.webp`));
      if (spec.full && vpName === 'desktop') {
        const height = await page.evaluate(() => document.documentElement.scrollHeight);
        const clip = { x: 0, y: 0, width: 1440, height: Math.min(height, MAX_FULL_HEIGHT) };
        await save(await page.screenshot({ fullPage: true, clip, mask }), path.join(outDir, `${spec.name}-desktop-full.webp`));
      }
      await page.close();
    }
    await context.close();
  }
}
await browser.close();
