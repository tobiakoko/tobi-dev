import { Link, useParams } from 'react-router'
import { motion } from 'framer-motion'
import type { Route } from './+types/blog-post'
import { getPostBySlug } from '~/utils/blog'
 
export function meta({}: Route.MetaArgs) {
    return [
        { name: 'author', content: 'Daniel Akoko' },
        { title: 'Blog Post - Daniel Akoko' },
        {
            name: 'description',
            content: 'Read my latest thoughts on software engineering.',
        },
    ]
}
 
export default function BlogPost() {
    const { slug } = useParams<{ slug: string }>()
 
    const post = getPostBySlug(slug || '')
 
    if (!post) {
        return (
            <div className="min-h-screen py-32 px-6 md:px-12 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4 text-[color:var(--text-heading)]">
                        Post Not Found
                    </h1>
                    <p className="text-[color:var(--text-secondary)] mb-6">
                        The blog post you're looking for doesn't exist.
                    </p>
                    <Link
                        to="/blog"
                        className="inline-flex items-center text-[color:var(--accent)] hover:underline"
                    >
                        ← Back to Blog
                    </Link>
                </div>
            </div>
        )
    }
 
    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
 
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="min-h-screen py-32 px-6 md:px-12"
        >
            <div className="max-w-3xl mx-auto">
                {/* Back Button */}
                <Link
                    to="/blog"
                    className="inline-flex items-center text-[color:var(--text-secondary)] hover:text-[color:var(--accent)] mb-8 transition-colors"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                    </svg>
                    Back to Blog
                </Link>
 
                {/* Article Header */}
                <header className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-[color:var(--text-heading)]">
                            {post.title}
                        </h1>
 
                        <div className="flex flex-wrap items-center gap-4 text-sm text-[color:var(--text-secondary)]">
                            <time dateTime={post.date}>{formattedDate}</time>
                            <span>•</span>
                            <span>{post.readTime}</span>
                            <span>•</span>
                            <span className="text-[color:var(--accent)]">
                                {post.category}
                            </span>
                        </div>
                    </motion.div>
                </header>
 
                {/* Article Content */}
                <motion.article
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="prose prose-lg max-w-none prose-headings:text-[color:var(--text-heading)] prose-p:text-[color:var(--text-secondary)] prose-a:text-[color:var(--accent)] prose-strong:text-[color:var(--text-primary)] prose-code:text-[color:var(--accent)] prose-pre:bg-[color:var(--card)] prose-pre:border prose-pre:border-[color:var(--border)]"
                    dangerouslySetInnerHTML={{ __html: post.content || '' }}
                />
 
                {/* Author Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-12 pt-8 border-t border-[color:var(--border)]"
                >
                    <div className="flex items-start gap-4">
                        <div className="w-16 h-16 rounded-full bg-[color:var(--badge-bg)] flex-shrink-0" />
                        <div>
                            <h3 className="text-lg font-bold mb-2 text-[color:var(--text-heading)]">
                                {post.author}
                            </h3>
                            <p className="text-[color:var(--text-secondary)] text-sm">
                                Software Engineer specializing in building
                                scalable web applications with React,
                                TypeScript, and Node.js.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}