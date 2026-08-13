export type ProjectCategory = 'fullstack' | 'web' | 'ai';

export interface Project {
  /** URL segment for /projects/:slug */
  slug: string;
  title: string;
  /** Dimmed suffix rendered after the title on the index; may be empty. */
  locale: string;
  /** Display label, e.g. 'Full-Stack Platform'. */
  type: string;
  /** Filter key. */
  cat: ProjectCategory;
  year: string;
  role: string;
  /** Comma-joined stack, rendered as a single line in the detail sidebar. */
  stack: string;
  url: string;
  /** Caption shown inside the hatch placeholder until real imagery exists. */
  imgNote: string;
  tagline: string;
  /** Detail-page body paragraphs. */
  body: string[];
}

export const projects: Project[] = [
  {
    slug: 'afromerica',
    title: 'Afromerica Entertainment',
    locale: 'Entertainment',
    type: 'Full-Stack Platform',
    cat: 'fullstack',
    year: '2025',
    role: 'Lead Engineer & Architect',
    stack: 'Next.js, TypeScript, Tailwind CSS, Supabase, Vercel',
    url: 'https://www.afromericaent.com/',
    imgNote: '[ platform screenshot ]',
    tagline:
      'An entertainment platform for content management, event ticketing, and artist promotion.',
    body: [
      'Afromerica Entertainment is a comprehensive entertainment platform enabling seamless content management, event ticketing, and artist promotion. The platform serves artists and audiences alike, with real-time updates keeping event information and content current across the experience.',
      'The build features a modern full-stack architecture with secure authentication and scalable cloud infrastructure, designed to grow with the platform’s audience while maintaining performance under load.',
    ],
  },
  {
    slug: 'rons-body-shop',
    title: "Ron's Body Shop",
    locale: 'Tampa, FL',
    type: 'Web Application',
    cat: 'web',
    year: '2025',
    role: 'Designer & Developer',
    stack: 'React, Vite, TypeScript, Tailwind CSS, GSAP, Framer Motion',
    url: 'https://www.ronsbodyshop.net/',
    imgNote: '[ website screenshot ]',
    tagline: 'A premium automotive service website showcasing collision repair expertise.',
    body: [
      'Ron’s Body Shop is a premium automotive service website that showcases collision repair expertise through immersive animation and responsive design. Smooth scroll interactions and dynamic service galleries guide visitors through the shop’s capabilities.',
      'Performance was a first-class requirement: the site is optimized for fast loads and fluid motion on every device, delivering an experience that matches the quality of the work it represents.',
    ],
  },
  {
    slug: 'oseiprempeh',
    title: 'OseiPrempeh Law Firm',
    locale: '',
    type: 'Web Application',
    cat: 'web',
    year: '2024',
    role: 'Designer & Developer',
    stack: 'React Router v7, TypeScript, Tailwind CSS, Framer Motion',
    url: 'https://www.oseiprempeh.com/',
    imgNote: '[ website screenshot ]',
    tagline:
      'A professional legal services platform with an elegant, trustworthy client experience.',
    body: [
      'OseiPrempeh Law Firm is a professional legal services platform leveraging React Router v7 for fluid navigation and dynamic content delivery. The design pairs sophisticated UI/UX with restrained, editorial presentation appropriate to the profession.',
      'Careful performance optimization ensures the site feels as considered as it looks — an elegant, trustworthy experience for prospective clients from first click to consultation.',
    ],
  },
  {
    slug: 'dlbc-tampa',
    title: 'DLBC Tampa',
    locale: 'Tampa, FL',
    type: 'Web Application',
    cat: 'web',
    year: '2024',
    role: 'Lead Engineer',
    stack: 'Next.js, React, Tailwind CSS, CMS',
    url: 'https://www.dlbctampa.org/',
    imgNote: '[ website screenshot ]',
    tagline: 'A community-focused church platform for events, sermons, and member engagement.',
    body: [
      'DLBC Tampa is a community-focused church platform integrating event management, multimedia sermon archives, and member engagement tools into a single cohesive experience.',
      'Architected for growth, the platform pairs intuitive content management for staff with seamless mobile accessibility for the congregation — keeping the community connected wherever they are.',
    ],
  },
  {
    slug: 'ask-kumuyi',
    title: 'Ask Kumuyi AI',
    locale: '',
    type: 'AI / Machine Learning',
    cat: 'ai',
    year: '2025',
    role: 'AI Engineer',
    stack: 'Python, Azure AI, React, REST API',
    url: 'https://askkumuyi.ai/',
    imgNote: '[ product screenshot ]',
    tagline: 'A conversational AI delivering context-aware guidance through natural language.',
    body: [
      'Ask Kumuyi AI is an intelligent conversational assistant powered by Azure, delivering context-aware spiritual guidance through advanced natural language processing.',
      'The system features sophisticated prompt engineering, vector-based knowledge retrieval, and enterprise-grade cloud deployment — combining careful AI design with production reliability.',
    ],
  },
  {
    slug: 'portfolio',
    title: 'Portfolio Website',
    locale: '',
    type: 'Web Application',
    cat: 'web',
    year: '2026',
    role: 'Designer & Developer',
    stack: 'React Router v7, TypeScript, Tailwind CSS, Vite',
    url: 'https://tobiakoko.com',
    imgNote: '[ site screenshot ]',
    tagline: 'A developer portfolio built for speed, accessibility, and visual clarity.',
    body: [
      'This portfolio itself is a demonstration of the practice: a modern developer site showcasing technical expertise through performant rendering, responsive layouts, and clean architecture.',
      'Built with React Router v7 and optimized for speed, accessibility, and visual impact, it reflects the same standards applied to every client engagement.',
    ],
  },
];

export const filterDefs: { key: ProjectCategory | 'all'; label: string }[] = [
  { key: 'all', label: 'View All' },
  { key: 'fullstack', label: 'Full-Stack' },
  { key: 'web', label: 'Web Applications' },
  { key: 'ai', label: 'AI & Machine Learning' },
];

export function getProjectBySlug(slug: string | undefined) {
  return projects.find((p) => p.slug === slug);
}
