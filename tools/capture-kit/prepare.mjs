// Derived images for public/work/<slug>/, made from the committed screenshots.
//
//   node prepare.mjs            every project folder in ../../public/work
//   node prepare.mjs lewisville only this project
//
// For each <name>.webp (a 2x screenshot) writes <name>-1x.webp at half the width, so the site
// can serve it with srcset and phones don't download the 2880 px original. For each cover.webp
// writes og.jpg, the 1200x630 link-preview image (top of the cover, cropped to fit).
// Re-run after adding or replacing a screenshot, and commit the results.
import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

const WORK = path.resolve(import.meta.dirname, '../../public/work');
const only = process.argv.slice(2);

const slugs = (await fs.readdir(WORK, { withFileTypes: true }))
  .filter((d) => d.isDirectory() && (!only.length || only.includes(d.name)))
  .map((d) => d.name);

for (const slug of slugs) {
  const dir = path.join(WORK, slug);
  const files = (await fs.readdir(dir)).filter((f) => f.endsWith('.webp') && !f.endsWith('-1x.webp'));
  console.log(`\n${slug}`);

  for (const file of files) {
    const src = path.join(dir, file);
    const { width } = await sharp(src).metadata();
    const out = path.join(dir, file.replace(/\.webp$/, '-1x.webp'));
    const info = await sharp(src)
      .resize({ width: Math.round(width / 2) })
      .webp({ quality: 80 })
      .toFile(out);
    console.log(`  ${path.basename(out)}  ${info.width}x${info.height}  ${Math.round(info.size / 1024)} kB`);
  }

  if (files.includes('cover.webp')) {
    const out = path.join(dir, 'og.jpg');
    const info = await sharp(path.join(dir, 'cover.webp'))
      .resize({ width: 1200, height: 630, fit: 'cover', position: 'top' })
      .jpeg({ quality: 85, mozjpeg: true })
      .toFile(out);
    console.log(`  og.jpg  ${info.width}x${info.height}  ${Math.round(info.size / 1024)} kB`);
  }
}
