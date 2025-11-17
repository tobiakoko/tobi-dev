import { Outlet } from 'react-router'
import Footer from '~/components/Footer'
import Header from '~/components/Header'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router'

export default function Layout() {
    const location = useLocation()

    return (
        <div className="flex flex-col min-h-screen bg-[color:var(--background)]">
            <Header />

            <AnimatePresence mode="wait">
                <motion.main
                    key={location.pathname}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-grow"
                >
                    <Outlet />
                </motion.main>
            </AnimatePresence>

            <Footer />
        </div>
    )
}
