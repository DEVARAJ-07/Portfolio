import { motion } from 'framer-motion'
import { SectionHeading } from './ui'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const links = [
    { name: 'LinkedIn', icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/devarajvetrii/' },
    { name: 'GitHub', icon: <FaGithub />, href: 'https://github.com/DEVARAJ-07' },
    { name: 'LeetCode', icon: <SiLeetcode />, href: 'https://leetcode.com/u/DEVARAJ_lc_07/' },
    { name: 'Email', icon: <FaEnvelope />, href: 'mailto:dearajsubramani20@gmail.com' },
]

export default function Quadrant4() {
    return (
        <div className="max-w-4xl mx-auto animate-in fade-in duration-700">
            <SectionHeading title="Connect With Me" subtitle="Find me across the web" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16">
                {links.map((link, i) => (
                    <motion.a
                        key={i}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="group flex flex-col items-center justify-center p-12 rounded-3xl bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all duration-500"
                    >
                        <div className="text-5xl mb-6 text-white group-hover:text-black transition-colors duration-500">
                            {link.icon}
                        </div>
                        <h3 className="text-xl font-heading tracking-widest uppercase">{link.name}</h3>
                    </motion.a>
                ))}
            </div>
        </div>
    )
}
