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
//
//
// export function links() {
//     return [
//         { rel: "stylesheet", href: "/styles/blog-post.css" },
//     ];
// }
// export function action({ request }: Route.ActionArgs) {
//     const formData = new URLSearchParams(await request.text());
//     const title = formData.get("title");
//     const content = formData.get("content");
//
//     // Handle form submission logic here
//     // For example, save the blog post to a database
//     console.log("Title:", title);
//     console.log("Content:", content);
//
//     return { success: true };
// }
