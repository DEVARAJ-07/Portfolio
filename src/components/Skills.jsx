import { motion } from 'framer-motion'
import { FaJava, FaCode, FaDatabase, FaAws, FaDocker, FaLinux, FaRobot, FaCss3Alt } from 'react-icons/fa'
import { SiPython, SiReact, SiNextdotjs, SiHtml5, SiNodedotjs, SiExpress, SiFastapi, SiFlutter, SiDart, SiMongodb, SiMysql, SiPostgresql, SiSupabase, SiGit, SiGithub, SiPostman, SiAndroidstudio, SiGithubactions, SiSpringboot } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

const skillCategories = [
    {
        title: 'Programming Languages',
        skills: [
            { name: 'Java', icon: <FaJava className="text-2xl text-[#f89820]" /> },
            { name: 'C', icon: <FaCode className="text-2xl text-[#00599c]" /> },
            { name: 'SQL', icon: <FaDatabase className="text-2xl text-[#00758f]" /> },
            { name: 'Python', icon: <SiPython className="text-2xl text-[#3776ab]" /> },
        ],
    },
    {
        title: 'Frontend Development',
        skills: [
            { name: 'React.js', icon: <SiReact className="text-2xl text-[#61dafb]" /> },
            { name: 'Next.js', icon: <SiNextdotjs className="text-2xl text-white" /> },
            { name: 'HTML5', icon: <SiHtml5 className="text-2xl text-[#e34f26]" /> },
            { name: 'CSS3', icon: <FaCss3Alt className="text-2xl text-[#1572b6]" /> },
            { name: 'REST API Integration', icon: <FaCode className="text-2xl text-teal-400" /> },
        ],
    },
    {
        title: 'Backend Development',
        skills: [
            { name: 'Node.js', icon: <SiNodedotjs className="text-2xl text-[#339933]" /> },
            { name: 'Express.js', icon: <SiExpress className="text-2xl text-slate-100" /> },
            { name: 'Spring Boot', icon: <SiSpringboot className="text-2xl text-[#6db33f]" /> },
            { name: 'FastAPI', icon: <SiFastapi className="text-2xl text-[#009688]" /> },
        ],
    },
    {
        title: 'Mobile Development',
        skills: [
            { name: 'Flutter', icon: <SiFlutter className="text-2xl text-[#02569b]" /> },
            { name: 'Dart', icon: <SiDart className="text-2xl text-[#0175c2]" /> },
        ],
    },
    {
        title: 'Databases',
        skills: [
            { name: 'MongoDB', icon: <SiMongodb className="text-2xl text-[#47a248]" /> },
            { name: 'MySQL', icon: <SiMysql className="text-2xl text-[#00758f]" /> },
            { name: 'PostgreSQL', icon: <SiPostgresql className="text-2xl text-[#336791]" /> },
            { name: 'Supabase', icon: <SiSupabase className="text-2xl text-[#3ecf8e]" /> },
        ],
    },
    {
        title: 'Cloud & DevOps',
        skills: [
            { name: 'AWS (EC2, S3, Lambda)', icon: <FaAws className="text-2xl text-[#ff9900]" /> },
            { name: 'Docker', icon: <FaDocker className="text-2xl text-[#2496ed]" /> },
            { name: 'CI/CD & GitHub Actions', icon: <SiGithubactions className="text-2xl text-[#2088ff]" /> },
            { name: 'Linux', icon: <FaLinux className="text-2xl text-[#fcc624]" /> },
        ],
    },
    {
        title: 'Tools & Version Control',
        skills: [
            { name: 'Git', icon: <SiGit className="text-2xl text-[#f05032]" /> },
            { name: 'GitHub', icon: <SiGithub className="text-2xl text-white" /> },
            { name: 'Postman', icon: <SiPostman className="text-2xl text-[#ff6c37]" /> },
            { name: 'VS Code', icon: <VscVscode className="text-2xl text-[#007acc]" /> },
            { name: 'Android Studio', icon: <SiAndroidstudio className="text-2xl text-[#3ddc84]" /> },
            { name: 'LM Studio', icon: <FaRobot className="text-2xl text-purple-400" /> },
        ],
    },
]

export default function Skills() {
    return (
        <div className="max-w-5xl w-full mx-auto p-5 md:p-10 rounded-[32px] vision-window h-[78vh] overflow-y-auto pr-4 vision-scrollbar">
            <div className="space-y-10">
                {skillCategories.map((category, catIdx) => (
                    <div key={category.title}>
                        <h4 className="text-sm font-semibold text-slate-100 mb-5 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            {category.title}
                        </h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {category.skills.map((skill, i) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: catIdx * 0.04 + i * 0.015 }}
                                    className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all flex flex-col items-center justify-center gap-2.5 text-center group"
                                >
                                    <div className="transition-transform group-hover:scale-110">
                                        {skill.icon}
                                    </div>
                                    <span className="text-slate-200 text-xs font-normal tracking-wide group-hover:text-white transition-colors font-newsreader italic">
                                        {skill.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
