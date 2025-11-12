import { motion } from 'framer-motion'
import { fadeInUp } from '~/utils/animations'

interface BadgeProps {
    badge: string
}

export default function Badge({ badge }: BadgeProps) {
    return (
        <motion.span
            className="inline-block py-2 px-4 rounded-full bg-[color:var(--badge-bg)] border border-[color:var(--badge-border)] text-[color:var(--badge-text)] font-semibold text-sm mb-4 shadow-sm"
            custom={0.3}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
        >
            {badge}
        </motion.span>
    )
}

export function SecondaryBadge({ badge }: BadgeProps) {
    return (
        <span className="text-xs font-semibold px-3 py-1.5 bg-[color:var(--badge-bg)] border border-[color:var(--badge-border)] text-[color:var(--badge-text)] rounded-full hover:bg-[color:var(--blue-light)] transition-colors">
            {badge}
        </span>
    )
}
