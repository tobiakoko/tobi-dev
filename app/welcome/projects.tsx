import { useState, useEffect, type JSX } from 'react'
import { motion } from 'framer-motion'
import Badge from '~/components/Badge'
import FilterButtons from '~/components/Filter'

interface Technology {
    id: number
    title: string
    description: string
    technologies: string[]
    category: 'web' | 'mobile'
    finished: boolean
    link: string
    github: string
}

type FilterOption = 'all' | 'finished' | 'web' | 'mobile' | string

/*

{[
                            {
                                title: 'Church Website',
                                description:
                                    'A website built with React and Node.js',
                                tags: ['Nextjs', 'Tailwind CSS', 'Redux'],
                            },
                            {
                                title: 'FreeWillPay Dashboard',
                                description:
                                    'Full-stack dashboard for managing payments and transactions',
                                tags: ['TypeScript', 'React', 'Java'],
                            },
                            {
                                title: 'Mobile Banking App',
                                description:
                                    'Secure and intuitive banking solution for iOS and Android',
                                tags: ['React Native', 'GraphQL', 'AWS'],
                            },

*/

export function Project(): JSX.Element {
    const [filter, setFilter] = useState<FilterOption>('all')
    const [selectedProject, setSelectedProject] = useState<Technology | null>(
        null
    )

    const projects: Technology[] = [
        {
            id: 1,
            title: 'Church Website',
            description:
                'A website built with Next.js and Tailwind CSS',
            technologies: [
                'React',
                'Nextjs', 
                'Tailwind CSS',
                'Redux',
                'Node.js',
            ],
            category: 'web',
            finished: true,
            link: 'https://example.com/ecommerce',
            github: 'https://github.com/danielakoko/ecommerce',
        },
        {
            id: 2,
            title: 'FreeWillPay Dashboard',
            description:
                'A comprehensive full-stack dashboard for managing payments and transactions',
            technologies: ['React', 'React Router', 'Java', 'Tailwind CSS', "Tanstack Query"],
            category: 'web',
            finished: false,
            link: 'https://example.com/dashboard',
            github: 'https://github.com/danielakoko/analytics-dashboard',
        },
        {
            id: 3,
            title: 'Appointment Booking System',
            description:
                'Appointment booking solution for desktop with basic CRUD customer and client operations',
            technologies: ['Java', 'JavaFX', 'Scene-Builder', 'MySQL'],
            category: 'mobile',
            finished: true,
            link: 'https://example.com/social-app',
            github: 'https://github.com/danielakoko/social-app',
        },
    ]

    const filteredProjects =
        filter === 'all'
            ? projects
            : filter === 'finished'
              ? projects.filter((project) => project.finished)
              : projects.filter((project) => project.category === filter)

    const projectCategories = [
        { value: 'all', label: 'All Projects' },
        { value: 'finished', label: 'Finished' },
        { value: 'web', label: 'Web Applications' },
        { value: 'mobile', label: 'Mobile Applications' },
    ]

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
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

    // Close project detail modal with ESC key
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setSelectedProject(null)
        }
        window.addEventListener('keydown', handleEsc)

        return () => {
            window.removeEventListener('keydown', handleEsc)
        }
    }, [])

    // Handle blur backdrop click
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>): void => {
        if (e.target === e.currentTarget) {
            setSelectedProject(null)
        }
    }

    return (
        <section
            id="projects"
            className="overflow-hidden bg-gradient-to-b from-gray-50 to-white"
        >
            <div className="pt-32 pb-24 px-6 md:px-10 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <Badge badge={'Projects'} />
                    <p className="text-xl md:text-md font-light tracking-tight text-gray-600 mb-8 max-w-2xl mx-auto">
                        Some projects I have worked on
                    </p>
                </motion.div>

                {/* Filter buttons component */}
                <FilterButtons
                    activeFilter={filter}
                    onFilterChange={(value: string) => setFilter(value as FilterOption)}
                    options={projectCategories.map((category) => ({
                        value: category.value,
                        label: category.label,
                    }))}
                    className="mb-12"
                />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            whileHover={{
                                y: -8,
                                transition: { duration: 0.3 },
                            }}
                            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                                    <h3 className="text-white font-bold text-lg">
                                        {project.title}
                                    </h3>
                                </div>
                            </div>
                            <div className="p-6 text-sm">
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {project.technologies
                                        .slice(0, 3)
                                        .map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    {project.technologies.length > 3 && (
                                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                                            +{project.technologies.length - 3}
                                        </span>
                                    )}
                                </div>
                                <p className="text-gray-600 mb-4 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    {project.finished && (
                                        <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                                            Finished
                                        </span>
                                    )}
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="text-indigo-600 font-medium text-xs flex items-center group-hover:text-indigo-800"
                                    >
                                        View Details
                                        <svg
                                            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            ></path>
                                        </svg>
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <p className="text-gray-500 text-sm">
                            No projects found matching the selected filter.
                        </p>
                    </motion.div>
                )}
            </div>

            {/* Project detail modal */}
            {selectedProject && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={handleBackdropClick}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: 'spring', damping: 25 }}
                        className="bg-white w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl"
                        onClick={(e: React.MouseEvent) => e.stopPropagation()}
                    >
                        <div className="h-56 bg-gradient-to-r from-blue-500 to-indigo-600 relative">
                            <button
                                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors"
                                onClick={() => setSelectedProject(null)}
                            >
                                <svg
                                    className="w-5 h-5 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            </button>
                            <div className="absolute -bottom-6 left-6">
                                <div className="bg-white shadow-lg rounded-xl p-3">
                                    <span
                                        className={`text-xs font-semibold ${selectedProject.category === 'web' ? 'text-blue-600' : 'text-purple-600'}`}
                                    >
                                        {selectedProject.category === 'web'
                                            ? 'Web Application'
                                            : 'Mobile Application'}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 pt-10">
                            <h2 className="text-lg font-bold text-gray-900 mb-2">
                                {selectedProject.title}
                            </h2>
                            <p className="text-sm text-gray-600 mb-6">
                                {selectedProject.description}
                            </p>

                            <div className="mb-6">
                                <h3 className="text-xs font-medium text-gray-500 mb-3">
                                    Technologies
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.technologies.map(
                                        (tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <a
                                    href={selectedProject.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-xs text-white font-medium py-3 px-4 rounded-xl text-center transition-colors flex items-center justify-center"
                                >
                                    <svg
                                        className="w-5 h-5 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        ></path>
                                    </svg>
                                    Live Demo
                                </a>
                                <a
                                    href={selectedProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 bg-gray-800 hover:bg-gray-900 text-xs text-white font-medium py-3 px-4 rounded-xl text-center transition-colors flex items-center justify-center"
                                >
                                    <svg
                                        className="w-5 h-5 mr-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                    View Code
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </section>
    )
}



/*
LIST OF FUTURE PROJECTS THAT WILL FILL MY PORTFOLIO BY THE END OF 2025

const projects: Technology[] = [
        {
            id: 1,
            title: 'E-commerce Platform',
            description:
                'A comprehensive e-commerce solution with product catalog, cart functionality, and secure checkout process.',
            technologies: [
                'React',
                'Redux',
                'Node.js',
                'MongoDB',
                'Stripe API',
            ],
            category: 'web',
            featured: true,
            link: 'https://example.com/ecommerce',
            github: 'https://github.com/danielakoko/ecommerce',
        },
        {
            id: 2,
            title: 'Analytics Dashboard',
            description:
                'A comprehensive e-commerce solution with product catalog, cart functionality, and secure checkout process.',
            technologies: ['React', 'D3.js', 'Firebase', 'Material UI'],
            category: 'web',
            featured: true,
            link: 'https://example.com/dashboard',
            github: 'https://github.com/danielakoko/analytics-dashboard',
        },
        {
            id: 3,
            title: 'Social Media App',
            description:
                'Mobile-first social platform with post sharing, user profiles, and real-time notifications.',
            technologies: ['React Native', 'Redux', 'Firebase', 'Socket.io'],
            category: 'mobile',
            featured: false,
            link: 'https://example.com/social-app',
            github: 'https://github.com/danielakoko/social-app',
        },
        {
            id: 4,
            title: 'Task Management Tool',
            description:
                'Collaborative task organizer with drag-and-drop interfaces, deadlines, and team communication features.',
            technologies: ['Vue.js', 'Vuex', 'Express', 'PostgreSQL'],
            category: 'web',
            featured: false,
            link: 'https://example.com/task-manager',
            github: 'https://github.com/danielakoko/task-manager',
        },
        {
            id: 5,
            title: 'Weather Application',
            description:
                'Location-based weather forecasting app with interactive maps and severe weather alerts.',
            technologies: [
                'React',
                'TypeScript',
                'OpenWeatherMap API',
                'Leaflet',
            ],
            category: 'web',
            featured: false,
            link: 'https://example.com/weather-app',
            github: 'https://github.com/danielakoko/weather-app',
        },
        {
            id: 6,
            title: 'Financial Tracking App',
            description:
                'Personal finance management tool with expense tracking, budget planning, and financial insights.',
            technologies: ['React Native', 'TypeScript', 'Redux', 'Chart.js'],
            category: 'mobile',
            featured: true,
            link: 'https://example.com/finance-app',
            github: 'https://github.com/danielakoko/finance-tracker',
        },
    ]

*/