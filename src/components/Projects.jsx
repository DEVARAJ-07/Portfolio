import { motion } from 'framer-motion'
import { ScrollReveal, Container } from './ui'
import { HiExternalLink, HiSparkles } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

const projects = [
    {
        title: 'SmartEco 🌱 – Environmental Monitoring System',
        description:
            'An environmental monitoring system that tracks temperature, humidity, and pollution levels in real time. Features alert notifications when conditions cross safe limits, data visualization dashboard, and promotes eco-friendly awareness and sustainable living.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Python', 'MySQL', 'MongoDB'],
        liveUrl: '',
        githubUrl: 'https://github.com/DEVARAJ-07/SmartEco',
        gradient: 'from-emerald-500/10 to-teal-500/10',
    },
    {
        title: 'QuickBuy 🛒 – E-Commerce Web Application',
        description:
            'A modern e-commerce platform with user signup/login, product browsing, cart management, order placement, and downloadable PDF bill generation. Features a professional UI with authentication and user profile display.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js'],
        liveUrl: '',
        githubUrl: 'https://github.com/DEVARAJ-07/QuickBuy',
        gradient: 'from-cyan-500/10 to-blue-500/10',
    },
    {
        title: 'StudentBuddy – AI Powered Mentoring App',
        description:
            'A student support application with AI-based mentoring, personalized learning recommendations, and test features to support student growth and academic performance. Built with MERN stack and mobile-first approach.',
        tags: ['MERN Stack', 'Android Studio', 'Flutter', 'AI/ML'],
        liveUrl: '',
        githubUrl: 'https://github.com/DEVARAJ-07/StudentBuddy',
        gradient: 'from-violet-500/10 to-purple-500/10',
    },
    {
        title: 'ATM Simulation System 💳',
        description:
            'An ATM security system that detects faces, masks, and helmets in real time from camera feeds, streams annotated video and alerts to a web dashboard for monitoring, and includes tools for tracking model training and testing on images or webcam.',
        tags: ['Python', 'ML Model', 'YOLO'],
        liveUrl: '',
        githubUrl: 'https://github.com/DEVARAJ-07/ATM-Simulation-',
        gradient: 'from-sky-500/10 to-indigo-500/10',
    },
    {
        title: 'E-mail-Fraud-Detection',
        description:
            'E-mail Fraud Detection is a machine learning-based security system designed to identify fraudulent and phishing emails automatically. The system analyzes email content, links, sender details, and patterns to detect suspicious activities, helping users prevent scams, spam, and cyber threats effectively.',
        tags: ['Python', 'Machine Learning', 'Email Security'],
        liveUrl: '',
        githubUrl: 'https://github.com/DEVARAJ-07/E-mail-Fraud-Detection/tree/main/email-fraud-detector',
        gradient: 'from-amber-500/10 to-orange-500/10',
    },
    {
        title: 'Food Waste Management System',
        description:
            'A food waste management system aimed at reducing food wastage through organized tracking and management. Processes data using Python and provides a simple web interface for easy access and monitoring.',
        tags: ['Python', 'Excel', 'HTML', 'CSS'],
        liveUrl: '',
        githubUrl: 'https://github.com/DEVARAJ-07/Feed_the_need',
        gradient: 'from-orange-500/10 to-amber-500/10',
    },
]

function ProjectCard({ project, index }) {
    return (
        <ScrollReveal delay={index * 0.08}>
            <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group glass-card rounded-2xl overflow-hidden hover:border-accent-500/15 transition-all duration-500 h-full flex flex-col cursor-pointer"
            >
                {/* Image area */}
                <div className={`h-44 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-dark-800/40" />
                    <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: 'radial-gradient(circle, rgba(99,102,241,0.3) 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                    }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-dark-400/20 text-7xl font-black group-hover:text-dark-400/30 transition-all duration-500 group-hover:scale-110">
                            {String(index + 1).padStart(2, '0')}
                        </span>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-dark-950/70 opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center gap-4 backdrop-blur-sm">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl bg-accent-500 text-white hover:bg-accent-600 transition-colors hover:scale-110 transform duration-200"
                                aria-label="Live demo"
                            >
                                <HiExternalLink size={18} />
                            </a>
                        )}
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl bg-dark-700 text-white hover:bg-dark-600 transition-colors hover:scale-110 transform duration-200"
                                aria-label="View source on GitHub"
                            >
                                <FaGithub size={18} />
                            </a>
                        )}
                    </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-dark-100 mb-2 group-hover:text-accent-400 transition-colors duration-300">
                        {project.title}
                    </h3>
                    <p className="text-dark-400 text-sm leading-relaxed mb-4 flex-1">
                        {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 text-xs font-medium rounded-full bg-accent-500/8 text-accent-300 border border-accent-500/10"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </ScrollReveal>
    )
}

export default function Projects() {
    return (
        <Container id="projects">
            <div className="text-center mb-16">
                <ScrollReveal>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-accent-400 text-xs font-medium mb-4 uppercase tracking-widest">
                        <HiSparkles />
                        <span>Projects</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-gradient">Projects I Have Done</span>
                    </h2>
                    <p className="text-dark-300 max-w-2xl mx-auto text-lg">
                        Real projects I've built during my academic and personal journey
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-cyan-400 mx-auto mt-6 rounded-full" />
                </ScrollReveal>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, i) => (
                    <ProjectCard key={project.title} project={project} index={i} />
                ))}
            </div>

            {/* GitHub Profile Link */}
            <ScrollReveal>
                <div className="text-center mt-12">
                    <motion.a
                        href="https://github.com/DEVARAJ-07"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 px-8 py-3.5 glass-card rounded-2xl text-dark-200 font-semibold hover:text-accent-400 hover:border-accent-500/20 transition-all duration-300 cursor-pointer"
                    >
                        <FaGithub size={22} />
                        <span>View All Projects on GitHub</span>
                    </motion.a>
                </div>
            </ScrollReveal>
        </Container>
    )
}
