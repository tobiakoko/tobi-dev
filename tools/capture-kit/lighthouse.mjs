// Lighthouse scores for each project's live pages, mobile and desktop.
//
//   node lighthouse.mjs                 every project in projects.json
//   node lighthouse.mjs lewisville      one project
//
// Writes out/lighthouse/<project>-<page>-<form>.json and prints a Markdown table you can paste
// into CONTENT.md. Each URL runs 3 times and keeps the median performance score, because single
// runs swing by several points.
import { execFileSync } from 'node:child_process';
import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const only = process.argv.slice(2);
const projects = JSON.parse(await fs.readFile(new URL('./projects.json', import.meta.url), 'utf8'));
const outDir = path.join('out', 'lighthouse');
await fs.mkdir(outDir, { recursive: true });
process.env.CHROME_PATH ||= chromium.executablePath();

const RUNS = 3;
const rows = [];
const median = (xs) => xs.slice().sort((a, b) => a - b)[Math.floor(xs.length / 2)];

for (const [slug, project] of Object.entries(projects)) {
  if (only.length && !only.includes(slug)) continue;
  for (const p of project.lighthouse || ['/']) {
    for (const form of ['mobile', 'desktop']) {
      const url = project.base.replace(/\/$/, '') + p;
      const results = [];
      for (let i = 0; i < RUNS; i++) {
        const file = path.join(outDir, `${slug}-${p === '/' ? 'home' : p.slice(1).replace(/\//g, '-')}-${form}-${i + 1}.json`);
        const flags = ['-y', 'lighthouse@12', url, '--quiet', '--output=json', `--output-path=${file}`,
          '--only-categories=performance,accessibility,best-practices,seo', '--chrome-flags=--headless=new'];
        if (form === 'desktop') flags.push('--preset=desktop');
        try {
          execFileSync('npx', flags, { stdio: ['ignore', 'ignore', 'inherit'] });
          const r = JSON.parse(await fs.readFile(file, 'utf8'));
          const c = r.categories;
          results.push({
            perf: Math.round(c.performance.score * 100), a11y: Math.round(c.accessibility.score * 100),
            bp: Math.round(c['best-practices'].score * 100), seo: Math.round(c.seo.score * 100),
            lcp: r.audits['largest-contentful-paint'].displayValue, cls: r.audits['cumulative-layout-shift'].displayValue,
          });
        } catch (e) {
          console.error(`failed: ${url} (${form}) run ${i + 1}`);
        }
      }
      if (!results.length) continue;
      const m = results.find((r) => r.perf === median(results.map((x) => x.perf)));
      rows.push({ slug, page: p, form, ...m });
      console.log(`${slug} ${p} ${form}: ${m.perf} / ${m.a11y} / ${m.bp} / ${m.seo}  LCP ${m.lcp}  CLS ${m.cls}`);
    }
  }
}

const date = new Date().toISOString().slice(0, 10);
const table = [
  `Lighthouse ${date} (median of ${RUNS} runs; Performance / Accessibility / Best Practices / SEO)`,
  '',
  '| Project | Page | Form | Perf | A11y | BP | SEO | LCP | CLS |',
  '| --- | --- | --- | --- | --- | --- | --- | --- | --- |',
  ...rows.map((r) => `| ${r.slug} | ${r.page} | ${r.form} | ${r.perf} | ${r.a11y} | ${r.bp} | ${r.seo} | ${r.lcp} | ${r.cls} |`),
].join('\n');
await fs.writeFile(path.join(outDir, 'scores.md'), table + '\n');
console.log('\n' + table);
