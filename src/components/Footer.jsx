import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { motion } from 'framer-motion'

const socials = [
    { icon: <FaGithub size={18} />, href: 'https://github.com/DEVARAJ-07', label: 'GitHub' },
    { icon: <FaLinkedin size={18} />, href: 'https://www.linkedin.com/in/devarajvetrii/', label: 'LinkedIn' },
    { icon: <SiLeetcode size={18} />, href: 'https://leetcode.com/u/DEVARAJ_lc_07/', label: 'LeetCode' },
    { icon: <FaEnvelope size={18} />, href: 'mailto:devarajsubramani20@gmail.com', label: 'Email' },
]

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="relative z-10 border-t border-dark-800/30">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo */}
                    <div className="text-center md:text-left">
                        <a href="#hero" className="text-lg font-bold group">
                            <span className="text-gradient">Portfolio</span>
                        </a>
                        <p className="text-dark-500 text-sm mt-1">
                            Building the web, one pixel at a time.
                        </p>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-3">
                        {socials.map((s) => (
                            <motion.a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.label}
                                whileHover={{ y: -3, scale: 1.1 }}
                                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-dark-400 hover:text-accent-400 hover:border-accent-500/20 transition-all duration-300"
                            >
                                {s.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-dark-800/20 text-center">
                    <p className="text-dark-500 text-sm flex items-center justify-center gap-1">
                        © {year} DEVARAJ S. Made with
                        <FaHeart className="text-accent-500 text-xs" />
                        using React & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    )
}
