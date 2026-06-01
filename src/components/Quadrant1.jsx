import { motion } from 'framer-motion'
import { SectionHeading } from './ui'

const educationList = [
    {
        degree: "B.E. Computer Science and Engineering",
        institution: "Dr. N.G.P. Institute of Technology, Coimbatore",
        duration: "2023 – 2027",
        details: "Currently pursuing a Bachelor of Engineering in CSE, focusing on full-stack development, MERN stack, AI, and mobile app development."
    },
    {
        degree: "Higher Secondary Education (HSC)",
        institution: "Cheran Matric Higher Secondary School",
        duration: "2023",
        details: "Completed higher secondary education with a strong academic foundation (84%) and keen interest in computer science and technology."
    },
    {
        degree: "Secondary School Education (SSLC)",
        institution: "Cheran Matric Higher Secondary School",
        duration: "2021",
        details: "Completed secondary school education and discovered a passion for programming and problem-solving."
    }
]

const certifications = [
    {
        name: "Generative AI: Working with Large Language Models",
        issuer: "Coursera / DeepLearning.AI",
        date: "May 2026",
    },
    {
        name: "Cloud Computing Certification",
        issuer: "NPTEL",
        date: "2025",
    },
    {
        name: "Industrial Internet of Things (IIoT)",
        issuer: "Certified",
        date: "December 2025",
    },
    {
        name: "National Seminar — In-Vehicle Intrusion Detection System",
        issuer: "Tackling the Vulnerabilities",
        date: "Certified",
    }
]

export default function Quadrant1() {
    return (
        <div className="max-w-4xl mx-auto animate-in fade-in duration-700">
            <SectionHeading title="Education & Certifications" subtitle="Academic background and continuous learning" />
            
            <div className="space-y-16 mt-12">
                {/* Education */}
                <div>
                    <h3 className="text-2xl font-heading mb-8 flex items-center gap-4 text-white">
                        <span className="w-8 h-px bg-white/30" />
                        Education
                    </h3>
                    <div className="space-y-6 pl-12 border-l border-white/10 relative">
                        {educationList.map((edu, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="relative"
                            >
                                <div className="absolute -left-[53px] top-1.5 w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                    <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                                    <p className="text-gray-300 font-medium mb-1">{edu.institution}</p>
                                    <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">{edu.duration}</p>
                                    <p className="text-gray-400">{edu.details}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Certifications */}
                <div>
                    <h3 className="text-2xl font-heading mb-8 flex items-center gap-4 text-white">
                        <span className="w-8 h-px bg-white/30" />
                        Certifications
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {certifications.map((cert, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 + 0.3 }}
                                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                <h4 className="text-lg font-bold text-white mb-2 leading-tight">{cert.name}</h4>
                                <p className="text-gray-400 text-sm mb-4">{cert.issuer}</p>
                                <div className="inline-block px-3 py-1 rounded-full border border-white/20 text-xs tracking-widest uppercase text-gray-300">
                                    {cert.date}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
