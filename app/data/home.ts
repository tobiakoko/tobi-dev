/*
 * Home page copy, word for word from docs/build/CONTENT.md §2. Kept here so the
 * route and its components don't hard-code it.
 */

// Web copies of the original photo (2048 x 3072, kept out of the repo in
// assets/public/): 640 and 1280 wide, WebP, so Vite fingerprints and caches them.
import heroPhoto1280 from '~/assets/hero-dallas-1280.webp';
import heroPhoto640 from '~/assets/hero-dallas-640.webp';

export const HERO = {
  headline: 'I engineer software and systems people can rely on.',
  intro:
    'I’m a Dallas based software developer. I plan, build, test and support web products, payment flows, content platforms and live systems for churches, events and small businesses.',
  caption: ['Based in Dallas', 'Working across software + systems'] as const,
};

export interface HeroPhoto {
  src: string;
  srcSet: string;
  alt: string;
  width: number;
  height: number;
  photographer: string;
}

/** CONTENT.md §2.2. Set to null to fall back to the plain panel with no credit. */
export const HERO_PHOTO: HeroPhoto | null = {
  src: heroPhoto640,
  srcSet: `${heroPhoto640} 640w, ${heroPhoto1280} 1280w`,
  alt: 'a tall glass building with Fountain Place in the background',
  width: 640,
  height: 960,
  photographer: 'Walt Wellborn',
};

/** CONTENT.md §2.2a. */
export const PROOF_STRIP = [
  'Full-stack product delivery',
  'Payments and real-time systems',
  'IT & AV leadership since 2018',
] as const;

/** CONTENT.md §2.4. Each service links to the case study that proves it. */
export const SERVICES_LEAD = 'From the first constraint to a handover people can use.';

export const SERVICES = [
  {
    title: 'Systems analysis & implementation',
    sentence:
      'Understanding the current setup, finding the constraint and planning a practical path forward.',
    slug: 'led-wall',
  },
  {
    title: 'Software engineering',
    sentence: 'Accessible web products, APIs, payments and the interfaces that hold them together.',
    slug: 'afromerica',
  },
  {
    title: 'Delivery & handover',
    sentence: 'Testing, documentation and support that help the next person run what was built.',
    slug: 'lewisville',
  },
] as const;
