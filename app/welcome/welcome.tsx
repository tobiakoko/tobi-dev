import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Link } from 'react-router'
import React, { useState, useEffect, useRef } from 'react'
import SubHeading from '~/components/SubHeading'
import Badge, { SecondaryBadge } from '~/components/Badge'
import { CTAButton } from '~/components/Button'
import LogosCarousel from '~/components/StackCarousel'
import CTA from '~/components/CTA'
import { contactInfo } from './about'



export function Welcome() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.7,
                ease: [0.6, 0.05, 0.01, 0.9],
            },
        }),
    }

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: (i: number) => ({
            opacity: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.7,
            },
        }),
    }

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    }

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <motion.div
                className="min-h-screen flex items-center px-6 md:px-10 pt-32 pb-16"
                initial="hidden"
                animate={isLoaded ? 'visible' : 'hidden'}
                variants={staggerContainer}
            >
                <div className="max-w-6xl mx-auto w-full">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <motion.span
                                className="inline-block py-1 px-3 rounded-full bg-[rgb(245, 245, 253)] [box-shadow:inset_0_0_12px_#8092ff4d] border border-[color:var(--badge-border)] text-[color:var(--badge-text)] font-light font-futura text-sm mb-6"
                                custom={0.3}
                                variants={fadeInUp}
                            >
                                Software Engineer
                            </motion.span>

                            <motion.p
                                className="text-md md:text-md font-light tracking-tight text-[color:var(--secondary-foreground)] mb-2 max-w-2xl"
                                custom={0.5}
                                variants={fadeInUp}
                            >
                                Hi there, I&apos;m
                            </motion.p>

                            <motion.h1
                                className="text-4xl md:text-6xl font-futura font-bold mb-4 tracking-tight text--[color:var(--primary-foreground)]"
                                custom={0.7}
                                variants={fadeInUp}
                            >
                                Daniel Akoko,
                            </motion.h1>

                            <motion.p
                                className="text-md md:text-md font-light tracking-tight text-[color:var(--secondary-foreground)] mb-8 max-w-prose"
                                custom={0.9}
                                variants={fadeInUp}
                            >
                                a <strong className="text-[#000]">Full-Stack Software Developer</strong>, and <strong className="text-[#000]">Program Manager</strong> 
                                {' '}based in Tampa Florida. I&apos;m a dedicated problem&mdash;solver who thrives on learning and building.
                            </motion.p>

                            <motion.div
                                className="flex flex-wrap gap-4"
                                custom={1.0}
                                variants={fadeInUp}
                            >
                                <Link
                                    to="/about"
                                    className="px-6 py-3 rounded-lg bg-[color:var(--secondary)] text-[color:var(--accent-foreground)] font-medium font-futura transition-all duration-300 hover:bg-[rgb(186,195,255)] hover:shadow-lg"
                                >
                                    About Me &rarr;
                                </Link>
                                <Link
                                    to="/contact"
                                    className="px-6 py-3 rounded-lg border border-[color:var(--accent-foreground)] text-[color:var(--accent-foreground)] font-medium font-futura transition-all duration-300 hover:bg-[rgb(186,195,255)]/50"
                                >
                                    Message Me
                                </Link>
                            </motion.div>
                        </div>

                        <motion.div
                            custom={1.3}
                            variants={fadeIn}
                            className="hidden md:block"
                        >
                                {/* Overlay for better content visibility */}
                                <div className="relative bg-[rgba(245,245,253,0.5)] backdrop-blur-sm rounded-2xl [box-shadow:inset_0_0_302px_#8092ff4d] border border-[color:var(--badge-border)] text-[color:var(--badge-text)] font-light font-futura text-sm overflow-hidden">
                                    <svg
                                        className="absolute -z-10 top-0 right-0 opacity-70"
                                        width="404"
                                        height="404"
                                        fill="none"
                                        viewBox="0 0 404 404"
                                    >
                                        <defs>
                                            <pattern
                                                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                                                x="0"
                                                y="0"
                                                width="20"
                                                height="20"
                                                patternUnits="userSpaceOnUse"
                                            >
                                                <rect
                                                    x="0"
                                                    y="0"
                                                    width="4"
                                                    height="4"
                                                    className=""
                                                    fill="currentColor"
                                                />
                                            </pattern>
                                        </defs>
                                        <rect
                                            width="404"
                                            height="404"
                                            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
                                        />
                                    </svg>
                                    <div className="p-6 md:p-8">
                                        <Badge badge="Tech Stack" />
                                        <div className="flex flex-col gap-4">
                                            <div className="rounded-lg overflow-hidden bg-[color:var(--secondary)]/60 p-6 backdrop-blur-md">
                                                <LogosCarousel />
                                            </div>
                                            <div className="rounded-lg overflow-hidden bg-[color:var(--secondary)]/60 p-6 backdrop-blur-md max-w-prose">
                                                <p className="text-lg font-semibold font-futura mb-2">Tech stack I&apos;m familiar with</p>
                                                <p className="text-sm font-semibold">I work a lot in the JavaScript ecosystem, however, I am eager to learn new technologies</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Featured Projects Section */}
            <ProjectSection />

            {/* Technical Skills Section */}

            {/* Blog Section 
            <BlogSection /> */}

            {/* Call to Action */}
            <CTA />
        </div>
    )
}

export function ProjectSection() {
    return (
        <section id="projectx" className="py-24 px-6 md:px-10 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <SubHeading
                        title="Featured Projects"
                        description="A selection of my latest work crafted with attention to detail and modern technologies."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {[
                            {
                                title: 'Church Website',
                                description:
                                    'DLBC Tampa church website built with Next.js and Tailwind CSS',
                                tags: ['Nextjs', 'Tailwind CSS'],
                                link: '#'
                            },
                            {
                                title: 'FreeWillPay Dashboard',
                                description:
                                    'Dashboard for managing payments and transactions',
                                tags: ['TypeScript', 'React', 'Java', 'Tailwind CSS'],
                                link: '#'
                            },
                            {
                                title: 'Ask Kumuyi Ai Interface',
                                description:
                                    'Chatbot trained on the teachings of Pastor Dr. W.F. Kumuyi',
                                tags: ['jQuery', 'BootStrap', 'Python', 'Azure'],
                                link: 'https://askkumuyi.ai/'
                            },
                        ].map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true, amount: 0.3 }}
                                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                                </div>
                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <SecondaryBadge
                                                key={tag}
                                                badge={tag}
                                            />
                                        ))}
                                    </div>
                                    <h3 className="text-lg font-semibold font-futura mb-2 text-[color:var(--primary-foreground)]">
                                        {project.title}
                                    </h3>
                                    <p className="text-[color:var(--secondary-foreground)] mb-4 text-sm">
                                        {project.description}
                                    </p>
                                    <Link
                                        to={project.link}
                                        className="text-[color:var(--accent-foreground)] text-sm font-medium inline-flex items-center hover:underline"
                                    >
                                        Link
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
                    {/*<CTAButton src="/projects" label="View All Projects" />*/}
                </div>
            </section>
    );
}

export function BlogSection() {
    return (
        <section id="blogx" className="py-24 px-6 md:px-10">
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
                    <CTAButton src="/blog" label="View All Posts" />
                </div>
            </section>

    );
}

export function TechnicalSkills() {
    return (
        <section className="py-24 px-6 md:px-10">
                <div className="max-w-6xl mx-auto">
                    <SubHeading
                        title="Technical Skills"
                        description="My expertise in modern web technologies and development tools."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Languages & Frameworks',
                                icon: 'code',
                                skills: [
                                    'React.js',
                                    'Nextjs',
                                    'Vue.js',
                                    'JavaScript (ES6+)',
                                    'TypeScript',
                                    'Java',
                                    'SQL',
                                    'Python',
                                    'HTML5 & CSS3',
                                    'Sass/SCSS',
                                ],
                            },
                            {
                                title: 'Tools & Libraries',
                                icon: 'tools',
                                skills: [
                                    'Redux',
                                    'Webpack',
                                    'Vite',
                                    'Jest',
                                    'Tailwind CSS',
                                    'Framer Motion',
                                ],
                            },
                            {
                                title: 'Other',
                                icon: 'plus',
                                skills: [
                                    'Git/GitHub',
                                    'RESTful APIs',
                                    'GraphQL',
                                    'Responsive Design',
                                    'Accessibility',
                                    'Performance Optimization',
                                ],
                            },
                        ].map((category, index) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true, amount: 0.3 }}
                                className="bg-gray-50 rounded-xl p-8 border border-gray-100"
                            >
                                <h3 className="text-lg font-semibold mb-6 text-[color:var(--accent-foreground)]">
                                    {category.title}
                                </h3>
                                <ul className="space-y-3">
                                    {category.skills.map((skill) => (
                                        <li
                                            key={skill}
                                            className="flex items-center py-2 border-b border-gray-200 last:border-b-0"
                                        >
                                            <svg
                                                className="w-4 h-4 mr-3 text-[color:var(--accent-foreground)]"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span className="text-sm text-[color:var(--secondary-foreground)] font-futura">
                                                {skill}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
    );
}

export function CallToAction() {
    return (
        <section className="py-24 px-6 md:px-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="max-w-5xl mx-auto bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl overflow-hidden shadow-xl"
                >
                    <div className="relative px-8 md:px-12 py-16 md:py-20">
                        <div className="absolute top-0 right-0 -mt-20 -mr-20 opacity-20">
                            <svg
                                width="404"
                                height="404"
                                fill="none"
                                viewBox="0 0 404 404"
                            >
                                <defs>
                                    <pattern
                                        id="pattern-circles"
                                        x="0"
                                        y="0"
                                        width="20"
                                        height="20"
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <circle
                                            cx="10"
                                            cy="10"
                                            r="8"
                                            className="text-white"
                                            fill="currentColor"
                                        />
                                    </pattern>
                                </defs>
                                <rect
                                    width="404"
                                    height="404"
                                    fill="url(#pattern-circles)"
                                />
                            </svg>
                        </div>

                        <div className="relative text-center md:text-left md:flex md:items-center md:justify-between">
                            <div className="mb-8 md:mb-0 md:max-w-2xl font-mono">
                                <h2 className="text-4xl md:text-5xl uppercase font-bold mb-4 text-white">
                                    Let's work together
                                </h2>
                                <p className="text-blue-100 text-lg md:text-sm">
                                    Have a project in mind? I'd love to hear
                                    about it!
                                </p>
                            </div>
                            <Link
                                to="/contact"
                                className="inline-block px-8 py-4 rounded-lg bg-white text-blue-600 text-xs font-medium transition-all duration-300 hover:bg-blue-200 hover:shadow-lg text-center"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>
    );
}