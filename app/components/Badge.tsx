import { motion } from 'framer-motion'

export default function Badge({ badge }: { badge: string }) {
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
    return (
        <motion.span
            className="inline-block py-1 px-3 rounded-full bg-[rgb(245, 245, 253)] [box-shadow:inset_0_0_12px_#8092ff4d] border border-[color:var(--badge-border)] text-[color:var(--badge-text)] font-light font-futura text-sm mb-4"
            custom={0.3}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
        >
            {badge}
        </motion.span>
    )
}

export function SecondaryBadge({ badge }: { badge: string }) {
    return (
        <span
            key={badge}
            className="text-xs font-medium px-2 py-1 bg-[rgb(245, 245, 253)] [box-shadow:inset_0_0_12px_#8092ff4d] border border-[color:var(--badge-border)] text-[color:var(--badge-text)] font-light font-futura text-sm rounded-full"
        >
            {badge}
        </span>
    )
}
