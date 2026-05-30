import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from './ui'
import { useInView } from 'react-intersection-observer'
import { HiCode, HiFolder, HiStar, HiClock } from 'react-icons/hi'

const stats = [
    { icon: <HiFolder className="text-xl" />, value: 5, suffix: '+', label: 'Projects Built' },
    { icon: <HiCode className="text-xl" />, value: 15, suffix: '+', label: 'Technologies' },
    { icon: <HiStar className="text-xl" />, value: 3, suffix: '', label: 'Certifications' },
    { icon: <HiClock className="text-xl" />, value: 2, suffix: '+', label: 'Years Coding' },
]

function AnimatedCounter({ value, suffix, inView }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!inView) return
        let start = 0
        const duration = 2000
        const step = Math.max(1, Math.ceil(value / (duration / 16)))
        const timer = setInterval(() => {
            start += step
            if (start >= value) {
                setCount(value)
                clearInterval(timer)
            } else {
                setCount(start)
            }
        }, 16)
        return () => clearInterval(timer)
    }, [inView, value])

    return (
        <span className="text-3xl md:text-4xl font-extrabold text-gradient">
            {count.toLocaleString()}{suffix}
        </span>
    )
}

export default function Stats() {
    const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

    return (
        <div ref={ref} className="relative z-10 py-16 px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto">
                <div className="glass-card rounded-3xl p-8 md:p-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: i * 0.15, duration: 0.5 }}
                                className="text-center group"
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent-500/10 text-accent-400 mb-4 group-hover:bg-accent-500/20 transition-colors">
                                    {stat.icon}
                                </div>
                                <div className="mb-1">
                                    <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
                                </div>
                                <p className="text-dark-400 text-sm font-medium">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
