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
            className={`fixed bg-white/90 backdrop-blur-lg z-50 flex justify-between items-center w-full px-6 md:px-10 py-4 top-0 transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
            <div className="logo">
                <NavLink
                    to="/"
                    className="text-2xl font-bold text-[color:var(--primary-foreground)] no-underline tracking-tight"
                    viewTransition
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <img src={Logo} alt="Logo" className="size-12 rounded-full hover:drop-shadow-2xl hover:shadow-[color:var(--badge-border)]" />
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
                    className="h-0.5 w-full bg-[color:var(--secondary-foreground)] rounded-full"
                />
                <motion.span
                    animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="h-0.5 w-full bg-[color:var(--secondary-foreground)] rounded-full"
                />
                <motion.span
                    animate={
                        isMenuOpen
                            ? { rotate: -45, y: -8 }
                            : { rotate: 0, y: 0 }
                    }
                    className="h-0.5 w-full bg-[color:var(--secondary-foreground)] rounded-full"
                />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
                <ul className="flex gap-8 list-none">
                    {[
                        'Home',
                        'About',
                        'Books',
                        'Contact',
                    ].map((item) => (
                        <li key={item}>
                            <NavLink
                                to={
                                    item === 'Home'
                                        ? '/'
                                        : `/${item.toLowerCase()}`
                                }
                                className={({ isActive }) =>
                                    `text-gray-700 no-underline font-medium text-sm relative transition-colors duration-300 hover:text-[color:var(--accent-foreground)] 
                  ${isActive ? 'text-[color:var(--accent-foreground)]' : ''}`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {item}
                                        {isActive && (
                                            <motion.div
                                                className="absolute -bottom-1 left-0 w-full h-0.5 bg-[color:var(--accent-foreground)] rounded-full"
                                                layoutId="underline"
                                            />
                                        )}
                                    </>
                                )}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.nav
                        className="fixed inset-x-0 top-0 bg-white/95 backdrop-blur-xl flex items-center justify-center z-40 h-screen w-full"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                    >
                        <ul className="flex flex-col gap-6 text-center pt-5">
                            {[
                                'Home',
                                'About',
                                'Books',
                                'Contact',
                            ].map((item, i) => (
                                <motion.li
                                    key={item}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <NavLink
                                        to={
                                            item === 'Home'
                                                ? '/'
                                                : `/${item.toLowerCase()}`
                                        }
                                        onClick={() => setIsMenuOpen(false)}
                                        className={({ isActive }) =>
                                            `text-gray-800 no-underline font-medium text-sm px-0 py-2 hover:text-[color:var(--accent-foreground)]
                      ${isActive ? 'text-[color:var(--accent-foreground)]' : ''}`
                                        }
                                    >
                                        {item}
                                    </NavLink>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.header>
    )
}
