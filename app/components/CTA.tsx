import { Link } from "react-router";
import { motion } from "framer-motion";
import { contactInfo } from "~/welcome/about";


export default function CTA() {
    return (
        <motion.section
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.3 }}
                className="py-24 px-6 md:px-10"
            >
                <div className="max-w-6xl mx-auto bg-[rgba(245,245,253,0.5)] backdrop-blur-sm rounded-2xl [box-shadow:inset_0_0_302px_#8092ff4d] border border-[color:var(--badge-border)] text-[color:var(--badge-text)] font-futura p-8 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                    <div className="relative px-8 md:px-12 py-16 md:py-20">
                        <div className="absolute top-0 right-0 -mt-20 -mr-20 opacity-20">
                            <svg
                                width="404"
                                height="404"
                                fill="none"
                                viewBox="0 0 404 404"
                            >
                                <defs>
                                    <pattern
                                        id="pattern-circles"
                                        x="0"
                                        y="0"
                                        width="20"
                                        height="20"
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <circle
                                            cx="10"
                                            cy="10"
                                            r="8"
                                            className="text-white"
                                            fill="currentColor"
                                        />
                                    </pattern>
                                </defs>
                                <rect
                                    width="404"
                                    height="404"
                                    fill="url(#pattern-circles)"
                                />
                            </svg>
                        </div>

                        <div className="relative text-center md:text-left md:flex md:items-center md:justify-between">
                            <div className="mb-8 md:mb-0 md:max-w-2xl">
                                <h2 className="text-2xl md:text-4xl font-serif font-bold mb-4">
                                    I know you&apos;re curious
                                </h2>
                                <p className="text-md md:text-sm">
                                    Reach out. I look forward to connecting!
                                </p>
                            </div>
                            <Link
                                to={`mailto:${contactInfo.email}`}
                                className="inline-block px-6 py-3 hover:px-8 hover:py-4 rounded-lg bg-[color:var(--secondary)] text-[color:var(--badge-border)] border hover:border-none hover:text-[color:var(--accent-foreground)] hover:bg-[rgb(186,195,255)] font-medium font-futura transition-all duration-300 hover:shadow-xl"
                            >
                                Send me an email
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.section>
    );
}