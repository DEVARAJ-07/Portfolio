import { motion } from 'framer-motion'
import { HiCode } from 'react-icons/hi'
const heroRoles = [
    'Full Stack Developer',
    'Cloud Engineer',
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
            {/* Background gradient orbs - Removed to keep it strictly B&W */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-white/[0.02] blur-[100px]" />
                <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-white/[0.02] blur-[100px]" />
            </div>

            <div className="max-w-4xl mx-auto text-center relative">
                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-white"
                >
                    <span className="text-gray-300">Hi, I'm </span>
                    <span>
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
                                className="px-4 py-2 rounded-full border border-white/20 text-sm sm:text-base font-medium text-white"
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
                    className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    I'm DEVARAJ S, an aspiring Full Stack Developer and Mobile App Developer with Flutter technologies, currently pursuing
                    Computer Science Engineering. Passionate about solving real‑world problems through clean and efficient code.
                </motion.p>
            </div>
        </section>
    )
}
