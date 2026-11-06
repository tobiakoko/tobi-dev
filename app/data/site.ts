export const SITE_URL = 'https://tobiakoko.com';

export const FULL_NAME = 'Daniel Akoko';
export const ALT_NAME = 'Tobi Akoko';
export const DISPLAY_NAME = 'Daniel (Tobi) Akoko';
export const JOB_TITLE = 'Software Engineer';

export const EMAIL = 'enquiries@tobiakoko.com';
export const LOCATION = 'Dallas, Texas';
export const GITHUB_URL = 'https://github.com/tobiakoko';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/daniel-akoko/';
export const AVAILABILITY = 'Open to full-time roles and freelance projects';

// TODO(content): Cal.com or Calendly URL. Every "Book a call" link stays hidden while null.
export const BOOKING_URL: string | null = null;

/** Google Analytics 4 measurement ID. Loaded only on the production domain. */
export const GA_ID = 'G-GE9DBZB0X1';

const OG_IMAGE = '/og.png';

/**
 * Builds the full title/description/canonical/OpenGraph/Twitter block for a
 * route. Every page needs the same ~17 tags, so they live here rather than
 * being repeated (and drifting) across five route files.
 *
 * `path` must be the route's own path — a canonical pointing anywhere else
 * tells search engines the page is a duplicate.
 */
export function pageMeta({
  title,
  description,
  path,
  type = 'website',
  image: imagePath = OG_IMAGE,
  imageAlt = `${FULL_NAME} (${ALT_NAME}) — ${JOB_TITLE}`,
}: {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article' | 'profile';
  /** A 1200 x 630 image in public/; defaults to the site-wide preview. */
  image?: string;
  imageAlt?: string;
}) {
  const url = path === '/' ? SITE_URL : `${SITE_URL}${path}`;
  const image = `${SITE_URL}${imagePath}`;

  return [
    { title },
    { name: 'description', content: description },
    { name: 'author', content: FULL_NAME },
    { tagName: 'link', rel: 'canonical', href: url },

    { property: 'og:type', content: type },
    { property: 'og:site_name', content: `${FULL_NAME} — ${JOB_TITLE}` },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: url },
    { property: 'og:image', content: image },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    {
      property: 'og:image:alt',
      content: imageAlt,
    },
    { property: 'og:locale', content: 'en_US' },

    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image },
  ];
}
