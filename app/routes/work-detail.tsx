import CaseStudyHeader from '~/components/CaseStudyHeader';
import { Container, LabelRail, LabelRailRow } from '~/components/Layout';
import NextProject from '~/components/NextProject';
import NotFound from './not-found';
import { getNextWork, getWorkBySlug } from '~/data/work.server';
import { FULL_NAME, pageMeta } from '~/data/site';
import type { Route } from './+types/work-detail';

export function loader({ params }: Route.LoaderArgs) {
  const work = getWorkBySlug(params.slug);
  if (!work) throw new Response('Not found', { status: 404 });
  return { work, next: getNextWork(work.slug) };
}

export function meta({ loaderData }: Route.MetaArgs) {
  if (!loaderData) return [{ title: 'Page not found · Daniel (Tobi) Akoko' }];
  const { work } = loaderData;
  return pageMeta({
    title: `${work.title} · Daniel (Tobi) Akoko`,
    description:
      work.outcome ??
      `${work.title}${work.location ? `, ${work.location}` : ''}: built by ${FULL_NAME}.`,
    path: `/work/${work.slug}`,
    type: 'article',
    image: work.ogImage,
    imageAlt: work.ogImage ? work.cover?.alt : undefined,
  });
}

export default function WorkDetail({ loaderData }: Route.ComponentProps) {
  const { work, next } = loaderData;

  return (
    <article>
      <Container className="flex flex-col gap-24 pt-16 md:gap-40 md:pt-24">
        <CaseStudyHeader work={work} />

        {/* TODO(content): the remaining template sections arrive in Phase 3; empty ones stay hidden. */}
        {work.sections.length > 0 && (
          <LabelRail>
            {work.sections.map((section) => (
              <LabelRailRow key={section.id} id={section.id} label={section.heading}>
                <div className="prose" dangerouslySetInnerHTML={{ __html: section.html }} />
              </LabelRailRow>
            ))}
          </LabelRail>
        )}

        <NextProject work={next} />
      </Container>
    </article>
  );
}

/**
 * An unknown slug (no prerendered data) renders the 404 page here, inside the
 * layout, instead of bubbling up to the bare root error page.
 */
export function ErrorBoundary() {
  return <NotFound />;
}
