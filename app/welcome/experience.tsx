import { motion } from 'framer-motion'
import type { FC } from 'react'
import Badge from '~/components/Badge'

interface Responsibility {
    id: number
    text: string
}

interface Experience {
    id: number
    company: string
    position: string
    period: string
    description: string
    responsibilities: Responsibility[]
    logoColor?: string
}

interface ExpertiseItem {
    id: number
    title: string
    skills: string[]
}

export const Experiences: FC = () => {
    const experiences: Experience[] = [
        {
            id: 1,
            company: 'Tech Innovations Ltd',
            position: 'Senior Front-End Engineer',
            period: 'January 2023 - Present',
            description:
                'Leading front-end development for enterprise-level applications, focused on React ecosystem technologies and performance optimization.',
            logoColor: '#0080ff',
            responsibilities: [
                {
                    id: 1,
                    text: 'Architected and implemented responsive web applications using React, Redux, and TypeScript',
                },
                {
                    id: 2,
                    text: 'Led a team of 5 developers, implementing Agile methodologies and CI/CD pipelines',
                },
                {
                    id: 3,
                    text: 'Reduced loading time by 40% through code splitting and lazy loading techniques',
                },
                {
                    id: 4,
                    text: 'Collaborated with UX designers to implement accessible and intuitive user interfaces',
                },
                {
                    id: 5,
                    text: 'Mentored junior developers through code reviews and pair programming sessions',
                },
            ],
        },
        {
            id: 2,
            company: 'Digital Solutions Inc',
            position: 'Front-End Developer',
            period: 'March 2020 - December 2022',
            description:
                'Developed and maintained multiple client-facing applications with focus on modern JavaScript frameworks and responsive design.',
            logoColor: '#34c759',
            responsibilities: [
                {
                    id: 1,
                    text: 'Built interactive web applications using Vue.js and Nuxt.js frameworks',
                },
                {
                    id: 2,
                    text: 'Implemented state management solutions with Vuex and Pinia',
                },
                {
                    id: 3,
                    text: 'Created reusable component libraries adhering to design system guidelines',
                },
                {
                    id: 4,
                    text: 'Integrated RESTful APIs and GraphQL endpoints for data fetching',
                },
                {
                    id: 5,
                    text: 'Conducted cross-browser testing and accessibility improvements',
                },
            ],
        },
        {
            id: 3,
            company: 'WebCraft Studios',
            position: 'UI Developer',
            period: 'June 2018 - February 2020',
            description:
                'Focused on translating design mockups into functional interfaces for various client projects.',
            logoColor: '#ff9500',
            responsibilities: [
                {
                    id: 1,
                    text: 'Developed responsive websites and web applications using HTML5, CSS3, and JavaScript',
                },
                {
                    id: 2,
                    text: 'Implemented animations and interactive elements using GSAP and jQuery',
                },
                {
                    id: 3,
                    text: 'Created custom WordPress themes and plugins for content management',
                },
                {
                    id: 4,
                    text: 'Collaborated with back-end developers to integrate front-end templates with PHP backends',
                },
                {
                    id: 5,
                    text: 'Optimized websites for maximum speed and scalability',
                },
            ],
        },
        {
            id: 4,
            company: 'Creative Tech Solutions',
            position: 'Junior Web Developer',
            period: 'August 2016 - May 2018',
            description:
                'Assisted in the development of web applications and websites for small to medium-sized businesses.',
            logoColor: '#af52de',
            responsibilities: [
                {
                    id: 1,
                    text: 'Built and maintained websites using HTML, CSS, JavaScript, and PHP',
                },
                {
                    id: 2,
                    text: 'Implemented responsive designs that worked across desktop and mobile devices',
                },
                {
                    id: 3,
                    text: 'Assisted with bug fixes and feature additions to existing applications',
                },
                {
                    id: 4,
                    text: 'Participated in client meetings to gather requirements and showcase deliverables',
                },
                {
                    id: 5,
                    text: 'Collaborated with designers to ensure visual fidelity in implementations',
                },
            ],
        },
    ]

    const expertise: ExpertiseItem[] = [
        {
            id: 1,
            title: 'Front-End Development',
            skills: [
                'React.js & React ecosystem (Redux, React Router, Hooks)',
                'Vue.js & Vue ecosystem (Vuex, Vue Router, Composition API)',
                'JavaScript (ES6+) & TypeScript',
                'HTML5, CSS3, Sass/SCSS',
                'Responsive Web Design & Mobile-First Approaches',
            ],
        },
        {
            id: 2,
            title: 'Development Tools & Practices',
            skills: [
                'Webpack, Vite, Rollup',
                'Git version control & GitHub workflows',
                'CI/CD pipelines (GitHub Actions, Jenkins)',
                'Jest, React Testing Library, Cypress',
                'Storybook for component documentation',
            ],
        },
        {
            id: 3,
            title: 'UI/UX & Design',
            skills: [
                'CSS frameworks (Tailwind CSS, Bootstrap)',
                'UI component libraries (Material-UI, Chakra UI)',
                'Animation libraries (Framer Motion, GSAP)',
                'Design tools (Figma, Adobe XD)',
                'Design systems implementation',
            ],
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1.0],
            },
        },
    }

    return (
        <section className="overflow-hidden pt-32 pb-24 px-6 md:px-10 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="text-center mb-16"
            >
                <Badge badge={'Experience'} />
                <p className="text-xl md:text-md font-light tracking-tight text-gray-600 mb-8 max-w-2xl mx-auto">
                    My professional journey crafting exceptional digital
                    experiences.
                </p>
            </motion.div>

            {/* Timeline Section */}
            <div className="relative mb-24">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-700"></div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-16"
                >
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            variants={itemVariants}
                            className={`flex items-start gap-8 relative ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} md:max-w-4xl mx-auto`}
                        >
                            {/* Timeline node */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                                <div
                                    className={`w-4 h-4 rounded-full border-4 border-white shadow-md`}
                                    style={{ backgroundColor: exp.logoColor }}
                                ></div>
                            </div>

                            {/* Content card*/}
                            <div
                                className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}
                            >
                                <motion.div
                                    whileHover={{
                                        y: -5,
                                        boxShadow:
                                            '0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.05)',
                                    }}
                                    transition={{ duration: 0.2 }}
                                    className="bg-gradient-to-r from-blue-500 to-indigo-600 backdrop-blur-sm bg-opacity-80 rounded-2xl p-8 shadow-lg border border-gray-100"
                                >
                                    <div className="flex justify-between items-start flex-col sm:flex-row gap-2 mb-4">
                                        <div>
                                            <h3 className="text-lg font-semibold text-white">
                                                {exp.position}
                                            </h3>
                                            <h4 className="text-xs font-medium text-gray-300 mt-1">
                                                {exp.company}
                                            </h4>
                                        </div>
                                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-blue-500 whitespace-nowrap">
                                            {exp.period}
                                        </span>
                                    </div>

                                    <p className="text-xs text-gray-300 mb-6">
                                        {exp.description}
                                    </p>

                                    <div>
                                        <h4 className="text-sm font-medium text-gray-200 mb-3">
                                            Key Responsibilities
                                        </h4>
                                        <ul className="space-y-2">
                                            {exp.responsibilities.map(
                                                (resp) => (
                                                    <li
                                                        key={resp.id}
                                                        className="flex items-start gap-3"
                                                    >
                                                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-100 flex-shrink-0"></span>
                                                        <span className="text-xs text-gray-300">
                                                            {resp.text}
                                                        </span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Empty space for opposite side here */}
                            <div className="hidden md:block w-1/2"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Technical Expertise Section here */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    ease: [0.25, 0.1, 0.25, 1.0],
                    delay: 0.6,
                }}
                className="pt-8"
            >
                <h2 className="text-2xl font-semibold text-center mb-12 text-gray-900">
                    Technical Expertise
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {expertise.map((item) => (
                        <motion.div
                            key={item.id}
                            whileHover={{ y: -8, scale: 1.02 }}
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 15,
                            }}
                            className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-600 backdrop-filter backdrop-blur-lg bg-opacity-90"
                        >
                            <h3 className="text-base font-semibold mb-6 text-white relative inline-block">
                                {item.title}
                                <span className="absolute bottom-0 left-0 h-1 w-12 bg-blue-500 rounded-full transform translate-y-1"></span>
                            </h3>

                            <ul className="space-y-3">
                                {item.skills.map((skill, i) => (
                                    <li key={i} className="flex items-center">
                                        <span className="mr-2 text-blue-500">
                                            •
                                        </span>
                                        <span className="text-xs text-gray-300">
                                            {skill}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
