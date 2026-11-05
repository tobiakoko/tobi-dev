import { Link } from 'react-router';
import { Container, Section } from '~/components/Layout';
import TextLinks from '~/components/TextLinks';
import { WorkList } from '~/components/WorkRow';
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
  const title = (slug: string) => work.find((w) => w.slug === slug)?.title ?? slug;
  return {
    featured: work.filter((w) => w.featured),
    proof: { lewisville: title('lewisville'), afromerica: title('afromerica') },
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { featured, proof } = loaderData;

  // CONTENT.md §2.4: one line per discipline, each with the case study that proves it.
  const disciplines = [
    {
      name: 'Engineering',
      line: 'Build it properly.',
      sentence:
        'Typed APIs, real tests and pages that load fast, in Next.js, React, TypeScript and Postgres.',
      slug: 'afromerica',
      proof: proof.afromerica,
    },
    {
      name: 'Analysis',
      line: 'Get the facts right.',
      sentence:
        'I start with discovery and an audit, then write requirements with acceptance criteria someone can check.',
      slug: 'lewisville',
      proof: proof.lewisville,
    },
    {
      name: 'Implementation',
      line: 'Hand it over.',
      sentence:
        'Content systems, integrations, a runbook and training, so non-technical staff can run what I build.',
      slug: 'lewisville',
      proof: proof.lewisville,
    },
    {
      name: 'Delivery',
      line: 'Ship in phases.',
      sentence: 'Small, gated releases with a clear status and a sign-off at each step.',
      slug: 'lewisville',
      proof: proof.lewisville,
    },
  ];

  return (
    <>
      <section className="flex min-h-[70svh] flex-col justify-end pt-24 pb-12 md:pb-20">
        <Container className="flex flex-col gap-6 md:gap-8">
          <p className="label">
            {DISPLAY_NAME} · {LOCATION}
          </p>
          <h1 className="max-w-[18ch] text-display text-balance">From requirements to release.</h1>
          <p className="max-w-measure text-muted">
            I&rsquo;m a software engineer who plans, builds, tests and hands over web software for
            churches and small businesses. My work runs from paid voting and live leaderboards to
            content systems that staff update themselves.
          </p>
          <TextLinks
            links={[
              { label: 'Work', href: '/work' },
              { label: 'About', href: '/about' },
              { label: 'Email', href: `mailto:${EMAIL}` },
            ]}
          />
        </Container>
      </section>

      <Section aria-labelledby="selected-work">
        <h2 id="selected-work" className="mb-8 text-h2">
          Selected work
        </h2>
        <WorkList work={featured} />
        <Link to="/work" className="link mt-8 inline-block">
          All work →
        </Link>
      </Section>

      <Section aria-labelledby="how-i-work">
        <h2 id="how-i-work" className="mb-8 text-h2 md:mb-12">
          How I work
        </h2>
        <ul className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-16 md:gap-y-18">
          {disciplines.map((d) => (
            <li key={d.name} className="flex flex-col gap-3">
              <p className="label">{d.name}</p>
              <h3 className="text-h3">{d.line}</h3>
              <p className="text-muted">{d.sentence}</p>
              <Link to={`/work/${d.slug}`} className="link self-start text-small">
                {d.proof} →
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section aria-label="Availability">
        <p className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
          <span className="flex items-baseline gap-3">
            <span
              aria-hidden="true"
              className="inline-block h-2 w-2 shrink-0 rounded-full bg-accent"
            />
            {AVAILABILITY}.
          </span>
          <a href={`mailto:${EMAIL}`} className="link">
            {EMAIL}
          </a>
          {BOOKING_URL && (
            <a href={BOOKING_URL} className="link" target="_blank" rel="noopener noreferrer">
              Book a call
            </a>
          )}
        </p>
      </Section>
    </>
  );
}
