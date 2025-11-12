import { motion } from 'framer-motion'
import { Link } from 'react-router'
import SubHeading from '~/components/SubHeading'
import { SecondaryBadge } from '~/components/Badge'
import { CTAButton } from '~/components/Button'
import { blogPosts, type BlogPost } from '~/data/blogPosts'

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-[color:var(--border)]"
        >
            <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                    <SecondaryBadge badge={post.date} />
                    <SecondaryBadge badge={post.readTime} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[color:var(--primary-foreground)] group-hover:text-[color:var(--accent)] transition-colors">
                    {post.title}
                </h3>
                <p className="text-sm text-[color:var(--text-secondary)] mb-4 leading-relaxed">
                    {post.excerpt}
                </p>
                <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-[color:var(--accent)] font-semibold hover:text-[color:var(--accent-foreground)] transition-colors"
                >
                    Read More
                    <svg
                        className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
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
        </motion.div>
    )
}

export function BlogSection() {
    return (
        <section id="blog" className="py-24 px-6 md:px-10">
            <div className="max-w-6xl mx-auto">
                <SubHeading
                    title="Latest from the Blog"
                    description="Thoughts, insights, and tutorials on frontend development."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {blogPosts.map((post, index) => (
                        <BlogCard key={post.id} post={post} index={index} />
                    ))}
                </div>
                <CTAButton src="/blog" label="View All Posts" />
            </div>
        </section>
    )
}
