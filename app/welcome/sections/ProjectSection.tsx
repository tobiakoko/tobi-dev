import { motion } from 'framer-motion'
import { projects, type Project } from '~/data/projects'

function ProjectCard({ project, index }: { project: Project; index: number }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="group relative bg-[color:var(--card)] rounded-lg border border-[color:var(--border)] hover:border-[color:var(--accent)] transition-all duration-300 hover:shadow-glow"
        >
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col h-full p-6"
                aria-label={`View ${project.title} project`}
            >
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-[color:var(--badge-bg)] rounded-lg">
                        <svg
                            className="w-6 h-6 text-[color:var(--accent)]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                            />
                        </svg>
                    </div>
                    <svg
                        className="w-5 h-5 text-[color:var(--text-secondary)] group-hover:text-[color:var(--accent)] transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                    </svg>
                </div>

                <h3 className="text-xl font-bold mb-3 text-[color:var(--text-heading)] group-hover:text-[color:var(--accent)] transition-colors">
                    {project.title}
                </h3>

                <p className="text-[color:var(--text-secondary)] mb-6 leading-relaxed text-sm flex-grow">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-auto">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="font-mono text-xs text-[color:var(--text-secondary)]"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </a>
        </motion.article>
    )
}

export function ProjectSection() {
    return (
        <section id="projects" className="py-32 px-6 md:px-12">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[color:var(--text-heading)] flex items-center gap-4">
                        <span className="section-number">02.</span>
                        Featured Work
                    </h2>
                    <div className="w-full max-w-xs h-px bg-[color:var(--border)]" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
