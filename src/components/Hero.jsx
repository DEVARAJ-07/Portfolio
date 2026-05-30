import { motion } from 'framer-motion'
import { HiCode } from 'react-icons/hi'

const heroRoles = [
    'Full Stack Developer',
    'AI & ML Engineer',
    'Mobile App Developer',
]

export default function Hero() {
    const handleScroll = (href) => {
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center px-6 z-10"
        >
            {/* Background gradient orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-accent-500/[0.03] blur-[100px]" />
                <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-400/[0.03] blur-[100px]" />
            </div>

            <div className="max-w-4xl mx-auto text-center relative">
                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6"
                >
                    <span className="text-dark-100">Hi, I'm </span>
                    <span className="bg-gradient-to-r from-cyan-200 via-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
                        DEVARAJ S
                    </span>
                </motion.h1>

                {/* Role chips */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    className="mb-8"
                >
                    <div className="inline-flex flex-wrap items-center justify-center gap-3">
                        {heroRoles.map((role) => (
                            <span
                                key={role}
                                className="px-4 py-2 rounded-full glass-card text-sm sm:text-base font-medium text-dark-100 border border-accent-500/15"
                            >
                                {role}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-dark-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    I'm DEVARAJ S, an aspiring Full Stack Developer and Mobile App Developer with Flutter technologies, currently pursuing
                    Computer Science Engineering. Passionate about solving real‑world problems through clean and efficient code.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.55 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button
                        onClick={() => handleScroll('#projects')}
                        className="group relative px-8 py-3.5 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-accent-500/25"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            View Projects
                            <span className="transition-transform group-hover:translate-x-1">→</span>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                    <button
                        onClick={() => handleScroll('#contact')}
                        className="group px-8 py-3.5 glass-card text-dark-200 font-semibold rounded-2xl hover:text-accent-400 hover:border-accent-500/30 transition-all duration-300 cursor-pointer hover:scale-105"
                    >
                        <span className="flex items-center gap-2">
                            Contact Me
                            <HiCode className="text-dark-500 group-hover:text-accent-400 transition-colors" />
                        </span>
                    </button>
                </motion.div>
            </div>
        </section>
    )
}

