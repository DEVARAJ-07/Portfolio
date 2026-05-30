import { useState } from 'react'
import { motion } from 'framer-motion'
import { ScrollReveal, Container } from './ui'
import { HiMail, HiUser, HiChat, HiPaperAirplane, HiSparkles, HiCheckCircle, HiExclamationCircle } from 'react-icons/hi'
import emailjs from '@emailjs/browser'

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState('idle') // idle | sending | success | error
    const [focused, setFocused] = useState(null)
    const [mailtoFallback, setMailtoFallback] = useState(null)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('sending')
        setMailtoFallback(null)

        const serverEndpoint = import.meta.env.VITE_SERVERLESS_ENDPOINT || '/.netlify/functions/send-email'
        const recipientEmail = import.meta.env.VITE_CONTACT_EMAIL || 'devarajsubramani20@gmail.com'
        const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || ''
        const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''
        const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''

        const sendViaServerless = async () => {
            try {
                const response = await fetch(serverEndpoint, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        message: formData.message,
                        subject: `Portfolio Contact: Message from ${formData.name}`,
                        to: recipientEmail,
                    }),
                })

                const result = await response.json().catch(() => null)
                if (response.ok) {
                    setStatus('success')
                    setFormData({ name: '', email: '', message: '' })
                    setTimeout(() => setStatus('idle'), 5000)
                    return true
                }

                console.error('Serverless email failed', response.status, result)
                return false
            } catch (err) {
                console.error('Serverless request failed', err)
                return false
            }
        }

        const sendViaEmailJS = async () => {
            try {
                if (!emailjsServiceId || !emailjsTemplateId || !emailjsPublicKey) {
                    return false
                }

                const templateParams = {
                    from_name: formData.name,
                    from_email: formData.email,
                    reply_to: formData.email,
                    sender_name: formData.name,
                    sender_email: formData.email,
                    to_name: 'Devaraj S',
                    to_email: recipientEmail,
                    subject: `Portfolio Contact: Message from ${formData.name}`,
                    message: formData.message,
                }

                const response = await emailjs.send(emailjsServiceId, emailjsTemplateId, templateParams, emailjsPublicKey)
                console.log('EmailJS response', response)
                setStatus('success')
                setFormData({ name: '', email: '', message: '' })
                setTimeout(() => setStatus('idle'), 5000)
                return true
            } catch (err) {
                console.error('EmailJS send failed', err)
                return false
            }
        }

        let sent = false
        if (emailjsServiceId && emailjsTemplateId && emailjsPublicKey) {
            sent = await sendViaEmailJS()
        }

        if (!sent) {
            sent = await sendViaServerless()
        }

        if (!sent) {
            setStatus('error')
            setMailtoFallback({
                subject: `Portfolio Contact: Message from ${formData.name || 'Visitor'}`,
                body: `Name: ${formData.name || ''}%0AEmail: ${formData.email || ''}%0A%0A${encodeURIComponent(formData.message || '')}`,
            })
            setTimeout(() => setStatus('idle'), 4000)
        }
    }

    return (
        <Container id="contact" className="bg-dark-900/30">
            <div className="text-center mb-16">
                <ScrollReveal>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-accent-400 text-xs font-medium mb-4 uppercase tracking-widest">
                        <HiSparkles />
                        <span>Contact</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-gradient">Get In Touch</span>
                    </h2>
                    <p className="text-dark-300 max-w-2xl mx-auto text-lg">
                        Have a question or want to work together? Drop me a message!
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-cyan-400 mx-auto mt-6 rounded-full" />
                </ScrollReveal>
            </div>

            <div className="max-w-2xl mx-auto">
                <ScrollReveal>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Name */}
                        <div className={`relative group rounded-2xl transition-all duration-300 ${focused === 'name' ? 'shadow-[0_0_20px_rgba(99,102,241,0.1)]' : ''}`}>
                            <HiUser className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${focused === 'name' ? 'text-accent-400' : 'text-dark-500'}`} />
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                onFocus={() => setFocused('name')}
                                onBlur={() => setFocused(null)}
                                className="w-full pl-12 pr-4 py-4 glass-card rounded-2xl text-dark-100 placeholder:text-dark-500 focus:outline-none focus:border-accent-500/30 transition-all duration-300 bg-transparent"
                            />
                        </div>

                        {/* Email */}
                        <div className={`relative group rounded-2xl transition-all duration-300 ${focused === 'email' ? 'shadow-[0_0_20px_rgba(99,102,241,0.1)]' : ''}`}>
                            <HiMail className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${focused === 'email' ? 'text-accent-400' : 'text-dark-500'}`} />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                onFocus={() => setFocused('email')}
                                onBlur={() => setFocused(null)}
                                className="w-full pl-12 pr-4 py-4 glass-card rounded-2xl text-dark-100 placeholder:text-dark-500 focus:outline-none focus:border-accent-500/30 transition-all duration-300 bg-transparent"
                            />
                        </div>

                        {/* Message */}
                        <div className={`relative group rounded-2xl transition-all duration-300 ${focused === 'message' ? 'shadow-[0_0_20px_rgba(99,102,241,0.1)]' : ''}`}>
                            <HiChat className={`absolute left-4 top-5 transition-colors duration-300 ${focused === 'message' ? 'text-accent-400' : 'text-dark-500'}`} />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows={5}
                                required
                                value={formData.message}
                                onChange={handleChange}
                                onFocus={() => setFocused('message')}
                                onBlur={() => setFocused(null)}
                                className="w-full pl-12 pr-4 py-4 glass-card rounded-2xl text-dark-100 placeholder:text-dark-500 focus:outline-none focus:border-accent-500/30 transition-all duration-300 bg-transparent resize-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={status === 'sending' || status === 'success'}
                            className={`w-full py-4 rounded-2xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 relative overflow-hidden cursor-pointer group ${status === 'success'
                                    ? 'bg-green-500/80'
                                    : status === 'error'
                                        ? 'bg-red-500/80'
                                        : 'bg-gradient-to-r from-accent-500 to-accent-600'
                                }`}
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-accent-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            {status === 'sending' && (
                                <span className="relative z-10 flex items-center gap-2">
                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                    </svg>
                                    Sending...
                                </span>
                            )}
                            {status === 'success' && (
                                <span className="relative z-10 flex items-center gap-2">
                                    <HiCheckCircle className="text-lg" />
                                    Message Sent Successfully!
                                </span>
                            )}
                            {status === 'error' && (
                                <span className="relative z-10 flex items-center gap-2">
                                    <HiExclamationCircle className="text-lg" />
                                    Failed — Try Again
                                </span>
                            )}
                            {status === 'idle' && (
                                <span className="relative z-10 flex items-center gap-2">
                                    Send Message
                                    <HiPaperAirplane className="rotate-90" />
                                </span>
                            )}
                        </motion.button>
                    </form>

                    {/* Email info removed per request */}
                    {mailtoFallback && (
                        <div className="mt-6 text-center">
                            <p className="text-dark-400 mb-3">Automatic sending failed — you can send the message using your email client:</p>
                            <a
                                href={`mailto:devarajsubramani20@gmail.com?subject=${encodeURIComponent(mailtoFallback.subject)}&body=${mailtoFallback.body}`}
                                className="inline-block px-6 py-3 rounded-2xl glass-card text-dark-100 hover:text-accent-400 transition-all duration-300"
                            >
                                Open Email Client
                            </a>
                        </div>
                    )}
                </ScrollReveal>
            </div>
        </Container>
    )
}
