import { motion } from 'framer-motion'

export default function Loader() {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-dark-950"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
            <div className="flex flex-col items-center gap-6">
                {/* Animated logo */}
                <motion.div
                    className="relative"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center">
                        <span className="text-white font-bold text-2xl">P</span>
                    </div>
                    {/* Orbiting ring */}
                    <motion.div
                        className="absolute inset-[-8px] rounded-2xl border-2 border-accent-500/30"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    />
                </motion.div>

                {/* Loading bar */}
                <div className="w-48 h-1 bg-dark-800 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-accent-500 to-accent-300 rounded-full"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1.8, ease: 'easeInOut' }}
                    />
                </div>

                <motion.p
                    className="text-dark-400 text-sm tracking-widest uppercase"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    Loading
                </motion.p>
            </div>
        </motion.div>
    )
}
