import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router';
import { Analytics } from '@vercel/analytics/react';
import {
  ALT_NAME,
  EMAIL,
  FULL_NAME,
  GITHUB_URL,
  JOB_TITLE,
  LINKEDIN_URL,
  SITE_URL,
} from '~/data/site';
import Logo from '/Logo-dark.ico';
import type { Route } from './+types/root';
import './app.css';

// No canonical here — a root-level canonical applies to every route and would
// tell search engines the whole site is one page. Each route emits its own via
// pageMeta() in app/data/site.ts.
export const links: Route.LinksFunction = () => [{ rel: 'icon', type: 'image/x-icon', href: Logo }];

/**
 * Person schema. This is what lets Google resolve "Daniel Akoko" and
 * "Tobi Akoko" to a single entity, so a search for either name can surface
 * this site. Rendered into every prerendered page.
 */
const personSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: FULL_NAME,
      alternateName: [ALT_NAME, 'Daniel Tobi Akoko'],
      url: SITE_URL,
      jobTitle: JOB_TITLE,
      email: `mailto:${EMAIL}`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dallas',
        addressRegion: 'TX',
        addressCountry: 'US',
      },
      sameAs: [GITHUB_URL, LINKEDIN_URL],
      knowsAbout: [
        'React',
        'TypeScript',
        'Next.js',
        'Node.js',
        'Frontend Architecture',
        'Web Accessibility',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: `${FULL_NAME} — ${JOB_TITLE}`,
      publisher: { '@id': `${SITE_URL}/#person` },
      inLanguage: 'en-US',
    },
  ],
};

/*
 * Applies the stored theme synchronously, before first paint. Without this the
 * light palette renders for a frame and dark-mode visitors get a white flash.
 */
const themeScript = `
try {
  var t = localStorage.theme ||
    (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.dataset.theme = t;
} catch (e) {}
`;

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <Analytics />
        <ScrollRestoration />
        <Scripts />
        <noscript>
          This website requires JavaScript to function properly. Please enable JavaScript to
          continue.
        </noscript>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404 ? 'The requested page could not be found.' : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="mx-auto max-w-[1200px] px-6 py-32 md:px-12">
      <h1 className="text-[clamp(44px,6vw,72px)] font-light tracking-[-0.02em]">{message}</h1>
      <p className="mt-5 max-w-[60ch] text-[17px] leading-[1.65] text-muted">{details}</p>
      <Link to="/" className="btn-solid mt-10">
        Back Home
      </Link>
      {stack && (
        <pre className="mt-10 w-full overflow-x-auto border border-line p-4 text-xs">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
