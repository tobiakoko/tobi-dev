import { motion } from 'framer-motion'
import { Link } from 'react-router'

export function CTAButton({ src, label }: { src: string; label: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mt-12"
        >
            <Link
                to={src}
                className="inline-flex items-center px-6 py-3 rounded-lg border border-[color:var(--accent-foreground)] bg-[color:var(--secondary)] text-sm text-[color:var(--accent-foreground)] font-medium transition-all duration-300 hover:bg-[rgb(186,195,255)]"
            >
                {label}
                <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </Link>
        </motion.div>
    )
}
