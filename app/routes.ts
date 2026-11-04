import { type RouteConfig, index, layout, route } from '@react-router/dev/routes';

export default [
  layout('routes/layout.tsx', [
    index('routes/home.tsx'),
    route('about', 'routes/about.tsx'),
    route('work', 'routes/work.tsx'),
    route('work/:slug', 'routes/work-detail.tsx'),
    route('contact', 'routes/contact.tsx'),
    route('*', 'routes/not-found.tsx'),
  ]),
] satisfies RouteConfig;
