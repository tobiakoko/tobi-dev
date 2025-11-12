import { motion } from 'framer-motion'
import { Link } from 'react-router'
import SubHeading from '~/components/SubHeading'
import { SecondaryBadge } from '~/components/Badge'
import { projects, type Project } from '~/data/projects'

function ProjectCard({ project, index }: { project: Project; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-[color:var(--border)] hover:border-[color:var(--accent)] hover:-translate-y-1"
        >
            <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-[color:var(--blue-light)] via-[color:var(--accent)]/10 to-[color:var(--pink-light)] relative overflow-hidden h-52">
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--accent)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                    {project.category && (
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/90 backdrop-blur-sm text-[color:var(--accent)] shadow-sm">
                            {project.category}
                        </span>
                    )}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                        className="w-16 h-16 text-white drop-shadow-lg"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                    </svg>
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[color:var(--primary-foreground)] group-hover:text-[color:var(--accent)] transition-colors">
                    {project.title}
                </h3>
                <p className="text-[color:var(--text-secondary)] mb-4 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                        <SecondaryBadge key={tag} badge={tag} />
                    ))}
                    {project.tags.length > 3 && (
                        <span className="px-2 py-1 text-xs text-[color:var(--text-secondary)]">
                            +{project.tags.length - 3}
                        </span>
                    )}
                </div>
                <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[color:var(--accent)] text-sm font-semibold inline-flex items-center hover:text-[color:var(--accent-foreground)] transition-colors"
                >
                    View Project
                    <svg
                        className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </Link>
            </div>
        </motion.div>
    )
}

export function ProjectSection() {
    return (
        <section id="projects" className="py-24 px-6 md:px-10 bg-gradient-to-b from-white to-[color:var(--bg-subtle)]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold rounded-full bg-[color:var(--blue-light)] text-[color:var(--accent)] border border-[color:var(--accent)]/20">
                            Portfolio
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[color:var(--primary-foreground)]">
                            Featured Projects
                        </h2>
                        <p className="text-lg text-[color:var(--text-secondary)] max-w-2xl mx-auto">
                            A curated selection of projects showcasing modern web technologies,
                            clean architecture, and user-centered design.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
