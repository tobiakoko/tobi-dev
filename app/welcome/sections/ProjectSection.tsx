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
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group border border-[color:var(--border)]"
        >
            <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-[color:var(--blue-light)] to-[color:var(--pink-light)] relative overflow-hidden h-48">
                <div className="absolute inset-0 bg-[color:var(--accent)] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </div>
            <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                        <SecondaryBadge key={tag} badge={tag} />
                    ))}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[color:var(--primary-foreground)] group-hover:text-[color:var(--accent)] transition-colors">
                    {project.title}
                </h3>
                <p className="text-[color:var(--text-secondary)] mb-4 text-sm leading-relaxed">
                    {project.description}
                </p>
                <Link
                    to={project.link}
                    target="_blank"
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
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
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
        <section id="projects" className="py-24 px-6 md:px-10 bg-[color:var(--bg-subtle)]">
            <div className="max-w-6xl mx-auto">
                <SubHeading
                    title="Featured Projects"
                    description="A selection of my latest work crafted with attention to detail and modern technologies."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
