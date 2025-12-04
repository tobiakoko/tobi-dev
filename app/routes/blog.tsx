import { Link } from 'react-router'
import { motion } from 'framer-motion'
import type { Route } from './+types/blog'
import { getAllPosts, type BlogPost } from '~/utils/blog.server'
 
export async function loader() {
    const posts = await getAllPosts()
    return { posts }
}
 
export function meta({}: Route.MetaArgs) {
    return [
        { name: 'author', content: 'Daniel Akoko' },
        { title: 'Blog - Daniel Akoko' },
        {
            name: 'description',
            content:
                'Thoughts, tutorials, and insights on software engineering, web development, and technology.',
        },
    ]
}
 
function BlogCard({ post, index }: { post: BlogPost; index: number }) {
    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
 
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-[color:var(--card)] rounded-lg p-6 border border-[color:var(--border)] hover:border-[color:var(--accent)] transition-all duration-300"
        >
            <div className="flex items-center justify-between mb-4 text-sm text-[color:var(--text-secondary)]">
                <time dateTime={post.date}>{formattedDate}</time>
                <span>{post.readTime}</span>
            </div>
 
            <h2 className="text-xl font-bold mb-3 text-[color:var(--text-heading)] group-hover:text-[color:var(--accent)] transition-colors">
                {post.title}
            </h2>
 
            <p className="text-[color:var(--text-secondary)] mb-4 leading-relaxed text-sm">
                {post.excerpt}
            </p>
 
            <div className="flex items-center justify-between">
                <span className="text-xs text-[color:var(--accent)] font-medium">
                    {post.category}
                </span>
                <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-[color:var(--accent)] font-medium text-sm hover:underline"
                >
                    Read More
                    <svg
                        className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </Link>
            </div>
        </motion.article>
    )
}
 
export default function Blog({ loaderData }: Route.ComponentProps) {
    const { posts } = loaderData
 
    return (
        <div className="min-h-screen py-32 px-6 md:px-12">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[color:var(--text-heading)] flex items-center gap-4">
                        <span className="section-number">03.</span>
                        Blog
                    </h1>
                    <div className="w-full max-w-xs h-px bg-[color:var(--border)] mb-6" />
                    <p className="text-lg text-[color:var(--text-secondary)] max-w-2xl">
                        Thoughts, tutorials, and insights on software
                        engineering, web development, and the tech industry.
                    </p>
                </motion.div>
 
                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {posts.map((post, index) => (
                            <BlogCard
                                key={post.slug}
                                post={post}
                                index={index}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-[color:var(--text-secondary)]">
                            No blog posts yet. Check back soon!
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}