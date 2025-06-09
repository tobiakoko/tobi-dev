import { motion } from 'framer-motion'
import { Link } from 'react-router'
import { contactInfo } from '~/welcome/about'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/tobiakoko',
            icon: 'github',
        },
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/daniel-akoko',
            icon: 'linkedin',
        },
    ]

    const footerLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Books', path: '/books' },
        { name: 'Contact', path: '/contact' },
    ]

    const SocialIcon = ({ type }: { type: string }) => {
        if (type === 'github') {
            return (
                <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
            )
        } else if (type === 'linkedin') {
            return (
                <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            )
        } else if (type === 'twitter') {
            return (
                <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
            )
        }
        return null
    }

    return (
        <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-100">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0.5 }}
                            className="mb-6"
                        >
                            <h2 className="text-xl font-bold font-futura text-[color:var(--primary-foreground)] mb-1">
                                Daniel Akoko
                            </h2>
                            <p className="text-sm text-[color:var(--secondary-foreground)]">
                                Software Engineer
                            </p>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            className="text-[color:var(--secondary-foreground)] mb-6 text-xs"
                        >
                            Building elegant, user-centric digital experiences
                            with modern web technologies.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.5 }}
                            className="flex space-x-4"
                        >
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-200 hover:text-[color:var(--accent-foreground)] p-2 rounded-full transition-colors duration-300 hover:bg-[color:(rgb(106,126,255))] text-[color:var(--secondary-foreground)]"
                                    aria-label={link.name}
                                >
                                    <SocialIcon type={link.icon} />
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    <div>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0.5 }}
                            className="text-base font-semibold font-futura text-gray-900 mb-6"
                        >
                            Quick Links
                        </motion.h3>
                        <motion.nav
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <ul className="space-y-3">
                                {footerLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.path}
                                            className="text-sm text-gray-600 hover:text-[color:var(--accent-foreground)] transition-colors duration-300"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.nav>
                    </div>

                    <div>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0.5 }}
                            className="text-base font-semibold font-futura text-[color:var(--primary-foreground)] mb-6"
                        >
                            Get In Touch
                        </motion.h3>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            className="space-y-3"
                        >
                            <p className="text-sm text-[color:var(--secondary-foreground)]">
                                Want to collaboration or just chat?
                            </p>
                            <p className="text-sm text-[color:var(--secondary-foreground)]">
                            <Link
                                to={`mailto:${contactInfo.email}`}
                                className="hover:underline"
                                style={{ color: 'var(--badge-text)' }}
                            >
                                {contactInfo.email}
                            </Link>
                            </p>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="pt-8 mt-8 border-t border-gray-200 text-center text-gray-500 text-xs flex items-center justify-center gap-5"
                >
                    <p>
                        &copy; {currentYear} Daniel Akoko. All rights reserved.
                    </p>
                    <p className="border-l-2 border-l-[color:var(--secondary-foreground)] pl-5">
                        Powered by too much coffee
                    </p>
                </motion.div>
            </div>
        </footer>
    )
}
