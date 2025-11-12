import { motion } from 'framer-motion'
import { Link } from 'react-router'
import Badge from '~/components/Badge'
import LogosCarousel from '~/components/StackCarousel'
import { fadeInUp, fadeIn, staggerContainer } from '~/utils/animations'

interface HeroSectionProps {
    isLoaded: boolean
}

export function HeroSection({ isLoaded }: HeroSectionProps) {
    return (
        <motion.div
            className="min-h-screen flex items-center px-6 md:px-10 pt-32 pb-16"
            initial="hidden"
            animate={isLoaded ? 'visible' : 'hidden'}
            variants={staggerContainer}
        >
            <div className="max-w-6xl mx-auto w-full">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <motion.span
                            className="inline-block py-2 px-4 rounded-full bg-[color:var(--badge-bg)] border border-[color:var(--badge-border)] text-[color:var(--badge-text)] font-medium text-sm mb-6"
                            custom={0.3}
                            variants={fadeInUp}
                        >
                            Software Engineer
                        </motion.span>

                        <motion.p
                            className="text-md md:text-md font-normal text-[color:var(--text-secondary)] mb-2"
                            custom={0.5}
                            variants={fadeInUp}
                        >
                            Hi there, I&apos;m
                        </motion.p>

                        <motion.h1
                            className="text-5xl md:text-7xl font-bold mb-6 text-[color:var(--primary-foreground)]"
                            custom={0.7}
                            variants={fadeInUp}
                        >
                            Daniel Akoko,
                        </motion.h1>

                        <motion.p
                            className="text-lg md:text-xl font-normal text-[color:var(--text-secondary)] mb-8 max-w-prose"
                            custom={0.9}
                            variants={fadeInUp}
                        >
                            a{' '}
                            <strong className="text-[color:var(--primary)] font-semibold">
                                Full-Stack Software Developer
                            </strong>
                            , and{' '}
                            <strong className="text-[color:var(--primary)] font-semibold">
                                Program Manager
                            </strong>{' '}
                            based in Tampa Florida. I&apos;m a dedicated
                            problem-solver who thrives on learning and building.
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap gap-4"
                            custom={1.0}
                            variants={fadeInUp}
                        >
                            <Link
                                to="/about"
                                className="px-8 py-4 rounded-xl bg-[color:var(--accent)] text-white font-semibold transition-all duration-300 hover:bg-[color:var(--accent-foreground)] hover:shadow-lg hover:-translate-y-0.5"
                            >
                                About Me →
                            </Link>
                            <Link
                                to="/contact"
                                className="px-8 py-4 rounded-xl border-2 border-[color:var(--pink)] text-[color:var(--pink-foreground)] font-semibold transition-all duration-300 hover:bg-[color:var(--pink-light)]"
                            >
                                Message Me
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div
                        custom={1.3}
                        variants={fadeIn}
                        className="hidden md:block"
                    >
                        <div className="relative bg-gradient-to-br from-[color:var(--blue-light)] to-[color:var(--pink-light)] backdrop-blur-sm rounded-2xl border border-[color:var(--border)] overflow-hidden p-8 shadow-xl">
                            <svg
                                className="absolute -z-10 top-0 right-0 opacity-30"
                                width="404"
                                height="404"
                                fill="none"
                                viewBox="0 0 404 404"
                            >
                                <defs>
                                    <pattern
                                        id="hero-pattern"
                                        x="0"
                                        y="0"
                                        width="20"
                                        height="20"
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect
                                            x="0"
                                            y="0"
                                            width="4"
                                            height="4"
                                            className="text-[color:var(--accent)]"
                                            fill="currentColor"
                                        />
                                    </pattern>
                                </defs>
                                <rect
                                    width="404"
                                    height="404"
                                    fill="url(#hero-pattern)"
                                />
                            </svg>
                            <Badge badge="Tech Stack" />
                            <div className="flex flex-col gap-4">
                                <div className="rounded-xl overflow-hidden bg-white/80 p-6 backdrop-blur-md shadow-md">
                                    <LogosCarousel />
                                </div>
                                <div className="rounded-xl overflow-hidden bg-white/80 p-6 backdrop-blur-md shadow-md">
                                    <p className="text-lg font-bold mb-2">
                                        Tech stack I&apos;m familiar with
                                    </p>
                                    <p className="text-sm text-[color:var(--text-secondary)]">
                                        I work a lot in the JavaScript
                                        ecosystem, however, I am eager to learn
                                        new technologies
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}
