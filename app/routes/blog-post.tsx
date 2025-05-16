import { BlogPosts } from '~/welcome/blogPost'
import type { Route } from './+types/blog-post'

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'Blog Post' },
        { name: 'description', content: 'Details about the blog post.' },
    ]
}

export default function BlogPost() {
    return <BlogPosts />
}
