import { Container } from '~/components/Layout';
import MetaGrid from '~/components/MetaGrid';
import { BOOKING_URL, EMAIL, GITHUB_URL, LINKEDIN_URL, LOCATION, pageMeta } from '~/data/site';

export function meta() {
  return pageMeta({
    title: 'Contact · Daniel (Tobi) Akoko',
    description:
      'Contact Daniel (Tobi) Akoko, a software engineer in Dallas, about full-time roles or freelance web projects.',
    path: '/contact',
  });
}

const external = { target: '_blank', rel: 'noopener noreferrer' } as const;
const bare = (url: string) => url.replace(/^https?:\/\//, '');

export default function Contact() {
  return (
    <Container className="flex flex-col gap-12 pt-16 md:gap-18 md:pt-24">
      <header className="flex flex-col gap-6">
        <h1 className="text-title">Let&rsquo;s talk</h1>
        <p className="max-w-measure text-muted">
          I&rsquo;m open to full-time roles and freelance projects. Email is best, and I reply
          within two business days.
        </p>
      </header>
      <MetaGrid
        items={[
          {
            label: 'Email',
            value: (
              <a href={`mailto:${EMAIL}`} className="link">
                {EMAIL}
              </a>
            ),
          },
          {
            label: 'Book a call',
            value: BOOKING_URL && (
              <a href={BOOKING_URL} className="link" {...external}>
                Book a call
              </a>
            ),
          },
          {
            label: 'LinkedIn',
            value: (
              <a href={LINKEDIN_URL} className="link" {...external}>
                {bare(LINKEDIN_URL)}
              </a>
            ),
          },
          {
            label: 'GitHub',
            value: (
              <a href={GITHUB_URL} className="link" {...external}>
                {bare(GITHUB_URL)}
              </a>
            ),
          },
          { label: 'Location', value: LOCATION },
        ]}
      />
    </Container>
  );
}
