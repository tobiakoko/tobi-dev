import {
    type RouteConfig,
    index,
    layout,
    route,
} from '@react-router/dev/routes'

export default [
    layout('routes/layout.tsx', [
        index('routes/home.tsx'),
        route('about', 'routes/about.tsx'),
        route('blog', 'routes/blog.tsx'),
        route('blog/:id', 'routes/blog-post.tsx'),
        route('contact', 'routes/contact.tsx'),
        route('books', 'routes/books.tsx'),
        route('books/:id', 'routes/book.tsx'),
    ]),
] satisfies RouteConfig
