import { motion } from 'framer-motion'
import SubHeading from '~/components/SubHeading'
import { skillCategories, type SkillCategory } from '~/data/skills'

function SkillCard({
    category,
    index,
}: {
    category: SkillCategory
    index: number
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white rounded-2xl p-8 border border-[color:var(--border)] shadow-sm hover:shadow-lg transition-shadow"
        >
            <h3 className="text-xl font-bold mb-6 text-[color:var(--accent)]">
                {category.title}
            </h3>
            <ul className="space-y-3">
                {category.skills.map((skill) => (
                    <li
                        key={skill}
                        className="flex items-center py-2 border-b border-[color:var(--border)] last:border-b-0"
                    >
                        <svg
                            className="w-5 h-5 mr-3 text-[color:var(--pink)] flex-shrink-0"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className="text-sm text-[color:var(--text-primary)]">
                            {skill}
                        </span>
                    </li>
                ))}
            </ul>
        </motion.div>
    )
}

export function TechnicalSkills() {
    return (
        <section className="py-24 px-6 md:px-10 bg-[color:var(--bg-subtle)]">
            <div className="max-w-6xl mx-auto">
                <SubHeading
                    title="Technical Skills"
                    description="My expertise in modern web technologies and development tools."
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <SkillCard
                            key={category.title}
                            category={category}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
