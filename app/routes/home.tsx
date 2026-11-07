import { Link } from 'react-router';
import ProjectCard from '~/components/ProjectCard';
import SectionHeading from '~/components/SectionHeading';
import { HERO, HERO_PHOTO, PROOF_STRIP, SERVICES, SERVICES_LEAD } from '~/data/home';
import { getAllWork } from '~/data/work.server';
import { AVAILABILITY, BOOKING_URL, DISPLAY_NAME, EMAIL, LOCATION, pageMeta } from '~/data/site';
import type { Route } from './+types/home';

export function meta() {
  return pageMeta({
    title: 'Daniel (Tobi) Akoko · Software Engineer in Dallas',
    description:
      'Daniel (Tobi) Akoko is a software engineer in Dallas who plans, builds, tests and hands over web software for churches and small businesses.',
    path: '/',
    type: 'profile',
  });
}

export function loader() {
  const work = getAllWork();
  const titleOf = (slug: string) => work.find((w) => w.slug === slug)?.title ?? slug;
  return {
    // Each card keeps its place in the full list, so it reads "03 / 07".
    featured: work.flatMap((w, i) => (w.featured ? [{ work: w, number: i + 1 }] : [])),
    total: work.length,
    services: SERVICES.map((s) => ({ ...s, proof: titleOf(s.slug) })),
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { featured, total, services } = loaderData;

  return (
    <>
      <section className="hero shell" aria-labelledby="hero-title">
        <p className="label">
          {DISPLAY_NAME} · {LOCATION}
        </p>
        <div>
          <h1 id="hero-title">{HERO.headline}</h1>
          <p className="hero-intro">{HERO.intro}</p>
          <div className="hero-actions">
            <a href="#selected-work" className="btn btn-primary">
              View selected work <span aria-hidden="true">↓</span>
            </a>
            <span className="flex gap-[1.1rem] font-semibold">
              <Link to="/about" className="ulink">
                About
              </Link>
              <Link to="/contact" className="ulink">
                Contact
              </Link>
            </span>
          </div>
        </div>
        <figure className="hero-visual">
          <div className="hero-photo">
            {HERO_PHOTO && (
              <img
                src={HERO_PHOTO.src}
                width={HERO_PHOTO.width}
                height={HERO_PHOTO.height}
                alt={HERO_PHOTO.alt}
                fetchPriority="high"
              />
            )}
          </div>
          <figcaption>
            <span className="hero-caption">
              <span>{HERO.caption[0]}</span>
              <span>{HERO.caption[1]}</span>
            </span>
            {/* The credit shows only once the photographer is known (CONTENT.md §2.2). */}
            {HERO_PHOTO && (
              <span className="hero-credit">
                Editorial photo by {HERO_PHOTO.photographer} on Unsplash
              </span>
            )}
          </figcaption>
        </figure>
      </section>

      <section className="proof-strip" aria-label="Experience highlights">
        <ul className="proof-grid shell">
          {PROOF_STRIP.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section
        className="band band--first shell scroll-mt-20"
        id="selected-work"
        aria-labelledby="selected-work-title"
      >
        <SectionHeading
          id="selected-work-title"
          eyebrow="01 / Work"
          title="Selected work"
          aside={
            <Link to="/work" className="arrowlink ulink">
              All work <span aria-hidden="true">↗</span>
            </Link>
          }
        />
        <ul className="work-grid">
          {featured.map(({ work, number }) => (
            <li key={work.slug} className="min-w-0">
              <ProjectCard work={work} number={number} total={total} />
            </li>
          ))}
        </ul>
      </section>

      <section className="band shell" aria-labelledby="services-title">
        <SectionHeading
          id="services-title"
          eyebrow="02 / Capabilities"
          title="How I can help"
          aside={<p className="section-heading__lead">{SERVICES_LEAD}</p>}
        />
        <ol className="service">
          {services.map((s, i) => (
            <li key={s.slug}>
              <p className="label tabular-nums">{String(i + 1).padStart(2, '0')}</p>
              <div className="service__body">
                <h3>{s.title}</h3>
                <p>{s.sentence}</p>
                <Link to={`/work/${s.slug}`} className="arrowlink ulink mt-1 self-start">
                  {s.proof} <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="band shell" aria-label="Availability">
        <p className="availability">
          <span aria-hidden="true" className="inline-block h-[9px] w-[9px] shrink-0 bg-accent" />
          <span>{AVAILABILITY}.</span>
          <a href={`mailto:${EMAIL}`} className="arrowlink ulink">
            {EMAIL} <span aria-hidden="true">↗</span>
          </a>
          {BOOKING_URL && (
            <a
              href={BOOKING_URL}
              className="arrowlink ulink"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a call <span aria-hidden="true">↗</span>
            </a>
          )}
        </p>
      </section>
    </>
  );
}
