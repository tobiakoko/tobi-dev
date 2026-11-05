import { existsSync, readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { Marked, type Tokens } from 'marked';
import {
  DISCIPLINES,
  type Cover,
  type Discipline,
  type Stat,
  type WorkMeta,
  type WorkSection,
  type WorkStudy,
} from './work';

/*
 * Reads content/work/*.md once, at build time. Every check here throws, so a
 * bad case study fails `npm run build` instead of shipping. The `.server`
 * suffix keeps this file (and gray-matter, marked, node:fs) out of the
 * browser bundle.
 */

const ROOT = process.cwd();
const CONTENT_DIR = path.join(ROOT, 'content', 'work');
const PUBLIC_DIR = path.join(ROOT, 'public');
const FACTS = readFileSync(path.join(ROOT, 'docs', 'build', 'CONTENT.md'), 'utf8');

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

function fail(file: string, message: string): never {
  throw new Error(`content/work/${file}: ${message}`);
}

function publicFileExists(src: string) {
  return src.startsWith('/') && existsSync(path.join(PUBLIC_DIR, src));
}

/** Pixel size of a WebP or SVG in public/, read from the file header. */
function imageSize(file: string, src: string): { width: number; height: number } {
  const buf = readFileSync(path.join(PUBLIC_DIR, src));
  if (src.endsWith('.svg')) {
    const head = buf.toString('utf8', 0, 600);
    const w = head.match(/\swidth="(\d+)"/);
    const h = head.match(/\sheight="(\d+)"/);
    if (w && h) return { width: +w[1], height: +h[1] };
  } else if (buf.toString('ascii', 0, 4) === 'RIFF' && buf.toString('ascii', 8, 12) === 'WEBP') {
    const chunk = buf.toString('ascii', 12, 16);
    if (chunk === 'VP8X')
      return { width: 1 + buf.readUIntLE(24, 3), height: 1 + buf.readUIntLE(27, 3) };
    if (chunk === 'VP8 ')
      return { width: buf.readUInt16LE(26) & 0x3fff, height: buf.readUInt16LE(28) & 0x3fff };
    if (chunk === 'VP8L') {
      const bits = buf.readUInt32LE(21);
      return { width: 1 + (bits & 0x3fff), height: 1 + ((bits >> 14) & 0x3fff) };
    }
  }
  fail(file, `can't read the size of ${src}`);
}

// Figures span the wide container (70rem); below that they're full width.
const SIZES = '(min-width: 70rem) 70rem, 100vw';

/**
 * srcset for a 2x screenshot when tools/capture-kit/prepare.mjs has made its
 * half-width -1x copy, so phones and 1x screens get the smaller file.
 */
function srcSet(src: string, width: number) {
  const small = src.replace(/\.webp$/, '-1x.webp');
  if (small === src || !publicFileExists(small)) return undefined;
  return `${small} ${Math.round(width / 2)}w, ${src} ${width}w`;
}

function imgTag(file: string, src: string, alt: string, className = '') {
  const { width, height } = imageSize(file, src);
  const set = srcSet(src, width);
  return [
    `<img src="${escape(src)}"`,
    set && `srcset="${escape(set)}" sizes="${SIZES}"`,
    `width="${width}" height="${height}" alt="${escape(alt)}"`,
    className && `class="${className}"`,
    'loading="lazy" decoding="async" />',
  ]
    .filter(Boolean)
    .join(' ');
}

function markdown(file: string) {
  return new Marked({
    gfm: true,
    renderer: {
      // An image with a title becomes a Figure; the title is the caption.
      // A `-light.svg` diagram also loads its `-dark.svg` twin, and CSS shows
      // the one that matches the theme.
      image({ href, title, text }: Tokens.Image) {
        if (!publicFileExists(href)) fail(file, `image ${href} not found in public/`);
        if (!text) fail(file, `image ${href} has no alt text`);
        let img: string;
        if (href.endsWith('-light.svg')) {
          const dark = href.replace(/-light\.svg$/, '-dark.svg');
          if (!publicFileExists(dark)) fail(file, `${dark} not found in public/`);
          // Both carry the alt text: display:none removes the hidden one from
          // the accessibility tree, so screen readers hear it once either way.
          img = imgTag(file, href, text, 'theme-light') + imgTag(file, dark, text, 'theme-dark');
        } else {
          img = imgTag(file, href, text);
        }
        if (!title) return img;
        // Portrait (phone) shots get their own class so a pair can size them
        // against a desktop shot. Tall diagrams keep the full width.
        const { width, height } = imageSize(file, href);
        const kind = height > width && !href.endsWith('.svg') ? ' figure--portrait' : '';
        return `<figure class="figure${kind}"><div class="figure-frame">${img}</div><figcaption>${escape(title)}</figcaption></figure>`;
      },
      // A paragraph that holds only figures renders without the <p>: a
      // <figure> can't sit inside a paragraph.
      paragraph({ tokens }: Tokens.Paragraph) {
        const onlyImages = tokens.every(
          (t) => t.type === 'image' || (t.type === 'text' && !t.raw.trim()) || t.type === 'br',
        );
        const inline = this.parser.parseInline(tokens);
        return onlyImages ? inline.replace(/<br>/g, '') : `<p>${inline}</p>\n`;
      },
      // Only `<div data-pair>` is allowed as raw HTML (CASE-STUDY-TEMPLATE.md).
      // Comments carry TODO(content) notes and render as nothing.
      html({ text }: Tokens.HTML | Tokens.Tag) {
        const tag = text.trim();
        if (tag.startsWith('<!--') && tag.endsWith('-->')) return '';
        if (tag === '<div data-pair>') return '<div class="figure-pair">';
        if (tag === '</div>') return '</div>';
        fail(file, `raw HTML is not allowed: ${tag.slice(0, 40)}`);
      },
      // A Measure | Before | After table becomes a ResultsTable that scrolls
      // inside its own box on narrow screens, never the page.
      table(token: Tokens.Table) {
        const cell = (c: Tokens.TableCell) => this.parser.parseInline(c.tokens);
        const head = token.header.map((c) => `<th scope="col">${cell(c)}</th>`).join('');
        const rows = token.rows
          .map(
            (row) =>
              `<tr>${row.map((c, i) => (i === 0 ? `<th scope="row">${cell(c)}</th>` : `<td>${cell(c)}</td>`)).join('')}</tr>`,
          )
          .join('');
        const [m, b, a] = token.header.map((c) => c.text.trim());
        // Measure | Before | After, where Before and After may carry a date.
        const isResults =
          token.header.length === 3 && m === 'Measure' && /^Before\b/.test(b) && /^After\b/.test(a);
        return `<div class="${isResults ? 'results-table' : 'data-table'}" tabindex="0"><table><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div>`;
      },
    },
  });
}

/** Splits the body on `## ` headings; each becomes a row in the label rail. */
function sections(file: string, body: string): WorkSection[] {
  const parts = body.split(/^## /m);
  if (parts[0].trim()) fail(file, 'text before the first ## heading');
  const md = markdown(file);
  return parts.slice(1).map((part) => {
    const [heading, ...rest] = part.split('\n');
    return {
      id: slugify(heading),
      heading: heading.trim(),
      html: md.parse(rest.join('\n')) as string,
    };
  });
}

function requireString(file: string, data: Record<string, unknown>, key: string) {
  const value = data[key];
  if (typeof value !== 'string' || !value.trim()) fail(file, `missing or empty "${key}"`);
  return value;
}

function optionalString(file: string, data: Record<string, unknown>, key: string) {
  const value = data[key];
  if (value === undefined) return undefined;
  if (typeof value !== 'string' || !value.trim()) fail(file, `"${key}" must be a non-empty string`);
  return value;
}

function requireStrings(file: string, data: Record<string, unknown>, key: string) {
  const value = data[key];
  if (!Array.isArray(value) || !value.length || !value.every((v) => typeof v === 'string'))
    fail(file, `"${key}" must be a non-empty list`);
  return value as string[];
}

function parse(file: string): { meta: WorkMeta; sections: WorkSection[] } {
  const { data, content } = matter(readFileSync(path.join(CONTENT_DIR, file), 'utf8'));

  const slug = requireString(file, data, 'slug');
  if (`${slug}.md` !== file) fail(file, `slug "${slug}" doesn't match the file name`);

  if (typeof data.order !== 'number') fail(file, 'missing "order"');

  const disciplines = requireStrings(file, data, 'disciplines');
  for (const d of disciplines)
    if (!DISCIPLINES.includes(d as Discipline)) fail(file, `unknown discipline "${d}"`);

  const links = (data.links ?? {}) as Record<string, unknown>;
  const live = optionalString(file, links, 'live');
  const code = optionalString(file, links, 'code');

  let cover: Cover | undefined;
  if (data.cover !== undefined) {
    const c = data.cover as Record<string, unknown>;
    const src = requireString(file, c, 'src');
    if (!publicFileExists(src)) fail(file, `cover ${src} not found in public/`);
    // width and height come from the file, so they can't drift from it.
    const { width, height } = imageSize(file, src);
    cover = { src, alt: requireString(file, c, 'alt'), width, height, srcSet: srcSet(src, width) };
  }

  const stats: Stat[] = ((data.stats ?? []) as Record<string, unknown>[]).map((s) => {
    const stat = { value: requireString(file, s, 'value'), label: requireString(file, s, 'label') };
    if (!FACTS.includes(stat.value))
      fail(file, `stat "${stat.value}" isn't in docs/build/CONTENT.md`);
    return stat;
  });

  const og = `/work/${slug}/og.jpg`;

  const meta: WorkMeta = {
    slug,
    title: requireString(file, data, 'title'),
    outcome: optionalString(file, data, 'outcome'),
    order: data.order,
    featured: data.featured === true,
    year: requireString(file, data, 'year'),
    role: requireString(file, data, 'role'),
    team: optionalString(file, data, 'team'),
    location: optionalString(file, data, 'location'),
    timeline: requireString(file, data, 'timeline'),
    stack: requireStrings(file, data, 'stack'),
    stackLabel: optionalString(file, data, 'stackLabel'),
    disciplines: disciplines as Discipline[],
    links: { live, code },
    cover,
    ogImage: publicFileExists(og) ? og : undefined,
    stats,
  };

  return { meta, sections: sections(file, content) };
}

function load() {
  const work = readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith('.md'))
    .map(parse)
    .sort((a, b) => a.meta.order - b.meta.order);

  const orders = new Set(work.map((w) => w.meta.order));
  if (orders.size !== work.length) throw new Error('content/work: two case studies share an order');
  return work;
}

const WORK = load();

/** Front matter only, in display order. Cheap to send to any page. */
export function getAllWork(): WorkMeta[] {
  return WORK.map((w) => w.meta);
}

export function getWorkBySlug(slug: string | undefined): WorkStudy | undefined {
  const found = WORK.find((w) => w.meta.slug === slug);
  return found && { ...found.meta, sections: found.sections };
}

/** The case study after this one, wrapping to the first after the last. */
export function getNextWork(slug: string): WorkMeta {
  const all = getAllWork();
  const i = all.findIndex((w) => w.slug === slug);
  return all[(i + 1) % all.length];
}
