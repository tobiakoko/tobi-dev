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
    <section className="page-top shell flex flex-col gap-6">
      <h1 className="text-title">Page not found</h1>
      <p className="page-header__lead max-w-measure">There&rsquo;s no page at this address.</p>
      <p className="flex gap-6">
        <Link to="/" className="arrowlink ulink">
          Home <span aria-hidden="true">↗</span>
        </Link>
        <Link to="/work" className="arrowlink ulink">
          Work <span aria-hidden="true">↗</span>
        </Link>
      </p>
    </section>
  );
}
