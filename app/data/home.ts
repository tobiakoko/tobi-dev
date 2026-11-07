/*
 * Home page copy, word for word from docs/build/CONTENT.md §2. Kept here so the
 * route and its components don't hard-code it.
 */

export const HERO = {
  headline: 'I engineer software and systems people can rely on.',
  intro:
    'I’m a Dallas based software developer. I plan, build, test and support web products, payment flows, content platforms and live systems for churches, events and small businesses.',
  caption: ['Based in Dallas', 'Working across software + systems'] as const,
};

export interface HeroPhoto {
  src: string;
  alt: string;
  width: number;
  height: number;
  photographer: string;
}

// TODO(content): the hero photo of Dallas and its photographer's name
// (CONTENT.md §2.2). Until both arrive the hero shows a plain placeholder
// panel and no credit line.
export const HERO_PHOTO: HeroPhoto | null = null;

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
