import { Link } from 'react-router';
import HatchPlaceholder from '~/components/HatchPlaceholder';
import { EMAIL, LOCATION, pageMeta } from '~/data/site';
import type { Route } from './+types/about';

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: 'About Daniel “Tobi” Akoko — Software Engineer in Dallas',
    description:
      'Daniel Akoko, who also goes by Tobi, is a full stack software engineer based in Dallas, Texas, specializing in high-performance, accessible web applications.',
    path: '/about',
    type: 'profile',
  });
}

const COLUMNS = [
  {
    heading: 'Credentials',
    items: [
      'B.S. Computer Science — Western Governors University',
      'B.G.S. Criminology — University of South Florida',
      'A.S. Electrical Engineering — Community College of Baltimore County',
    ],
  },
  {
    heading: 'Experience',
    items: ['Full-Stack Platforms', 'Web Applications', 'AI & Machine Learning'],
  },
  {
    heading: 'Technology',
    items: [
      'TypeScript, React, Next.js',
      'Node.js, REST APIs, Supabase',
      'Tailwind CSS, Framer Motion, GSAP',
    ],
  },
  {
    heading: 'Interests',
    items: ['Choir Direction', 'Media Production', 'Emerging AI Technologies'],
  },
];

export default function About() {
  return (
    <>
      <section className="mx-auto max-w-[1200px] px-6 pt-20 md:px-12">
        <h1 className="text-[clamp(44px,6vw,72px)] font-light tracking-[-0.02em]">
          Daniel &ldquo;Tobi&rdquo; Akoko
        </h1>
        <p className="mt-3.5 text-[13px] tracking-[0.2em] text-muted uppercase">
          Software Engineer &middot; Full Stack Developer
        </p>
      </section>

      <section className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-12 px-6 pt-14 pb-24 md:grid-cols-[380px_1fr] md:gap-20 md:px-12 md:pb-[100px]">
        <div className="flex flex-col gap-7 md:sticky md:top-[120px]">
          <HatchPlaceholder note="[ headshot ]" ratio="4/5" />
          <div className="flex flex-col gap-2.5 border-t border-line pt-5">
            <span className="label">Email</span>
            <a href={`mailto:${EMAIL}`} className="text-sm">
              {EMAIL}
            </a>
            <span className="label mt-2">Based in</span>
            <span className="text-sm text-ink">{LOCATION}</span>
            <Link
              to="/contact"
              className="btn-solid mt-4 px-6 py-3.5 text-center text-xs tracking-[0.16em]"
            >
              Contact Daniel
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-5">
            <p className="text-lg leading-[1.75] text-ink">
              Daniel Akoko — who also goes by Tobi Akoko — is a full stack software engineer based
              in Dallas, Texas, specializing in high-performance, accessible web applications. Since
              beginning his practice, his focus has spanned enterprise entertainment platforms,
              professional services websites, community platforms, and AI-powered solutions — of
              which he has been the lead engineer and architect.
            </p>
            <p className="text-base leading-[1.75] text-muted">
              Daniel specializes in frontend architecture and performance optimization, with a
              technically rigorous and collaborative approach to delivering software. He has been
              responsible for the design and implementation of six production applications across
              entertainment, legal, automotive, faith-based, and AI domains. His toolkit centers on
              React, TypeScript, and Next.js, with backend capabilities in Node.js, REST API
              development, and database design.
            </p>
            <p className="text-base leading-[1.75] text-muted">
              Beyond his engineering practice, Daniel contributes to his community through
              leadership roles in fundraising, media production, and choir direction —
              responsibilities that have sharpened his project management and team leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            {COLUMNS.map((col) => (
              <div key={col.heading} className="flex flex-col gap-3.5">
                <h3 className="label border-b border-line pb-2.5 text-[13px]">{col.heading}</h3>
                <ul className="flex list-none flex-col gap-3 p-0 text-sm leading-[1.5]">
                  {col.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-bg-alt px-6 py-20 md:px-12 md:py-[90px]">
        <div className="mx-auto flex max-w-[900px] flex-col gap-7 text-center">
          <p className="text-[clamp(22px,3vw,30px)] leading-[1.55] font-light text-pretty text-ink italic">
            &ldquo;Every project is an opportunity to listen, collaborate, and deliver software that
            not only meets today&rsquo;s demands but anticipates tomorrow&rsquo;s growth.&rdquo;
          </p>
          <p className="text-[13px] tracking-[0.16em] text-muted uppercase">— Daniel Akoko</p>
        </div>
      </section>
    </>
  );
}
