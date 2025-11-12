import { motion } from 'framer-motion'

interface SubHeadingProps {
    title: string
    description: string
}

/**
 * Section heading component with title and description
 * Used consistently across all major sections
 */
export default function SubHeading({ title, description }: SubHeadingProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
        >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[color:var(--primary-foreground)]">
                {title}
            </h2>
            <p className="text-lg md:text-xl text-[color:var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
                {description}
            </p>
        </motion.div>
    )
}
