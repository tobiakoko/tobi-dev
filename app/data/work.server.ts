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

function markdown(file: string) {
  return new Marked({
    gfm: true,
    renderer: {
      // An image with a title becomes a Figure; the title is the caption.
      image({ href, title, text }: Tokens.Image) {
        if (!publicFileExists(href)) fail(file, `image ${href} not found in public/`);
        if (!text) fail(file, `image ${href} has no alt text`);
        // TODO(content): width and height from the file once screenshots exist (Phase 3).
        const img = `<img src="${escape(href)}" alt="${escape(text)}" loading="lazy" decoding="async" />`;
        if (!title) return img;
        return `<figure class="figure"><div class="figure-frame">${img}</div><figcaption>${escape(title)}</figcaption></figure>`;
      },
      // Only `<div data-pair>` is allowed as raw HTML (CASE-STUDY-TEMPLATE.md).
      html({ text }: Tokens.HTML | Tokens.Tag) {
        const tag = text.trim();
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
        const isResults =
          token.header.map((c) => c.text.trim()).join('|') === 'Measure|Before|After';
        return `<div class="${isResults ? 'results-table' : 'table'}" tabindex="0"><table><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div>`;
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
    cover = {
      src: requireString(file, c, 'src'),
      alt: requireString(file, c, 'alt'),
      width: Number(c.width),
      height: Number(c.height),
    };
    if (!cover.width || !cover.height) fail(file, 'cover needs width and height');
    if (!publicFileExists(cover.src)) fail(file, `cover ${cover.src} not found in public/`);
  }

  const stats: Stat[] = ((data.stats ?? []) as Record<string, unknown>[]).map((s) => {
    const stat = { value: requireString(file, s, 'value'), label: requireString(file, s, 'label') };
    if (!FACTS.includes(stat.value))
      fail(file, `stat "${stat.value}" isn't in docs/build/CONTENT.md`);
    return stat;
  });

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
    disciplines: disciplines as Discipline[],
    links: { live, code },
    cover,
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
