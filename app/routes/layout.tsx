import { Outlet } from 'react-router'
import Footer from '~/components/Footer'
import Header from '~/components/Header'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router'

export default function Layout() {
    const location = useLocation()

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />

            <AnimatePresence mode="wait">
                <motion.main
                    key={location.pathname}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex-grow"
                >
                    <Outlet />
                </motion.main>
            </AnimatePresence>

            <Footer />
        </div>
    )
}
