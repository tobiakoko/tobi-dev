import { useParams, Link } from 'react-router'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { SecondaryBadge } from '~/components/Badge'

export type BlogPostData = {
    title: string
    date: string
    author: string
    category: string
    readTime: string
    content: string | TrustedHTML
}

//export type BlogPostsMap = Record<string, BlogPostData>

// Mock blog post data - would come from an API or CMS in production
const blogPosts : Record<string, BlogPostData> = {
    '1': {
        title: 'What was your win this week?',
        date: 'April 12, 2025',
        author: 'Daniel Akoko',
        category: 'React',
        readTime: '8 min read',
        content: `
      <p class="mb-4 italic">System adapted as a result of inspiration from Jess Lee.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">What was your win this week?</h2>
      <p class="mb-4">Looking back on your week -- what was something you're proud of?</p>
      <p class="mb-4">All wins count -- big or small</p>
      <p class="mb-4">Examples of 'wins' include:</p>
      <ul class="list-disc ml-6 mb-6">
        <li class="mb-2">Getting a promotion!</li>
        <li class="mb-2">Starting a new project</li>
        <li class="mb-2">Fixing a tricky bug</li>
        <li class="mb-2">Cleaning your house...or whatever else that may spark joy</li>
      </ul>
      
      <p class="italic">Happy winning y'all!</p>`,
    },
    '2': {
        title: 'Hello World!',
        date: 'March 28, 2025',
        author: 'Daniel Akoko',
        category: 'Performance',
        readTime: '8 min read',
        content: `
      <p class="mb-4 italic">I wonder if in a different time continum, they write 'howdy universe!'. I promise, that legit sounded better in my head.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Hello World!</h2>
      <p class="mb-4">I wonder if in a different time continum, they write 'howdy universe!'. I promise, that legit sounded better in my head.</p>
      <p class="mb-4">I wonder if in a different time continum, they write 'howdy universe!'. I promise, that legit sounded better in my head.</p>
      <p class="mb-4">I wonder if in a different time continum, they write 'howdy universe!'. I promise, that legit sounded better in my head.</p>
      <p class="mb-4">I wonder if in a different time continum, they write 'howdy universe!'. I promise, that legit sounded better in my head.</p>
      <p class="mb-4">So, this is the game plan</p>
      <ol class="list-disc ml-6 mb-6">
        <li class="mb-2">Do thing A</li>
        <li class="mb-2">Do thing B</li>
        <li class="mb-2">Do thing C</li>
      </ol>
      
      <p class="mb-4">I wonder if in a different time continum, they write 'howdy universe!'. I promise, that legit sounded better in my head.</p>
      <p class="mb-4">I wonder if in a different time continum, they write 'howdy universe!'. I promise, that legit sounded better in my head.</p>
      <p class="mb-4">Load components only when needed:</p>
      
      <p class="mb-4">I know, i know. I hear the dissenting voices saying that this is too ambitious but, you can't fault a man from being aspirational can you?</p>
      
      <p class="mb-4">Don't worry, it's a journey and we'll reflect again in better times!</p>
      
      <p class="italic">Happy winning y'all!</p>`,
    },
}

export function BlogPosts() {
    const { id } = useParams<{ id: string }>()
    const [post, setPost] = useState<BlogPostData | undefined>(undefined)

    useEffect(() => {
        // Simulate API fetch with a small delay
        const fetchPost = async () => {
            if (id && id in blogPosts) {
                setPost(blogPosts[id])
            }
        }

        fetchPost()
        window.scrollTo(0, 0)
    }, [id])

    if (!post) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] p-4">
                <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
                <p className="mb-6 text-gray-600">
                    The blog post you're looking for doesn't exist or is still
                    loading.
                </p>
                <Link
                    to="/blog"
                    className="text-[color:var(--accent-foreground)] hover:text-blue-600 font-medium"
                >
                    ← Back to Blog
                </Link>
            </div>
        )
    }

    // Simplified and more consistent tags
    const tags = ['React', 'Frontend', 'JavaScript']

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto px-4 py-32"
        >
            {/* Back Button */}
            <Link
                to="/blog"
                className="inline-flex items-center text-[color:var(--secondary-foreground)] hover:text-[color:var(--accent-foreground)] mb-6 transition-colors"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
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

            {/* Header Section */}
            <header className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                    {post.title}
                </h1>

                <div className="flex items-center mb-6 font-futura text-sm">
                    {/* AVATAR HERE */}
                    <div className="size-10 rounded-full bg-gray-200 flex-shrink-0"></div>
                    <div className="ml-4">
                        <p className="font-semibold text-base">{post.author}</p>
                        <div className="flex flex-wrap text-[color:var(--secondary-foreground)] items-center">
                            <span>{post.date}</span>
                            <span className="mx-2">•</span>
                            <span>{post.readTime}</span>
                            <span className="mx-2">•</span>
                            <SecondaryBadge badge={post.category} />
                            {/*<span className="text-[color:var(--accent-foreground)]">{post.category}</span>*/}
                        </div>
                    </div>
                </div>
            </header>

            {/* Content */}
            <motion.article
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="prose prose-lg max-w-none mb-12"
                dangerouslySetInnerHTML={{ __html: post.content as string }}
            />

            {/* Tags */}
            <div className="mb-10">
                <h3 className="text-lg font-medium mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Share Section */}
            <div className="border-t border-b border-gray-200 py-6 mb-10">
                <h3 className="text-lg font-medium mb-3">Share this article</h3>
                <div className="flex gap-3">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                        Twitter
                    </button>
                    <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                        LinkedIn
                    </button>
                    <button className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                        Copy Link
                    </button>
                </div>
            </div>

            {/* Author Bio */}
            <div className="bg-gray-50 rounded-lg p-6 mb-10">
                <div className="flex items-start">
                    <div className="w-16 h-16 rounded-full bg-gray-200 mr-4 flex-shrink-0"></div>
                    <div>
                        <h3 className="text-lg font-bold mb-2">
                            {post.author}
                        </h3>
                        <p className="text-[color:var(--secondary-foreground)] mb-3">
                            Front-End Software Engineer passionate about
                            creating intuitive and engaging user interfaces.
                            Sharing insights from my journey in web development.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="text-[color:var(--accent-foreground)] hover:text-blue-600 text-sm font-medium"
                            >
                                Twitter
                            </a>
                            <a
                                href="#"
                                className="text-[color:var(--accent-foreground)] hover:text-blue-600 text-sm font-medium"
                            >
                                GitHub
                            </a>
                            <a
                                href="#"
                                className="text-[color:var(--accent-foreground)] hover:text-blue-600 text-sm font-medium"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Posts */}
            <div>
                <h3 className="text-xl font-bold mb-6">Related Posts</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-lg mb-2">
                            TypeScript Best Practices for React Developers
                        </h4>
                        <p className="text-[color:var(--secondary-foreground)] text-sm mb-3">
                            January 22, 2025
                        </p>
                        <Link
                            to="/blog/4"
                            className="text-[color:var(--accent-foreground)] font-medium hover:underline text-sm"
                        >
                            Read Article →
                        </Link>
                    </div>
                    <div className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-lg mb-2">
                            State Management Solutions in 2025: Beyond Redux
                        </h4>
                        <p className="text-[color:var(--secondary-foreground)] text-sm mb-3">
                            November 18, 2024
                        </p>
                        <Link
                            to="/blog/6"
                            className="text-[color:var(--accent-foreground)] font-medium hover:underline text-sm"
                        >
                            Read Article →
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
