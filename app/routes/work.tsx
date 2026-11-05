import { Container, Section } from '~/components/Layout';
import { WorkList } from '~/components/WorkRow';
import { getAllWork } from '~/data/work.server';
import { pageMeta } from '~/data/site';
import type { Route } from './+types/work';

export function meta() {
  return pageMeta({
    title: 'Work · Daniel (Tobi) Akoko',
    description:
      'Case studies from Daniel Akoko: church websites, a live-voting competition platform, and small-business sites, with architecture and measured results.',
    path: '/work',
  });
}

export function loader() {
  return { work: getAllWork() };
}

export default function Work({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <section className="pt-16 md:pt-24">
        <Container className="flex flex-col gap-6">
          <h1 className="text-title">Work</h1>
          <p className="max-w-measure text-muted">
            Projects I&rsquo;ve planned, built and supported, each with a full case study.
          </p>
        </Container>
      </section>
      <Section>
        <WorkList work={loaderData.work} level={2} />
      </Section>
    </>
  );
}
