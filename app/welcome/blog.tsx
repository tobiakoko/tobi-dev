import { useState } from 'react'
import { Link } from 'react-router'
import { motion } from 'framer-motion'
import Badge, { SecondaryBadge } from '~/components/Badge'
import FilterButtons from '~/components/Filter'
import CTA from '~/components/CTA'
import { CTAButton } from '~/components/Button'
import SubHeading from '~/components/SubHeading'

type BlogCategory =
    | 'all'
    | 'react'
    | 'performance'
    | 'accessibility'
    | 'typescript'
    | 'css'
    | string

export function Blogs() {
    const [filter, setFilter] = useState<BlogCategory>('all')

    const blogPosts = [
        {
            id: 1,
            title: 'What was your win this week?',
            excerpt:
                "System adapted as a result of inspiration from Jess Lee. Looking back on your week -- what was something you're proud of?",
            date: 'April 12, 2025',
            category: 'react',
            readTime: '6 min read',
            featured: true,
        },
        {
            id: 2,
            title: 'Hello World!',
            excerpt:
                'I wonder if in a different time continum, they write `howdy universe!`. I promise, that legit sounded better in my head',
            date: 'March 28, 2025',
            category: 'performance',
            readTime: '8 min read',
            featured: true,
        },
        {
            id: 3,
            title: 'Building Accessible Web Applications: A Comprehensive Guide',
            excerpt:
                'Essential strategies for creating inclusive web experiences that work for all users regardless of abilities.',
            date: 'February 15, 2025',
            category: 'accessibility',
            readTime: '12 min read',
            featured: false,
        },
        {
            id: 4,
            title: 'TypeScript Best Practices for React Developers',
            excerpt:
                'Leveraging TypeScript to create type-safe, maintainable React applications with fewer bugs.',
            date: 'January 22, 2025',
            category: 'typescript',
            readTime: '7 min read',
            featured: false,
        },
        {
            id: 5,
            title: 'CSS Grid vs Flexbox: When to Use Which',
            excerpt:
                'A detailed comparison of two powerful CSS layout systems and guidelines on choosing the right one for your project.',
            date: 'December 10, 2024',
            category: 'css',
            readTime: '9 min read',
            featured: false,
        },
        {
            id: 6,
            title: 'State Management Solutions in 2025: Beyond Redux',
            excerpt:
                'Exploring modern alternatives to Redux for state management in React applications.',
            date: 'November 18, 2024',
            category: 'react',
            readTime: '11 min read',
            featured: false,
        },
    ]

    // const blogCategories = []
    const categories = [
        { value: 'all', label: 'All Posts' },
        { value: 'react', label: 'React' },
        { value: 'performance', label: 'Performance' },
        { value: 'accessibility', label: 'Accessibility' },
        { value: 'typescript', label: 'TypeScript' },
        { value: 'css', label: 'CSS' },
    ]

    const filteredPosts =
        filter === 'all'
            ? blogPosts
            : blogPosts.filter((post) => post.category === filter)

    return (
        <div className="overflow-hidden pt-32 pb-24 px-6 md:px-10 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <Badge badge={'Blog'} />
                <p className="text-xl md:text-md font-light tracking-tight text-gray-600 mb-8 max-w-2xl mx-auto">
                    Thoughts, tutorials, and insights on front-end development.
                </p>
            </motion.div>

            {/*<FilterButtons
                activeFilter={filter}
                onFilterChange={(value: string) => setFilter(value as BlogCategory)}
                options={categories.map((category) => ({
                    value: category.value,
                    label: category.label,
                }))}
                className="mb-8"
            />*/}

            {/*<div className="mb-[var(--spacing-xl)]">
                {filter === 'all' && (
                    <>
                        <h2 className="text-center text-lg mb-[var(--spacing-md)]">
                            Featured Posts
                        </h2>
                        <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-[var(--spacing-xl)]">
                            {blogPosts
                                .filter((post) => post.featured)
                                .map((post) => (
                                    <motion.div
                                        key={post.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="bg-[color:var(--bg-light)] rounded-[var(--border-radius)] overflow-hidden shadow-[var(--shadow-md)] transition-[var(--transition)] hover:translate-y-[-5px] hover:shadow-[var(--shadow-lg)]"
                                    >
                                        <div className="h-[200px] bg-[#f2f2f2] placeholder"></div>
                                        <div className="pt-[var(--spacing-sm)] pr-[var(--spacing-md)] pl-[var(--spacing-md)] flex flex-wrap gap-8 text-[color:var(--text-secondary)] pb-0">
                                            <span className="text-xs post-date">
                                                {post.date}
                                            </span>
                                            <span className="text-xs post-category">
                                                {
                                                    categories.find(
                                                        (c) =>
                                                            c.value ===
                                                            post.category
                                                    ).label
                                                }
                                            </span>
                                            <span className="text-xs text-[color:var(--text-secondary)]">
                                                {post.readTime}
                                            </span>
                                        </div>
                                        <h3 className="pt-[var(--spacing-xs)] pr-[var(--spacing-md)] pb-[var(--spacing-xs)] pl-[var(--spacing-md)] text-lg">
                                            {post.title}
                                        </h3>
                                        <p className="pr-[var(--spacing-md)] pl-[var(--spacing-md)] text-xs text-[color:var(--text-secondary)] mb-[var(--spacing-sm)] py-0">
                                            {post.excerpt}
                                        </p>
                                        <Link
                                            to={`/blog/${post.id}`}
                                            className="text-sm mr-[var(--spacing-md)] mb-[var(--spacing-md)] ml-[var(--spacing-md)] mt-0"
                                        >
                                            Read Article
                                        </Link>
                                    </motion.div>
                                ))}
                        </div>
                    </>
                )}
            </div>*/}

            <div className="blog-posts-section">
                {/*<h2 className="text-center text-lg mb-[var(--spacing-md)]">
                    {filter === 'all'
                        ? 'All Posts'
                        : `Posts on ${categories.find((c) => c.value === filter).label}`}
                </h2>*/}
                <section className="py-24 px-6 md:px-10">
                                <div className="max-w-6xl mx-auto">
                                    <SubHeading
                                        title="Latest from the Blog"
                                        description="Thoughts, insights, and tutorials on frontend development."
                                    />
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {[
                                            {
                                                date: 'April 12, 2025',
                                                title: 'What was your win this week?',
                                                excerpt:
                                                    "System adapted as a result of inspiration from Jess Lee. Looking back on your week -- what was something you're proud of?",
                                                id: '1',
                                                readTime: '6 min read',
                                            },
                                            {
                                                date: 'March 28, 2025',
                                                title: 'Hello World!',
                                                excerpt:
                                                    'I wonder if in a different time continum, they write `howdy universe!`. I promise, that legit sounded better in my head',
                                                id: '2',
                                                readTime: '8 min read',
                                            },
                                        ].map((post, index) => (
                                            <motion.div
                                                key={post.id}
                                                initial={{ opacity: 0, y: 30 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{
                                                    duration: 0.5,
                                                    delay: index * 0.1,
                                                }}
                                                viewport={{ once: true, amount: 0.3 }}
                                                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
                                            >
                                                <div className="p-8">
                                                    <div className="flex items-center justify-between mb-4">
                                                        <SecondaryBadge badge={post.date} />
                                                        <SecondaryBadge badge={post.readTime} />
                                                    </div>
                                                    <h3 className="text-lg font-semibold font-futura mb-3 text-[color:var(--primary-foreground)] group-hover:text-[color:var(--accent-foreground)] transition-colors duration-300">
                                                        {post.title}
                                                    </h3>
                                                    <p className="text-sm text-[color:var(--secondary-foreground)] mb-4">
                                                        {post.excerpt}
                                                    </p>
                                                    <Link
                                                        to={`/blog/${post.id}`}
                                                        className="inline-flex items-center text-[color:var(--accent-foreground)] font-medium hover:underline"
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
                                        ))}
                                    </div>
                                    {/*<CTAButton src="/blog" label="View All Posts" />*/}
                                </div>
                            </section>
                {/*            
                <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[var(--spacing-md)]">
                    {filteredPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-[color:var(--bg-light)] rounded-[var(--border-radius)] pt-[var(--spacing-md)] pr-[var(--spacing-md)] pb-[var(--spacing-sm)] pl-[var(--spacing-md)] shadow-[var(--shadow-sm)] transition-[var(--transition)] hover:shadow-[var(--shadow-md)]"
                        >
                            <div className="pt-[var(--spacing-sm)] pr-[var(--spacing-md)] flex flex-wrap gap-4 text-[color:var(--text-secondary)] pb-0">
                                <span className="text-xs post-date">
                                    {post.date}
                                </span>
                                <span className="text-xs post-category">
                                    {/*
                                        categories.find(
                                            (c) => c.value === post.category
                                        ).label
                                    *}
                                </span>
                            </div>
                            <h3 className="mt-[var(--spacing-sm)] mb-[var(--spacing-sm)] text-lg mx-0">
                                {post.title}
                            </h3>
                            <p className="text-sm text-[color:var(--text-secondary)] mb-[var(--spacing-sm)]">
                                {post.excerpt}
                            </p>
                            <div className="flex justify-between mt-[var(--spacing-xs)] pt-[var(--spacing-sm)] border-t-[#e0e0e0] border-t border-solid">
                                <span className="text-xs  text-[color:var(--text-secondary)]">
                                    {post.readTime}
                                </span>
                                <Link
                                    to={`/blog/${post.id}`}
                                    className="text-xs mr-[var(--spacing-md)] ml-[var(--spacing-md)] mt-0"
                                >
                                    Read Article
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>*/}
            </div>

            <CTA />
            
        </div>
    )
}

/*

import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  featured: boolean;
};

type Category = {
  id: string;
  name: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Evolution of React Hooks in Modern Applications",
    excerpt:
      "Exploring how React Hooks have transformed component design and state management in React applications.",
    date: "April 12, 2025",
    category: "react",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Optimizing Performance in Large-Scale React Applications",
    excerpt:
      "Techniques and best practices for maintaining high performance in complex React projects with multiple components.",
    date: "March 28, 2025",
    category: "performance",
    readTime: "10 min read",
    featured: true,
  },
  {
    id: 3,
    title: "Building Accessible Web Applications: A Comprehensive Guide",
    excerpt:
      "Essential strategies for creating inclusive web experiences that work for all users regardless of abilities.",
    date: "February 15, 2025",
    category: "accessibility",
    readTime: "12 min read",
    featured: false,
  },
  {
    id: 4,
    title: "TypeScript Best Practices for React Developers",
    excerpt:
      "Leveraging TypeScript to create type-safe, maintainable React applications with fewer bugs.",
    date: "January 22, 2025",
    category: "typescript",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 5,
    title: "CSS Grid vs Flexbox: When to Use Which",
    excerpt:
      "A detailed comparison of two powerful CSS layout systems and guidelines on choosing the right one for your project.",
    date: "December 10, 2024",
    category: "css",
    readTime: "9 min read",
    featured: false,
  },
  {
    id: 6,
    title: "State Management Solutions in 2025: Beyond Redux",
    excerpt:
      "Exploring modern alternatives to Redux for state management in React applications.",
    date: "November 18, 2024",
    category: "react",
    readTime: "11 min read",
    featured: false,
  },
];

const categories: Category[] = [
  { id: "all", name: "All Posts" },
  { id: "react", name: "React" },
  { id: "performance", name: "Performance" },
  { id: "accessibility", name: "Accessibility" },
  { id: "typescript", name: "TypeScript" },
  { id: "css", name: "CSS" },
];

export const Blogs = () => {
  const [filter, setFilter] = useState<string>("all");

  const filteredPosts =
    filter === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === filter);

  return (
    <div className="max-w-6xl px-6 mx-auto py-16">
      {/* Header }
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-semibold tracking-tight">Blog</h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mt-4">
          Thoughts, tutorials, and insights on front-end development.
        </p>
      </motion.div>

      {/* Filter Buttons }
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-full border text-sm transition-all ${
              filter === category.id
                ? "bg-black text-white"
                : "bg-white text-black border-gray-300 hover:bg-gray-100"
            }`}
            onClick={() => setFilter(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Featured Section *}
      {filter === "all" && (
        <section className="mb-16">
          <h2 className="text-center text-2xl font-medium mb-8">
            Featured Posts
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts
              .filter((post) => post.featured)
              .map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-1"
                >
                  <div className="h-40 bg-gray-100 rounded-t-2xl" />
                  <div className="p-6 space-y-3">
                    <div className="text-sm text-muted-foreground flex flex-wrap gap-4">
                      <span>{post.date}</span>
                      <span>
                        {
                          categories.find((c) => c.id === post.category)?.name
                        }
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold">{post.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-sm text-blue-600 hover:underline inline-block pt-2"
                    >
                      Read Article
                    </Link>
                  </div>
                </motion.div>
              ))}
          </div>
        </section>
      )}

      {/* All or Filtered Posts *}
      <section>
        <h2 className="text-center text-2xl font-medium mb-8">
          {filter === "all"
            ? "All Posts"
            : `Posts on ${
                categories.find((c) => c.id === filter)?.name ?? ""
              }`}
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-transform p-6"
            >
              <div className="text-sm text-muted-foreground flex flex-wrap gap-4 mb-2">
                <span>{post.date}</span>
                <span>{categories.find((c) => c.id === post.category)?.name}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-muted-foreground">{post.excerpt}</p>
              <div className="flex justify-between items-center mt-4 pt-4 border-t">
                <span className="text-sm text-muted-foreground">
                  {post.readTime}
                </span>
                <Link
                  to={`/blog/${post.id}`}
                  className="text-sm text-blue-600 hover:underline"
                >
                  Read Article
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter *}
      <section className="mt-20 bg-gray-50 py-12 px-6 rounded-2xl text-center">
        <h2 className="text-2xl font-semibold mb-2">Subscribe to My Newsletter</h2>
        <p className="text-muted-foreground mb-6">
          Get the latest articles and insights delivered directly to your inbox.
        </p>
        <form className="flex flex-wrap gap-3 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 min-w-[250px] px-4 py-3 border border-gray-300 rounded-full"
            required
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
};
*/
