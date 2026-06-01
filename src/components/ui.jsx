import { useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

/**
 * Reusable scroll-reveal animation wrapper
 */
export function ScrollReveal({
    children,
    direction = 'up',
    delay = 0,
    className = '',
    once = true,
}) {
    const [ref, inView] = useInView({
        threshold: 0.15,
        triggerOnce: once,
    })

    const variants = {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
        },
    }

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

/**
 * Section heading component
 */
export function SectionHeading({ title, subtitle }) {
    return (
        <div className="text-center mb-16">
            <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                    {title}
                </h2>
                {subtitle && (
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">{subtitle}</p>
                )}
                <div className="w-20 h-1 bg-white mx-auto mt-6 rounded-full" />
            </ScrollReveal>
        </div>
    )
}

/**
 * Container wrapper with consistent padding
 */
export function Container({ children, className = '', id }) {
    return (
        <section id={id} className={`py-24 px-6 md:px-12 lg:px-24 relative z-10 ${className}`}>
            <div className="max-w-6xl mx-auto">{children}</div>
        </section>
    )
}
