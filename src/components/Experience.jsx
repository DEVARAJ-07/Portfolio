import { motion } from 'framer-motion'
import { ScrollReveal, Container } from './ui'
import { HiSparkles } from 'react-icons/hi'
import {
    FaGraduationCap,
    FaLaptopCode,
    FaSchool,
    FaBookOpen,
} from 'react-icons/fa'

const leftItems = [
    {
        year: '2023 – 2027',
        title: 'B.E. Computer Science and Engineering',
        subtitle: 'Dr. N.G.P. Institute of Technology, Coimbatore',
        description: 'Currently pursuing a Bachelor of Engineering in CSE, focusing on full-stack development, MERN stack, AI, and mobile app development.',
        icon: <FaGraduationCap />,
    },
    {
        year: '2023',
        title: 'Higher Secondary Education (HSC)',
        subtitle: 'Cheran Matric Higher Secondary School — 84%',
        description: 'Completed higher secondary education with a strong academic foundation and keen interest in computer science and technology.',
        icon: <FaSchool />,
    },
    {
        year: '2021',
        title: 'Secondary School Education (SSLC)',
        subtitle: 'Cheran Matric Higher Secondary School',
        description: 'Completed secondary school education and discovered a passion for programming and problem-solving.',
        icon: <FaBookOpen />,
    },
]

const rightItems = [
    {
        year: '2024',
        title: 'Web Development Intern',
        subtitle: 'Sky Lena InfoTechnology Pvt. Ltd.',
        description: 'Gained hands-on experience in building responsive web pages and understanding real-world development workflows. Worked on improving UI design and application logic through practical tasks.',
        icon: <FaLaptopCode />,
    },
]

function TimelineCard({ item, delay = 0 }) {
    return (
        <ScrollReveal delay={delay}>
            <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="glass-card rounded-2xl p-6 hover:border-accent-500/20 transition-all duration-300 mb-6"
            >
                <span className="text-accent-400 text-xs font-semibold uppercase tracking-wider">
                    {item.year}
                </span>
                <h3 className="text-lg font-bold text-dark-100 mt-1">
                    {item.title}
                </h3>
                <p className="text-accent-300/60 text-sm font-medium">
                    {item.subtitle}
                </p>
                <p className="text-dark-400 text-sm mt-2 leading-relaxed">
                    {item.description}
                </p>
            </motion.div>
        </ScrollReveal>
    )
}

export default function Experience() {
    return (
        <Container id="experience" className="bg-dark-900/30">
            <div className="text-center mb-16">
                <ScrollReveal>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-accent-400 text-xs font-medium mb-4 uppercase tracking-widest">
                        <HiSparkles />
                        <span>My Journey</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-gradient">Experience & Education</span>
                    </h2>
                    <p className="text-dark-300 max-w-2xl mx-auto text-lg">
                        Key milestones that shaped my development career
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-cyan-400 mx-auto mt-6 rounded-full" />
                </ScrollReveal>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Left Column — Education */}
                <div>
                    <ScrollReveal>
                        <h3 className="text-lg font-semibold text-dark-200 mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-accent-500" />
                            Education
                        </h3>
                    </ScrollReveal>
                    {leftItems.map((item, i) => (
                        <TimelineCard key={i} item={item} delay={i * 0.1} />
                    ))}
                </div>

                {/* Right Column — Internship */}
                <div>
                    <ScrollReveal>
                        <h3 className="text-lg font-semibold text-dark-200 mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-cyan-400" />
                            Industrial Training
                        </h3>
                    </ScrollReveal>
                    {rightItems.map((item, i) => (
                        <TimelineCard key={i} item={item} delay={i * 0.1} />
                    ))}
                </div>
            </div>
        </Container>
    )
}
