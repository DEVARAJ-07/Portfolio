import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#hero"
                    onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="flex items-center gap-3 text-xl font-bold tracking-tight group"
                >
                    <div className="w-10 h-10 rounded-2xl bg-black border border-white/20 flex items-center justify-center overflow-hidden">
                        <img src={`${import.meta.env.BASE_URL}vite.svg.png`} alt="Portfolio logo" className="w-8 h-8 object-contain grayscale" />
                    </div>
                    <span className="text-white font-arabic text-2xl tracking-wide">
                        Portfolio
                    </span>
                </a>
            </div>
        </motion.nav>
    )
}
