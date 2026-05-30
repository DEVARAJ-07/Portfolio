import { ScrollReveal, Container } from './ui'
import { HiSparkles } from 'react-icons/hi'
import { FaCertificate, FaCloud, FaIndustry } from 'react-icons/fa'
import { motion } from 'framer-motion'

const certifications = [
    {
        title: 'Cloud Computing Certification',
        issuer: 'NPTEL — 2025',
        icon: <FaCloud />,
        color: 'from-sky-500/10 to-blue-500/10',
    },
    {
        title: 'Industrial Internet of Things (IIoT)',
        issuer: 'Certified — December 2025',
        icon: <FaIndustry />,
        color: 'from-emerald-500/10 to-teal-500/10',
    },
    {
        title: 'National Seminar — In-Vehicle Intrusion Detection System',
        issuer: 'Tackling the Vulnerabilities',
        icon: <FaCertificate />,
        color: 'from-violet-500/10 to-purple-500/10',
    },
]

const interests = [
    'Mobile App Development',
    'MERN Stack Technologies',
    'Backend Development',
    'Artificial Intelligence (AI)',
    'Machine Learning',
    'Workflow Automation (n8n)',
]

export default function Certifications() {
    return (
        <Container id="certifications">
            <div className="text-center mb-16">
                <ScrollReveal>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-accent-400 text-xs font-medium mb-4 uppercase tracking-widest">
                        <HiSparkles />
                        <span>Achievements</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-gradient">Certifications & Interests</span>
                    </h2>
                    <p className="text-dark-300 max-w-2xl mx-auto text-lg">
                        Courses, hackathons, and areas I'm passionate about
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-cyan-400 mx-auto mt-6 rounded-full" />
                </ScrollReveal>
            </div>

            {/* Certifications Grid */}
            <div className="grid sm:grid-cols-2 gap-5 mb-16">
                {certifications.map((cert, i) => (
                    <ScrollReveal key={i} delay={i * 0.1}>
                        <motion.div
                            whileHover={{ y: -4 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            className="glass-card rounded-2xl p-6 hover:border-accent-500/20 transition-all duration-300 group flex gap-4 items-start"
                        >
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-accent-400 shrink-0 group-hover:scale-110 transition-transform`}>
                                {cert.icon}
                            </div>
                            <div>
                                <h3 className="text-base font-semibold text-dark-100 group-hover:text-accent-400 transition-colors">
                                    {cert.title}
                                </h3>
                                <p className="text-dark-400 text-sm mt-1">{cert.issuer}</p>
                            </div>
                        </motion.div>
                    </ScrollReveal>
                ))}
            </div>

            {/* Areas of Interest */}
            <ScrollReveal>
                <h3 className="text-lg font-semibold text-dark-200 mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    Areas of Interest
                </h3>
                <div className="flex flex-wrap gap-3">
                    {interests.map((interest) => (
                        <motion.span
                            key={interest}
                            whileHover={{ scale: 1.05 }}
                            className="px-5 py-2.5 glass-card rounded-2xl text-sm font-medium text-dark-200 hover:text-accent-400 hover:border-accent-500/20 transition-all duration-300 cursor-default"
                        >
                            {interest}
                        </motion.span>
                    ))}
                </div>
            </ScrollReveal>
        </Container>
    )
}
