import { Link } from 'react-router'
import { motion } from 'framer-motion'
import { contactInfo } from '~/welcome/about'

/**
 * Call-to-action component for the homepage
 * Encourages visitors to get in touch
 */
export default function CTA() {
    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="py-24 px-6 md:px-10"
        >
            <div className="max-w-5xl mx-auto bg-[color:var(--card)] border-2 border-[color:var(--accent)] rounded-3xl overflow-hidden shadow-glow">
                <div className="relative px-8 md:px-12 py-16 md:py-24">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <svg
                            className="w-full h-full"
                            viewBox="0 0 400 400"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <pattern
                                    id="cta-grid"
                                    x="0"
                                    y="0"
                                    width="40"
                                    height="40"
                                    patternUnits="userSpaceOnUse"
                                >
                                    <circle
                                        cx="20"
                                        cy="20"
                                        r="2"
                                        fill="currentColor"
                                        className="text-[color:var(--accent)]"
                                    />
                                </pattern>
                            </defs>
                            <rect
                                width="100%"
                                height="100%"
                                fill="url(#cta-grid)"
                            />
                        </svg>
                    </div>

                    <div className="relative text-center md:text-left md:flex md:items-center md:justify-between gap-8">
                        <div className="mb-8 md:mb-0 md:max-w-2xl">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[color:var(--text-heading)]">
                                I know you&apos;re curious
                            </h2>
                            <p className="text-lg md:text-xl text-[color:var(--text-secondary)]">
                                Reach out. I look forward to connecting!
                            </p>
                        </div>
                        <Link
                            to={`mailto:${contactInfo.email}`}
                            className="inline-block px-8 py-4 rounded-xl bg-[color:var(--accent)] text-[color:var(--accent-foreground)] font-bold transition-all duration-300 hover:bg-[color:var(--accent)]/90 hover:shadow-glow hover:-translate-y-1"
                        >
                            Send me an email
                        </Link>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}