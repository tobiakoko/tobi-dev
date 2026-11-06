import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteLoaderData,
} from 'react-router';
import { Analytics } from '@vercel/analytics/react';
import { technologies } from '~/data/work';
import { getAllWork } from '~/data/work.server';
import {
  ALT_NAME,
  EMAIL,
  FULL_NAME,
  GA_ID,
  GITHUB_URL,
  JOB_TITLE,
  LINKEDIN_URL,
  SITE_URL,
} from '~/data/site';
import interFont from '@fontsource-variable/inter/files/inter-latin-wght-normal.woff2?url';
import Logo from '/Logo-dark.ico';
import type { Route } from './+types/root';
import './app.css';

// No canonical here — a root-level canonical applies to every route and would
// tell search engines the whole site is one page. Each route emits its own via
// pageMeta() in app/data/site.ts.
export const links: Route.LinksFunction = () => [
  { rel: 'icon', type: 'image/x-icon', href: Logo },
  // The one font file; app.css declares the same URL in @font-face.
  { rel: 'preload', href: interFont, as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
];

/** Runs at build time. The stacks live in content/work, read by work.server.ts. */
export function loader() {
  return { knowsAbout: technologies(getAllWork()) };
}

/**
 * Person schema. This is what lets Google resolve "Daniel Akoko" and
 * "Tobi Akoko" to a single entity, so a search for either name can surface
 * this site. Rendered into every prerendered page.
 */
function personSchema(knowsAbout: string[]) {
  return {
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
        // Derived from the project stacks, so it lists only what the code uses.
        knowsAbout,
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
}

/*
 * Google's gtag.js setup, run only on the production domain so localhost and
 * Vercel previews don't count as visits. GA4's enhanced measurement records
 * client-side navigations from browser history, so one config call covers
 * every route.
 */
const gaScript = `
if (location.hostname === '${new URL(SITE_URL).hostname}') {
  var s = document.createElement('script'); s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=${GA_ID}';
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${GA_ID}');
}
`;

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
  // Undefined only if the root loader didn't run (an error page); the schema
  // then omits knowsAbout rather than the whole block.
  const data = useRouteLoaderData<typeof loader>('root');

  return (
    // themeScript sets data-theme before hydration, so the attribute differs
    // from the prerendered HTML on purpose.
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script dangerouslySetInnerHTML={{ __html: gaScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema(data?.knowsAbout ?? [])) }}
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
    <main className="mx-auto max-w-wide px-6 py-24 md:px-12 md:py-40">
      <h1 className="text-title">{message}</h1>
      <p className="mt-6 max-w-measure text-muted">{details}</p>
      <Link to="/" className="link mt-10 inline-block">
        Home
      </Link>
      {stack && (
        <pre className="mt-10 w-full overflow-x-auto border border-line p-4 text-xs">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
