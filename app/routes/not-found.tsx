import { Container } from '~/components/Layout';
import TextLinks from '~/components/TextLinks';

export function meta() {
  return [
    { title: 'Page not found · Daniel (Tobi) Akoko' },
    { name: 'robots', content: 'noindex' },
  ];
}

/**
 * Catch-all inside the layout, so unknown URLs keep the header and footer.
 * Vercel serves build/client/404.html (a copy of the SPA fallback) with a 404
 * status; this route renders once it hydrates.
 */
export default function NotFound() {
  return (
    <section className="pt-16 md:pt-24">
      <Container className="flex flex-col gap-6">
        <h1 className="text-title">Page not found</h1>
        <p className="max-w-measure text-muted">There&rsquo;s no page at this address.</p>
        <TextLinks
          links={[
            { label: 'Home', href: '/' },
            { label: 'Work', href: '/work' },
          ]}
        />
      </Container>
    </section>
  );
}
