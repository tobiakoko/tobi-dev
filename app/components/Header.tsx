import { NavLink } from 'react-router'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from '~/assets/portfolio-logo.png'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    
    return (
        <motion.header
            className={`fixed bg-[color:var(--background)]/95 backdrop-blur-md z-50 flex justify-between items-center w-full px-6 md:px-12 py-6 top-0 transition-all duration-300 border-b ${scrolled ? 'shadow-md border-[color:var(--border)]' : 'border-transparent'}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
            <div className="logo">
                <NavLink
                    to="/"
                    className="text-2xl font-bold text-[color:var(--accent)] no-underline tracking-tight font-mono hover:opacity-80 transition-opacity"
                    viewTransition
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-2"
                    >
                        <span className="text-[color:var(--accent)]">&lt;</span>
                        DA
                        <span className="text-[color:var(--accent)]">/&gt;</span>
                    </motion.span>
                </NavLink>
            </div>

            <div
                className="md:hidden flex flex-col justify-between w-6 h-5 cursor-pointer z-50"
                onClick={toggleMenu}
            >
                <motion.span
                    animate={
                        isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
                    }
                    className="h-0.5 w-full bg-[color:var(--accent)] rounded-full"
                />
                <motion.span
                    animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="h-0.5 w-full bg-[color:var(--accent)] rounded-full"
                />
                <motion.span
                    animate={
                        isMenuOpen
                            ? { rotate: -45, y: -8 }
                            : { rotate: 0, y: 0 }
                    }
                    className="h-0.5 w-full bg-[color:var(--accent)] rounded-full"
                />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
                <ul className="flex items-center gap-10 list-none">
                    {[
                        { name: 'About', num: '01' },
                        { name: 'Projects', num: '02' },
                        { name: 'Contact', num: '03' },
                    ].map((item, idx) => (
                        <li key={item.name}>
                            <NavLink
                                to={`/${item.name.toLowerCase()}`}
                                className={({ isActive }) =>
                                    `text-[color:var(--text-secondary)] no-underline font-medium text-sm relative transition-colors duration-200 hover:text-[color:var(--accent)] flex items-center gap-2
                  ${isActive ? 'text-[color:var(--accent)]' : ''}`
                                }
                            >
                                <span className="font-mono text-[color:var(--accent)] text-xs">{item.num}.</span>
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                    <li>
                        <a
                            href="/resume.pdf"
                            className="px-5 py-2.5 rounded border border-[color:var(--accent)] text-[color:var(--accent)] font-medium text-sm hover:bg-[color:var(--badge-bg)] transition-all duration-200"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.nav
                        className="fixed inset-x-0 top-0 bg-[color:var(--background)]/98 backdrop-blur-lg flex items-center justify-center z-40 h-screen w-full"
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                    >
                        <ul className="flex flex-col gap-8 text-center">
                            {[
                                { name: 'About', num: '01' },
                                { name: 'Projects', num: '02' },
                                { name: 'Contact', num: '03' },
                            ].map((item, i) => (
                                <motion.li
                                    key={item.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 + 0.2 }}
                                >
                                    <NavLink
                                        to={`/${item.name.toLowerCase()}`}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={({ isActive }) =>
                                            `text-[color:var(--text-primary)] no-underline font-medium text-lg flex items-center justify-center gap-3 hover:text-[color:var(--accent)] transition-colors
                      ${isActive ? 'text-[color:var(--accent)]' : ''}`
                                        }
                                    >
                                        <span className="font-mono text-[color:var(--accent)] text-sm">{item.num}.</span>
                                        {item.name}
                                    </NavLink>
                                </motion.li>
                            ))}
                            <motion.li
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <a
                                    href="/resume.pdf"
                                    className="inline-block px-8 py-3 rounded border border-[color:var(--accent)] text-[color:var(--accent)] font-medium text-sm hover:bg-[color:var(--badge-bg)] transition-all mt-4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Resume
                                </a>
                            </motion.li>
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.header>
    )
}
