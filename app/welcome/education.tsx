import { motion } from 'framer-motion'
import type { FC } from 'react'
import Badge from '~/components/Badge'

interface Achievement {
    id: number
    text: string
}

interface EducationItem {
    id: number
    degree: string
    institution: string
    period: string
    description: string
    achievements: string[]
}

interface Certification {
    id: number
    name: string
    issuer: string
    date: string
    credentialId: string
    logo?: string
}

interface LearningCategory {
    title: string
    items: string[]
}

export const Educations: FC = () => {
    // Education data
    const education: EducationItem[] = [
        {
            id: 1,
            degree: 'Master of Science in Computer Science',
            institution: 'University of Lagos',
            period: '2018 - 2020',
            description:
                'Specialized in Human-Computer Interaction with a focus on user interface design and evaluation methodologies.',
            achievements: [
                'Thesis: "Optimizing User Experience in Progressive Web Applications"',
                'Graduated with distinction (3.8/4.0 GPA)',
                'Research assistant in the Interactive Systems Lab',
                'Published paper on modern front-end architecture patterns',
            ],
        },
        {
            id: 2,
            degree: 'Bachelor of Engineering in Software Engineering',
            institution: 'Federal University of Technology',
            period: '2014 - 2018',
            description:
                'Comprehensive education in software development principles, algorithms, and engineering practices.',
            achievements: [
                'First Class Honors (3.75/4.0 GPA)',
                'Final Year Project: "Responsive Framework for Cross-platform Applications"',
                "President of the University's Developer Student Club",
                'Recipient of the Academic Excellence Scholarship (2016-2018)',
            ],
        },
        {
            id: 3,
            degree: 'Professional Certification in UI/UX Design',
            institution: 'Design Academy International',
            period: '2019',
            description:
                'Intensive program focused on user experience research, interface design principles, and prototyping techniques.',
            achievements: [
                'Capstone Project: Redesign of a financial services mobile application',
                'Mastered industry-standard design tools including Figma and Adobe XD',
                'Completed 10 real-world client projects',
                'Received Excellence in Digital Design award',
            ],
        },
    ]

    // Certifications data
    const certifications: Certification[] = [
        {
            id: 1,
            name: 'AWS Certified Developer - Associate',
            issuer: 'Amazon Web Services',
            date: '2023',
            credentialId: 'AWS-DEV-12345',
            logo: 'aws',
        },
        {
            id: 2,
            name: 'Professional Front-End Developer Certification',
            issuer: 'Meta',
            date: '2022',
            credentialId: 'META-FED-67890',
            logo: 'meta',
        },
        {
            id: 3,
            name: 'React Certification',
            issuer: 'OpenJS Foundation',
            date: '2021',
            credentialId: 'REACT-54321',
            logo: 'react',
        },
        {
            id: 4,
            name: 'Advanced JavaScript',
            issuer: 'JavaScript Institute',
            date: '2020',
            credentialId: 'ADV-JS-09876',
            logo: 'js',
        },
    ]

    // Continuous learning data
    const continuousLearning: LearningCategory[] = [
        {
            title: 'Currently Learning',
            items: [
                'WebAssembly (WASM) fundamentals',
                'Advanced TypeScript patterns',
                'Micro-frontend architecture',
            ],
        },
        {
            title: 'Recent Courses',
            items: [
                'Advanced React Patterns - Frontend Masters',
                'Performance Optimization in JavaScript - Udemy',
                'Design Systems for Developers - Coursera',
            ],
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    }

    return (
        <section className="overflow-hidden pt-32 pb-24 px-6 md:px-10 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <Badge badge={'Education'} />
                <p className="text-xl md:text-md font-light tracking-tight text-gray-600 mb-8 max-w-2xl mx-auto">
                    My academic journey and professional development path that
                    shapes my approach to software engineering.
                </p>
            </motion.div>

            <div className="space-y-24">
                {/* Academic Education Section here */}
                <motion.section
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-xl font-semibold mb-8 pb-2 border-b border-gray-200"
                    >
                        Academic Education
                    </motion.h2>

                    <div className="space-y-10">
                        {education.map((item) => (
                            <motion.div
                                key={item.id}
                                variants={itemVariants}
                                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-2">
                                    <h3 className="text-lg font-semibold">
                                        {item.degree}
                                    </h3>
                                    <span className="text-sm px-4 py-1 bg-gray-100 rounded-full font-medium text-gray-600">
                                        {item.period}
                                    </span>
                                </div>
                                <div className="text-sm text-indigo-600 font-medium mb-2">
                                    {item.institution}
                                </div>
                                <p className="mb-6 text-sm text-gray-700">
                                    {item.description}
                                </p>
                                <div>
                                    <h4 className="text-sm font-medium mb-3">
                                        Key Achievements
                                    </h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {item.achievements.map(
                                            (achievement, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-center"
                                                >
                                                    <span className="inline-block w-1 h-1 mr-2 bg-indigo-500 rounded-full"></span>
                                                    <span className="text-xs text-gray-600">
                                                        {achievement}
                                                    </span>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Certifications Section here */}
                <motion.section
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-xl font-semibold mb-8 pb-2 border-b border-gray-200"
                    >
                        Professional Certifications
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {certifications.map((cert) => (
                            <motion.div
                                key={cert.id}
                                variants={itemVariants}
                                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="min-w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                                        <span className="font-medium text-xs">
                                            {cert.logo}
                                        </span>
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="font-semibold text-xs">
                                            {cert.name}
                                        </h3>
                                    </div>
                                </div>
                                <div className="space-y-1 text-xs text-gray-500">
                                    <p>{cert.issuer}</p>
                                    <p>Issued {cert.date}</p>
                                    <p className="font-medium text-gray-600">
                                        ID: {cert.credentialId}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Continuous Learning Section here */}
                <motion.section
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-xl font-semibold mb-8 pb-2 border-b border-gray-200"
                    >
                        Continuous Learning
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="mb-8 text-sm text-gray-700"
                    >
                        I believe in lifelong learning and constantly expanding
                        my skillset. Here's what I'm currently focused on:
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {continuousLearning.map((category, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-white rounded-2xl p-6 shadow-md"
                            >
                                <h3 className="text-base font-medium text-indigo-600 mb-4">
                                    {category.title}
                                </h3>
                                <ul className="space-y-3">
                                    {category.items.map((item, i) => (
                                        <li
                                            key={i}
                                            className="flex items-center"
                                        >
                                            <span className="inline-block w-1.5 h-1.5 mr-3 bg-indigo-500 rounded-full"></span>
                                            <span className="text-sm text-gray-700">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        variants={itemVariants}
                        className="mt-12 p-6 bg-indigo-50 rounded-2xl text-center"
                    >
                        <p className="text-indigo-700 text-sm italic font-light">
                            "The more I learn, the more I realize how much I
                            don't know." — Albert Einstein
                        </p>
                    </motion.div>
                </motion.section>
            </div>
        </section>
    )
}
