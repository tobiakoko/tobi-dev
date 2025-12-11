import { motion } from 'framer-motion'
import { Link } from 'react-router'
import Badge from '~/components/Badge'
import CTA from '~/components/CTA'
import SocialIcon from '~/components/Socials'
import SubHeading from '~/components/SubHeading'
import Tooltip from '~/components/Tootip'

export interface ContactInfo {
    email: string
    location: string
}

export const contactInfo: ContactInfo = {
    email: 'enquiries@tobiakoko.com',
    location: 'Dallas, Texas',
}

export const works = {
    afromericaEnt: "Built a comprehensive entertainment platform with real-time updates, secure authentication, and scalable cloud infrastructure. Enabled seamless content management, event ticketing, and artist promotion using Next.js, TypeScript, Tailwind CSS, and Supabase.",
    ronsBodyShop: "Developed a premium automotive service website featuring immersive animations and responsive design. Implemented smooth scroll interactions and dynamic service galleries with React, Vite, TypeScript, Tailwind CSS, GSAP, and Framer Motion for exceptional performance.",
    oseiPrempeh: "Delivered a professional legal services platform leveraging React Router v7 for fluid navigation and dynamic content delivery. Combined sophisticated UI/UX design with performance optimization to create an elegant, trustworthy client experience using TypeScript and Tailwind CSS.",
    dlbcTampa: "Architected a community-focused church platform integrating event management, multimedia sermon archives, and member engagement tools. Built for growth with intuitive content management and seamless mobile accessibility using Next.js and Tailwind CSS.",
    askKumuyi: "Engineered an intelligent conversational AI powered by Azure, delivering context-aware spiritual guidance through advanced natural language processing. Implemented sophisticated prompt engineering, vector-based knowledge retrieval, and enterprise-grade cloud deployment using Python, Azure AI, React, and REST API.",
    portfolio: "Designed and built a modern developer portfolio showcasing technical expertise through performant animations, responsive layouts, and clean architecture. Optimized for speed, accessibility, and visual impact using React Router v7, TypeScript, Tailwind CSS, and Vite.",
}

export function AboutMe() {
    // Animation variants
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

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    }

    type SocialType = 'github' | 'linkedin' | 'twitter';

    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/tobiakoko',
            icon: 'github' as SocialType,
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/daniel-akoko/',
            icon: 'linkedin' as SocialType,
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/',
            icon: 'twitter' as SocialType,
        },
    ]

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="pt-32 pb-24 px-6 md:px-10"
            >
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        custom={0}
                        variants={fadeInUp}
                    >
                        <Badge badge={'About Me'} />
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 tracking-tight text-[color:var(--text-heading)]">
                            Daniel Akoko
                        </h1>
                        <p className="text-xl md:text-md font-light tracking-tight text-[color:var(--text-secondary)] mb-8 max-w-2xl mx-auto">
                            Software Engineer | Full Stack Developer
                        </p>
                    </motion.div>

                    {/* About Content */}
                    <div className="grid md:grid-cols-3 gap-12 items-start">
                        {/* Sidebar Column */}
                        <motion.div
                            custom={1}
                            variants={fadeInUp}
                            className="md:col-span-1"
                        >
                            <div className="sticky top-8">
                                {/* Profile Card */}
                                <div className="bg-[color:var(--card)] border-2 border-[color:var(--accent)] rounded-2xl p-6 shadow-xl mb-6">
                                    <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-[color:var(--accent)]/20 to-[color:var(--card)] mb-6 border border-[color:var(--accent)]/30">
                                        <div className="relative w-full h-full flex items-center justify-center">
                                            {/*
                                            <img src={Image} alt="Daniel Akoko" className="w-full h-full object-cover object-center" />
                                            */}
                                            <div className="text-6xl font-bold text-[color:var(--accent)]">DA</div>
                                        </div>
                                    </div>

                                    {/* Quick Info */}
                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <svg className="w-4 h-4 text-[color:var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                </svg>
                                                <h3 className="text-xs font-semibold text-[color:var(--accent)] uppercase tracking-wider">
                                                    Based In
                                                </h3>
                                            </div>
                                            <p className="text-sm text-[color:var(--text-primary)] ml-6">
                                                {contactInfo.location}
                                            </p>
                                        </div>

                                        <div className="border-t border-[color:var(--border)] pt-4">
                                            <div className="flex items-center gap-2 mb-2">
                                                <svg className="w-4 h-4 text-[color:var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                                </svg>
                                                <h3 className="text-xs font-semibold text-[color:var(--accent)] uppercase tracking-wider">
                                                    Email
                                                </h3>
                                            </div>
                                            <a href={`mailto:${contactInfo.email}`} className="text-sm text-[color:var(--text-primary)] hover:text-[color:var(--accent)] transition-colors ml-6 break-all">
                                                {contactInfo.email}
                                            </a>
                                        </div>

                                        <div className="border-t border-[color:var(--border)] pt-4">
                                            <div className="flex items-center gap-2 mb-3">
                                                <svg className="w-4 h-4 text-[color:var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <h3 className="text-xs font-semibold text-[color:var(--accent)] uppercase tracking-wider">
                                                    Tech Stack
                                                </h3>
                                            </div>
                                            <div className="flex flex-wrap gap-2 ml-6">
                                                {['TypeScript', 'JavaScript', 'Python', 'Java'].map((lang) => (
                                                    <span key={lang} className="text-xs px-2.5 py-1 bg-[color:var(--badge-bg)] border border-[color:var(--accent)]/30 text-[color:var(--accent)] rounded-md font-medium">
                                                        {lang}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="border-t border-[color:var(--border)] pt-4">
                                            <div className="flex items-center gap-2 mb-3">
                                                <svg className="w-4 h-4 text-[color:var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                                </svg>
                                                <h3 className="text-xs font-semibold text-[color:var(--accent)] uppercase tracking-wider">
                                                    Socials
                                                </h3>
                                            </div>
                                            <div className="flex gap-3 ml-6">
                                                {socialLinks.map((link) => (
                                                    <SocialIcon
                                                        key={link.name}
                                                        name={link.name}
                                                        url={link.url}
                                                        icon={link.icon}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Availability Badge */}
                                <div className="bg-[color:var(--card)] border border-[color:var(--accent)]/30 rounded-xl p-4 text-center">
                                    <div className="flex items-center justify-center gap-2 mb-2">
                                        <div className="w-2 h-2 rounded-full bg-[color:var(--success)] animate-pulse"></div>
                                        <span className="text-xs font-semibold text-[color:var(--accent)] uppercase tracking-wider">
                                            Available for Work
                                        </span>
                                    </div>
                                    <p className="text-xs text-[color:var(--text-secondary)]">
                                        Open to new opportunities
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Content Column */}
                        <motion.div
                            custom={2}
                            variants={fadeInUp}
                            className="md:col-span-2 px-4 md:px-20"
                        >
                            <div className="prose max-w-prose text-sm/6 text-[color:var(--text-secondary)]">
                                <h2 className="text-3xl font-serif font-bold mb-6 text-[color:var(--text-heading)]">
                                    Professional Overview
                                </h2>

                                <p className="mb-4">
                                    I&apos;m a Full Stack Software Engineer based in Dallas, Texas, specializing in building high-performance,
                                    accessible web applications using modern technologies. With expertise spanning enterprise platforms, AI-powered
                                    solutions, and client-focused applications, I deliver scalable solutions that prioritize user experience and technical excellence.
                                </p>

                                <h3 className="text-xl font-serif font-semibold mb-4 mt-8 text-[color:var(--text-heading)]">
                                    Recent Projects
                                </h3>

                                <p className="mb-4">
                                    I&apos;ve successfully delivered diverse full-stack applications across multiple industries. Notable projects include {' '}
                                    <Link to="https://www.afromericaent.com/" target="_blank" className="tip decoration-double">
                                        <Tooltip content={works.afromericaEnt} className="decoration-double" position="top">Afromerica Entertainment</Tooltip>
                                    </Link>, a comprehensive platform featuring real-time updates and cloud infrastructure; {' '}
                                    <Link to="https://www.ronsbodyshop.net/" target="_blank" className="tip decoration-double">
                                        <Tooltip content={works.ronsBodyShop} className="decoration-double" position="top">Ron&apos;s Body Shop</Tooltip>
                                    </Link>, showcasing advanced animations and performance optimization; and {' '}
                                    <Link to="https://www.oseiprempeh.com/" target="_blank" className="tip decoration-double">
                                        <Tooltip content={works.oseiPrempeh} className="decoration-double" position="top">OseiPrempeh Law Firm</Tooltip>
                                    </Link>, demonstrating sophisticated UI/UX design.
                                </p>

                                <p className="mb-4">
                                    My work extends to community platforms like {' '}
                                    <Link to="https://www.dlbctampa.org/" target="_blank" className="tip decoration-double">
                                        <Tooltip content={works.dlbcTampa} className="decoration-double" position="top">DLBC Tampa</Tooltip>
                                    </Link>, integrating event management and multimedia capabilities, and AI-powered solutions such as {' '}
                                    <Link to="https://askkumuyi.ai/" target="_blank" className="tip">
                                        <Tooltip content={works.askKumuyi} className="decoration-double" position="top">Ask Kumuyi AI</Tooltip>
                                    </Link>, featuring enterprise-grade Azure deployment and advanced natural language processing. My {' '}
                                    <Link to="https://tobiakoko.com" target="_blank" className="tip">
                                        <Tooltip content={works.portfolio} className="decoration-double" position="top">portfolio website</Tooltip>
                                    </Link> itself demonstrates my commitment to clean architecture and optimal performance.
                                </p>

                                <h3 className="text-xl font-serif font-semibold mb-4 mt-8 text-[color:var(--text-heading)]">
                                    Education & Background
                                </h3>

                                <p className="mb-4">
                                    I hold a Bachelor of Science in Computer Science from <Link to="https://www.wgu.edu/" target='_blank' className="tip">Western Governors University</Link>,
                                    providing comprehensive knowledge in software engineering principles, data structures, algorithms, computer architecture,
                                    operating systems, and artificial intelligence. My interdisciplinary education includes a Bachelor of General Studies in
                                    Criminology from the <Link to="https://www.usf.edu/" target='_blank' className="tip">University of South Florida</Link> and
                                    an Associate of Science in Electrical Engineering from the {' '}
                                    <Link to="https://ccbcmd.edu/" target='_blank' className="tip">Community College of Baltimore County</Link>.
                                </p>

                                <p className="mb-4">
                                    This diverse academic foundation, combined with professional experience in hospitality management, has shaped my
                                    approach to software development. I bring exceptional attention to detail, strong collaboration skills, and the ability
                                    to deliver high-quality solutions under tight deadlines—all while maintaining a user-centric focus that ensures
                                    applications are both technically sound and intuitively designed.
                                </p>

                                <h3 className="text-xl font-serif font-semibold mb-4 mt-8 text-[color:var(--text-heading)]">
                                    Technical Expertise
                                </h3>

                                <p className="mb-4">
                                    My expertise centers on building performant, accessible web applications using React, TypeScript, and modern JavaScript
                                    frameworks. I specialize in frontend architecture, state management, performance optimization, and responsive design,
                                    with strong proficiency in Next.js, React Router, Tailwind CSS, and animation libraries like Framer Motion and GSAP.
                                    My backend capabilities include Node.js, REST API development, and database design with MySQL and Supabase.
                                </p>

                                <p className="mb-4">
                                    I&apos;m passionate about emerging technologies, particularly AI integration, cloud containerization, and modern build
                                    tools (Webpack, Vite). I maintain current knowledge of industry best practices in accessibility (WCAG), SEO, security,
                                    and performance optimization, ensuring every project meets professional standards and delivers exceptional user experiences.
                                </p>

                                <h3 className="text-xl font-serif font-semibold mb-4 mt-8 text-[color:var(--text-heading)]">
                                    Community Involvement
                                </h3>

                                <p className="mb-4">
                                    Beyond software development, I actively contribute to my community through leadership roles at the {' '}
                                    <Link to="https://www.dlya.org/giving" className="tip">DLYA Fundraising Team</Link> and {' '}
                                    <Link to="https://www.deeperlifedc.org" className="tip">DLBC Tampa</Link>, where I oversee {' '}
                                    <Tooltip content={"video and sound production"} position={'top'}>media production</Tooltip>, {' '}
                                    <Tooltip content={"musical direction and coordination"} position={'top'}>choir direction</Tooltip>, and {' '}
                                    <Tooltip content={"social media management, YouTube content, and live streaming"} position={'top'}>digital streaming services</Tooltip>.
                                    These responsibilities have strengthened my project management, team leadership, and multimedia production skills.
                                </p>

                                <div className="mt-8 p-6 bg-[color:var(--card)] border border-[color:var(--border)] rounded-lg">
                                    <p className="mb-2 font-semibold text-[color:var(--text-heading)]">Preferred Technology Stack</p>
                                    <p className="text-sm">TypeScript, React, Next.js, Vite, Node.js, Tailwind CSS, React Router, Framer Motion, MySQL, Supabase</p>
                                </div>

                                <div className="flex space-x-4 mt-8">
                                    <Link
                                        to="/books"
                                        className="px-6 py-3 rounded-lg bg-[color:var(--accent)] text-sm text-[color:var(--accent-foreground)] font-medium transition-all duration-300 hover:bg-[color:var(--accent)]/90 hover:shadow-glow"
                                    >
                                        Explore My Library
                                    </Link>
                                    <Link
                                        to="/projects"
                                        className="px-6 py-3 rounded-lg border border-[color:var(--border)] text-sm text-[color:var(--text-primary)] font-medium transition-all duration-300 hover:bg-[color:var(--card)] hover:shadow-lg"
                                    >
                                        View All Projects
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Philosophy Section */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
                className="py-24 px-6 md:px-10 bg-[color:var(--bg-subtle)]"
            >
                <div className="max-w-6xl mx-auto">
                    <SubHeading
                        title="My Philosophy"
                        description="Core principles that guide my approach to development and design."
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="bg-[color:var(--card)] backdrop-blur-sm max-w-3xl mx-auto rounded-2xl border-2 border-[color:var(--accent)] text-[color:var(--text-primary)] font-futura p-10 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                        <blockquote className="text-center">
                            <p className="text-base md:text-lg leading-relaxed md:leading-relaxed italic mb-6">
                                &ldquo;I didn&apos;t invent the language or mathematics I used. I make little of my own food,
                                none of my own clothes. Everything I do depends on other members of our species and the
                                shoulders that we stand on. And a lot of us want to contribute something back to our species
                                and to add something to the flow. It&apos;s about trying to express something in the only
                                way that most of us know how because we can&apos;t write Bob Dylan songs or Tom Stoppard
                                plays. We try to use the talents we do have to express our deep feelings, to show our
                                appreciation of all the contributions that came before us, and to add something to
                                that flow. That&apos;s what has driven me.&rdquo;
                            </p>
                            <p className="text-sm md:text-base text-[color:var(--accent)] font-semibold tracking-wide">
                                &mdash; Steve Jobs
                            </p>
                        </blockquote>
                    </motion.div>
                    {/*                
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'User-Centered Design',
                                description:
                                    'I believe that exceptional user experiences begin with empathy and understanding. Every design decision I make is informed by user needs and goals.',
                                icon: 'user',
                            },
                            {
                                title: 'Clean, Maintainable Code',
                                description:
                                    "Writing code that's not only functional but also readable, scalable, and maintainable is central to my development approach.",
                                icon: 'code',
                            },
                            {
                                title: 'Continuous Innovation',
                                description:
                                    'I embrace new technologies and methodologies, constantly expanding my skills to deliver cutting-edge solutions.',
                                icon: 'sparkles',
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true, amount: 0.3 }}
                                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                                    <svg
                                        className="w-6 h-6 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        {item.icon === 'user' && (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            />
                                        )}
                                        {item.icon === 'code' && (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                            />
                                        )}
                                        {item.icon === 'sparkles' && (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                            />
                                        )}
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold mb-3 text-[color:var(--badge-text)]">
                                    {item.title}
                                </h3>
                                <blockquote className="text-center p-4 sm:px-7">
                                    <p className="text-xl font-medium text-gray-800 md:text-2xl md:leading-normal xl:leading-normal">
                                        &ldquo;I didn&apos;t invent the language or mathematics I used. I make little of my one food, none of my own clothes. Everything I do depends on other members of our 
                                        species and the shoulders that we stand on. And a lot of us want to contribute something back to our species and to add something to the flow. It&apos;s about trying to 
                                        express something in the only way that most of us know how because we can&apos;t write Bob Dylan songs or Tom Stoppard plays. We try to use the talents we do have to 
                                        express our deep feelings, to show our appreciation of all the contributions that came before us, and to add something to that flow. That&apos;s what has driven me.&rdquo;
                                         
                                    </p>
                                    <p className="mt-5 text-gray-800">&mdash;{' '} Steve Jobs</p>
                                </blockquote>
                                <p className="text-sm text-gray-600">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>*/}
                </div>
            </motion.section>

            {/* Experience & Skills Section */}
            <ExperienceNSkill />

            {/* Call to Action */}
            <CTA />
        </div>
    )
}

export function ExperienceNSkill() {
    return (
        <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
                className="py-24 px-6 md:px-10 hidden"
            >
                <div className="max-w-6xl mx-auto">
                    <SubHeading
                        title="Experience & Skills"
                        description="My professional journey and technical expertise."
                    />

                    <div className="grid md:grid-cols-2 gap-16">
                        {/* Experience */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <h3 className="text-lg font-bold mb-8 text-foreground flex items-center">
                                <span className="w-8 h-8 rounded-full bg-blue-100 text-[color:var(--badge-text)] flex items-center justify-center mr-3 text-sm">
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </span>
                                Work Experience
                            </h3>

                            <div className="space-y-12">
                                {[
                                    {
                                        title: 'Senior Front-End Engineer',
                                        company: 'TechNova Solutions',
                                        period: '2023 - Present',
                                        description:
                                            'Leading the front-end development team in building scalable web applications using React, TypeScript, and modern JavaScript frameworks.',
                                    },
                                    {
                                        title: 'Front-End Developer',
                                        company: 'WebCraft Studios',
                                        period: '2019 - 2022',
                                        description:
                                            'Developed responsive websites and progressive web applications with a focus on performance optimization and accessibility.',
                                    },
                                    {
                                        title: 'UI Developer',
                                        company: 'Digital Minds Agency',
                                        period: '2017 - 2019',
                                        description:
                                            'Implemented pixel-perfect user interfaces from design mockups while ensuring cross-browser compatibility.',
                                    },
                                ].map((job, index) => (
                                    <div
                                        key={index}
                                        className="relative pl-8 border-l-2 border-gray-100"
                                    >
                                        <div className="absolute w-4 h-4 bg-[color:var(--badge-border)] rounded-full -left-[9px] top-1"></div>
                                        <h4 className="text-base font-semibold mb-1 text-gray-900">
                                            {job.title}
                                        </h4>
                                        <div className="flex items-center text-sm text-gray-500 mb-3">
                                            <span className="uppercase">{job.company}</span>
                                            <span className="mx-2">•</span>
                                            <span>{job.period}</span>
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            {job.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Skills */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <h3 className="text-lg font-bold mb-8 text-foreground flex items-center">
                                <span className="w-8 h-8 rounded-full bg-blue-100 text-[color:var(--badge-text)] flex items-center justify-center mr-3 text-sm">
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                                        />
                                    </svg>
                                </span>
                                Technical Skills
                            </h3>

                            <div className="space-y-6">
                                {[
                                    {
                                        category: 'Front-End Technologies',
                                        skills: [
                                            'React.js',
                                            'TypeScript',
                                            'JavaScript (ES6+)',
                                            'HTML5',
                                            'CSS3/SCSS',
                                        ],
                                    },
                                    {
                                        category: 'Libraries & Frameworks',
                                        skills: [
                                            'Redux',
                                            'Next.js',
                                            'Tailwind CSS',
                                            'Framer Motion',
                                            'React Query',
                                        ],
                                    },
                                    {
                                        category: 'Tools & Platforms',
                                        skills: [
                                            'Git/GitHub',
                                            'Webpack/Vite',
                                            'Jest/Testing Library',
                                            'Figma',
                                            'CI/CD',
                                        ],
                                    },
                                    {
                                        category: 'Best Practices',
                                        skills: [
                                            'Responsive Design',
                                            'Accessibility (WCAG)',
                                            'Performance Optimization',
                                            'SEO',
                                            'Component-Driven Development',
                                        ],
                                    },
                                ].map((category, index) => (
                                    <div key={index} className="mb-8">
                                        <h4 className="text-base font-semibold mb-4 text-gray-900">
                                            {category.category}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {category.skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
    );
}