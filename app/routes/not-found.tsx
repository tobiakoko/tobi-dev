import { Link } from 'react-router';

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
    <section className="mx-auto max-w-[1200px] px-6 py-32 md:px-12">
      <h1 className="text-[clamp(44px,6vw,72px)] font-light tracking-[-0.02em]">Page not found</h1>
      <p className="mt-5 max-w-[60ch] text-[17px] leading-[1.65] text-muted">
        There&rsquo;s no page at this address.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link to="/" className="btn-solid">
          Home
        </Link>
        <Link to="/work" className="btn-outline">
          Work
        </Link>
      </div>
    </section>
  );
}
