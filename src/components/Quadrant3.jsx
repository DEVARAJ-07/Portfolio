import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeading } from './ui'
import { HiCheck } from 'react-icons/hi'

export default function Quadrant3() {
    const [focused, setFocused] = useState(null)
    const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'done'
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('sending')
        
        try {
            const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    service_id: 'service_gr5o9ns',
                    template_id: 'template_9shhc5j',
                    user_id: 'BiItNMUEjuhU_Znzk',
                    template_params: {
                        name: formData.name,
                        from_name: formData.name,
                        sender_name: formData.name,
                        user_name: formData.name,
                        
                        email: formData.email,
                        from_email: formData.email,
                        sender_email: formData.email,
                        user_email: formData.email,
                        email_address: formData.email,
                        reply_to: formData.email,
                        
                        message: formData.message,
                    }
                })
            })

            if (response.ok) {
                setStatus('done')
            } else {
                console.error('Failed to send email:', await response.text())
                // Still show done or error? Let's just reset to idle if it fails
                setStatus('idle')
                alert("Failed to send message. Please try again.")
                return
            }
            
            // Reset form after a while
            setTimeout(() => {
                setStatus('idle')
                setFormData({ name: '', email: '', message: '' })
            }, 3000)
        } catch (error) {
            console.error('Error sending email:', error)
            setStatus('idle')
            alert("Network error. Please try again later.")
        }
    }

    return (
        <div className="max-w-2xl mx-auto animate-in fade-in duration-700">
            <SectionHeading title="Contact Me" subtitle="Get in touch" />
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(255,255,255,0.05)] relative overflow-hidden"
            >
                <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2">
                        <label className="text-gray-300 text-sm font-heading tracking-widest uppercase ml-1">
                            Your Name
                        </label>
                        <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-white/50 focus:bg-white/5 focus:outline-none transition-all"
                            disabled={status !== 'idle'}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-gray-300 text-sm font-heading tracking-widest uppercase ml-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-white/50 focus:bg-white/5 focus:outline-none transition-all"
                            disabled={status !== 'idle'}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-gray-300 text-sm font-heading tracking-widest uppercase ml-1">
                            Your Message
                        </label>
                        <textarea
                            required
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-white/50 focus:bg-white/5 focus:outline-none transition-all resize-none"
                            disabled={status !== 'idle'}
                        />
                    </div>

                    <div className="relative h-14 mt-6">
                        <AnimatePresence mode="wait">
                            {status === 'idle' && (
                                <motion.button 
                                    key="idle"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 w-full rounded-full border-2 border-white text-white font-heading uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-black transition-colors"
                                >
                                    Send Message
                                </motion.button>
                            )}
                            
                            {status === 'sending' && (
                                <motion.div 
                                    key="sending"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    className="absolute inset-0 flex items-center justify-center gap-3"
                                >
                                    {/* CPU Processing 3D Animation */}
                                    <div className="flex items-center gap-2">
                                        {[0, 1, 2].map((i) => (
                                            <motion.div
                                                key={i}
                                                animate={{ 
                                                    scaleY: [1, 2, 1],
                                                    opacity: [0.5, 1, 0.5] 
                                                }}
                                                transition={{ 
                                                    duration: 0.8, 
                                                    repeat: Infinity, 
                                                    delay: i * 0.2 
                                                }}
                                                className="w-1.5 h-4 bg-white rounded-full shadow-[0_0_10px_white]"
                                            />
                                        ))}
                                    </div>
                                    <span className="text-white font-heading uppercase tracking-[0.2em] text-sm animate-pulse">Processing...</span>
                                </motion.div>
                            )}

                            {status === 'done' && (
                                <motion.div 
                                    key="done"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 flex items-center justify-center gap-2 text-white font-heading uppercase tracking-[0.2em] text-sm"
                                >
                                    <HiCheck className="text-xl" /> Sent Successfully
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </form>
            </motion.div>
        </div>
    )
}
