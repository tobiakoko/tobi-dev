import { motion } from 'framer-motion'
import { Link } from 'react-router'

interface HeroSectionProps {
    isLoaded: boolean
}

export function HeroSection({ isLoaded }: HeroSectionProps) {
    return (
        <motion.section
            className="min-h-screen flex items-center px-6 md:px-12 pt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-5xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <p className="font-mono text-[color:var(--accent)] text-base mb-6">
                        Hi, my name is
                    </p>
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-[color:var(--text-heading)]"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    Daniel Akoko.
                </motion.h1>

                <motion.h2
                    className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-[color:var(--text-secondary)]"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    I build exceptional digital experiences.
                </motion.h2>

                <motion.p
                    className="text-lg text-[color:var(--text-secondary)] mb-12 max-w-2xl leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    I'm a <span className="text-[color:var(--text-primary)] font-semibold">software engineer</span> specializing in building
                    scalable web applications. Currently focused on creating accessible,
                    user-centered products using modern technologies like{' '}
                    <span className="text-[color:var(--accent)]">React</span>,{' '}
                    <span className="text-[color:var(--accent)]">TypeScript</span>, and{' '}
                    <span className="text-[color:var(--accent)]">Node.js</span>.
                </motion.p>

                <motion.div
                    className="flex flex-wrap gap-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <Link
                        to="/projects"
                        className="px-8 py-4 rounded border-2 border-[color:var(--accent)] text-[color:var(--accent)] font-semibold transition-all duration-200 hover:bg-[color:var(--badge-bg)] hover:shadow-lg"
                    >
                        View My Work
                    </Link>
                </motion.div>

                {/* Decorative Element */}
                <motion.div
                    className="absolute left-0 md:left-12 bottom-20 hidden lg:flex flex-col items-center gap-3 after:content-[''] after:w-px after:h-24 after:bg-[color:var(--text-muted)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                >
                    <a
                        href="https://github.com/tobiakoko"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[color:var(--text-secondary)] hover:text-[color:var(--accent)] hover:-translate-y-1 transition-all"
                        aria-label="GitHub"
                    >
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                    </a>
                    <a
                        href="https://linkedin.com/in/daniel-akoko"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[color:var(--text-secondary)] hover:text-[color:var(--accent)] hover:-translate-y-1 transition-all"
                        aria-label="LinkedIn"
                    >
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </a>
                </motion.div>

                {/* Email Side Element */}
                <motion.div
                    className="fixed right-12 bottom-0 hidden lg:flex flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-[color:var(--text-muted)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                >
                    <a
                        href="mailto:enquiries@tobiakoko.com"
                        className="text-[color:var(--text-secondary)] hover:text-[color:var(--accent)] transition-all font-mono text-sm"
                        style={{ writingMode: 'vertical-rl' }}
                    >
                        enquiries@tobiakoko.com
                    </a>
                </motion.div>
            </div>
        </motion.section>
    )
}
