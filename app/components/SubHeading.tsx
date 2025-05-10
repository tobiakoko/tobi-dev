import { motion } from 'framer-motion'

export default function SubHeading({
    title,
    description,
}: {
    title: string
    description: string
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-futura font-bold mb-4 tracking-tight text-[color:var(--primary-foreground)]">
                {title}
            </h2>
            <p className="text-xl md:text-md font-light tracking-normal text-[color:var(--secondary-foreground)] max-w-2xl mx-auto">
                {description}
            </p>
        </motion.div>
    )
}
