import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa'

export default function Resume() {
    return (
        <div className="max-w-5xl w-full mx-auto p-4 md:p-8 rounded-[32px] vision-window h-[78vh] overflow-y-auto pr-4 vision-scrollbar">
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full rounded-2xl bg-white/[0.93] text-slate-900 border border-white/25 p-4 sm:p-10 shadow-inner select-text"
            >
                {/* Styled A4 sheet layout content */}
                <div className="space-y-4 text-left max-w-full font-newsreader" style={{ textShadow: 'none' }}>
                    {/* Header */}
                    <div className="text-center border-b border-slate-300 pb-3">
                        <h1 className="text-3xl sm:text-5xl font-bold tracking-wide text-slate-900" style={{ fontFamily: '"Times New Roman", Times, serif' }}>DEVARAJ S</h1>
                        <p className="text-[11px] sm:text-[15.5px] font-bold text-slate-700 mt-2 uppercase tracking-wider" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                            Full Stack Developer | MERN Stack | Next.js | Flutter | AWS
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[13px] text-slate-700 mt-2 font-semibold font-sans">
                            <a href="https://linkedin.com/in/devarajvetrii" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-slate-950">
                                <FaLinkedin className="text-[12px]" /> devarajvetrii
                            </a>
                            <span>•</span>
                            <a href="https://github.com/DEVARAJ-07" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-slate-950">
                                <FaGithub className="text-[12px]" /> devaraj-07
                            </a>
                            <span>•</span>
                            <a href="mailto:devarajsubramani20@gmail.com" className="flex items-center gap-1 hover:text-slate-950">
                                <FaEnvelope className="text-[12px]" /> devarajsubramani20@gmail.com
                            </a>
                            <span>•</span>
                            <span className="flex items-center gap-1 text-slate-700">
                                <FaPhone className="text-[11px]" /> +91 9894880175
                            </span>
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="space-y-1">
                        <h2 className="text-[17px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">Professional Summary</h2>
                        <p className="text-[14px] leading-relaxed text-slate-800 font-normal">
                            Full Stack Developer specializing in the <strong>MERN stack</strong> with hands-on experience building, testing, and deploying scalable web and mobile applications. Proficient in <strong>Flutter</strong> cross-platform mobile development, <strong>CI/CD</strong> via GitHub Actions, and cloud deployments on <strong>AWS</strong>, focused on solving real-world problems through clean, efficient code.
                        </p>
                    </div>

                    {/* Technical Skills */}
                    <div className="space-y-1">
                        <h2 className="text-[17px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">Technical Skills</h2>
                        <div className="grid grid-cols-12 gap-y-1 text-[14px] leading-relaxed text-slate-800 font-normal">
                            <span className="col-span-3 font-bold text-slate-850">Languages:</span>
                            <span className="col-span-9">Java, C, SQL, Python</span>

                            <span className="col-span-3 font-bold text-slate-850">Frontend:</span>
                            <span className="col-span-9">React.js, Next.js, HTML5, CSS3, REST API</span>

                            <span className="col-span-3 font-bold text-slate-850">Backend:</span>
                            <span className="col-span-9">Node.js, Express.js, SpringBoot</span>

                            <span className="col-span-3 font-bold text-slate-850">Mobile:</span>
                            <span className="col-span-9">Flutter, Dart</span>

                            <span className="col-span-3 font-bold text-slate-850">Databases:</span>
                            <span className="col-span-9">MongoDB, MySQL, PostgreSQL, Supabase</span>

                            <span className="col-span-3 font-bold text-slate-850">Cloud & DevOps:</span>
                            <span className="col-span-9">AWS (EC2, S3, Lambda), Docker, CI/CD, GitHub Actions, Linux</span>

                            <span className="col-span-3 font-bold text-slate-850">Tools & Version Control:</span>
                            <span className="col-span-9">Git, GitHub, Postman, VS Code, Android Studio, LM Studio</span>
                        </div>
                    </div>

                    {/* Education */}
                    <div className="space-y-1">
                        <h2 className="text-[17px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">Education</h2>
                        <div className="flex justify-between text-[14.5px]">
                            <div>
                                <span className="font-bold text-slate-850">Bachelor of Engineering, Computer Science and Engineering</span>
                                <br />
                                <span className="text-[13px] text-slate-600">Dr. N.G.P. Institute of Technology, Coimbatore</span>
                            </div>
                            <div className="text-right text-[13px]">
                                <span className="font-bold text-slate-850">CGPA: 8.05</span>
                                <br />
                                <span className="text-slate-500 italic font-medium">2023 – 2027</span>
                            </div>
                        </div>
                    </div>

                    {/* Work Experience */}
                    <div className="space-y-1.5">
                        <h2 className="text-[17px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">Work Experience</h2>
                        <div>
                            <div className="flex justify-between items-baseline text-[14.5px]">
                                <span className="font-bold text-slate-850">Software Development Intern</span>
                                <span className="text-[12px] text-slate-500 italic font-semibold">June 2025 – July 2025</span>
                            </div>
                            <p className="text-[13.5px] text-slate-650 font-semibold italic">SkyLena Info Technology Pvt. Ltd.</p>
                            <ul className="list-disc list-outside pl-4 mt-1 text-[14px] text-slate-800 space-y-1 font-normal">
                                <li>Engineered <strong>QuickBuy</strong>, a full-stack e-commerce web application featuring product browsing, cart management, and order flow using <strong>HTML5, CSS3, and JavaScript</strong>, reducing manual shopping workflow time by over <strong>60%</strong> compared to the prior process.</li>
                                <li>Delivered <strong>responsive, cross-browser-compatible</strong> UI components that improved interface accessibility across all major browsers.</li>
                                <li>Collaborated with senior developers through <strong>Git-based version control</strong> and code reviews, translating feature requirements into working modules.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Technical Projects */}
                    <div className="space-y-3">
                        <h2 className="text-[17px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">Technical Projects</h2>
                        
                        {/* P1: EVE */}
                        <div>
                            <div className="flex justify-between items-baseline text-[14.5px]">
                                <span className="font-bold text-slate-850 flex items-center gap-2">
                                    EVE – Personal Jarvis-Style System Monitoring Assistant <span className="text-[12px] italic text-slate-500 font-normal">(In Development)</span>
                                    <a href="https://github.com/DEVARAJ-07/EvE" target="_blank" rel="noreferrer" className="text-slate-700 hover:text-slate-950 font-normal text-xs">
                                        <FaGithub className="inline text-[13px]" />
                                    </a>
                                </span>
                                <span className="text-[12px] text-slate-500 italic font-medium">Sep 2026 – Present</span>
                            </div>
                            <p className="text-[12.5px] text-slate-600 font-semibold italic">Next.js, Node.js</p>
                            <ul className="list-disc list-outside pl-4 text-[14px] text-slate-800 mt-0.5 space-y-0.5 font-normal">
                                <li>Building a floating, always-on-screen personal assistant that continuously monitors system-level activity — per-application <strong>CPU, GPU, and memory usage</strong>, running processes, and system logs — with full system-level access.</li>
                                <li>Engineering a <strong>continuous monitoring engine</strong> that detects overloaded, unresponsive, or misbehaving applications in real time and <strong>automatically terminates them</strong> to protect system stability, using configurable CPU/RAM thresholds and a safeguard list that prevents critical system processes from ever being closed.</li>
                                <li>Integrating a <strong>WhatsApp bot</strong> to automatically notify the user's mobile device when predefined system-overload conditions are triggered.</li>
                            </ul>
                        </div>

                        {/* P2: Nexus AI */}
                        <div>
                            <div className="flex justify-between items-baseline text-[14.5px]">
                                <span className="font-bold text-slate-850 flex items-center gap-2">
                                    Nexus AI – Real-Time AI Diagnostics for CI/CD Pipelines <span className="text-[12px] italic text-slate-500 font-normal">(In Development)</span>
                                    <a href="https://github.com/DEVARAJ-07/Nexus-AI" target="_blank" rel="noreferrer" className="text-slate-700 hover:text-slate-950 font-normal text-xs">
                                        <FaGithub className="inline text-[13px]" />
                                    </a>
                                </span>
                                <span className="text-[12px] text-slate-500 italic font-medium">Jun 2026 – Present</span>
                            </div>
                            <p className="text-[12.5px] text-slate-600 font-semibold italic">Next.js, Node.js, Express.js, Supabase, AWS</p>
                            <ul className="list-disc list-outside pl-4 text-[14px] text-slate-800 mt-0.5 space-y-0.5 font-normal">
                                <li>Currently building an all-in-one platform that watches software build pipelines in real time, automatically detects failures, and explains the cause of each failure in plain language so developers can fix issues faster.</li>
                                <li>Building a <strong>Next.js</strong> dashboard connected to a <strong>Node.js/Express.js</strong> backend through live streaming updates, aiming to give users an up-to-the-second view of pipeline health, analytics, and workflow automation.</li>
                            </ul>
                        </div>

                        {/* P3: UrScore AI */}
                        <div>
                            <div className="flex justify-between items-baseline text-[14.5px]">
                                <span className="font-bold text-slate-850 flex items-center gap-2">
                                    UrScore AI – Developer Skill Verification Platform
                                    <a href="https://github.com/DEVARAJ-07/UrScore-AI" target="_blank" rel="noreferrer" className="text-slate-700 hover:text-slate-950 font-normal text-xs">
                                        <FaGithub className="inline text-[13px]" />
                                    </a>
                                </span>
                                <span className="text-[12px] text-slate-500 italic font-medium">Apr 2026 – Jun 2026</span>
                            </div>
                            <p className="text-[12.5px] text-slate-600 font-semibold italic">Next.js, Node.js, Express.js, GitHub API, Cloud Deployment</p>
                            <ul className="list-disc list-outside pl-4 text-[14px] text-slate-800 mt-0.5 space-y-0.5 font-normal">
                                <li>Built a full-stack platform that verifies a candidate's real coding skills by cross-checking their resume against their actual <strong>GitHub</strong> project history, instead of relying on self-reported skills alone.</li>
                                <li>Designed a <strong>Next.js</strong> frontend and <strong>Node.js/Express.js</strong> backend with a background worker service that processes resumes and repository data independently.</li>
                                <li>Deployed the application on the <strong>cloud</strong> with a scoring engine that cross-references <strong>resume skills</strong> against live GitHub repository languages and dependencies, and pulls <strong>LeetCode</strong> problem-solving stats to generate a tiered competency score with a downloadable PDF report.</li>
                            </ul>
                        </div>

                        {/* P4: StudentBuddy */}
                        <div>
                            <div className="flex justify-between items-baseline text-[14.5px]">
                                <span className="font-bold text-slate-850 flex items-center gap-2">
                                    StudentBuddy – AI-Powered Smart Mentoring Android Application
                                    <a href="https://github.com/DEVARAJ-07/StudentBuddy" target="_blank" rel="noreferrer" className="text-slate-700 hover:text-slate-950 font-normal text-xs">
                                        <FaGithub className="inline text-[13px]" />
                                    </a>
                                </span>
                                <span className="text-[12px] text-slate-500 italic font-medium">Nov 2025 – Apr 2026</span>
                            </div>
                            <p className="text-[12.5px] text-slate-600 font-semibold italic">Flutter, Dart, React.js, TypeScript, Node.js, Supabase, JWT</p>
                            <ul className="list-disc list-outside pl-4 text-[14px] text-slate-800 mt-0.5 space-y-0.5 font-normal">
                                <li>Developed an Android application with a <strong>Flutter (Dart)</strong> frontend backed by <strong>Supabase</strong>, enabling <strong>real-time one-to-one messaging</strong> and unit-tested with <strong>20+ live users</strong>.</li>
                                <li>Integrated a locally hosted <strong>LLM</strong> (via LM Studio) as an AI chatbot delivering <strong>context-aware academic responses</strong> with a <strong>privacy-first architecture</strong>.</li>
                                <li>Designed a <strong>RESTful API</strong> with <strong>Node.js</strong> enforcing <strong>JWT authentication</strong>, multi-role access control (student / mentor / admin), and relational <strong>database schema design</strong> for user relationships.</li>
                            </ul>
                        </div>

                        {/* P5: SmartEco */}
                        <div>
                            <div className="flex justify-between items-baseline text-[14.5px]">
                                <span className="font-bold text-slate-850 flex items-center gap-2">
                                    SmartEco – AI-Driven Campus Resource Optimizer
                                    <a href="https://github.com/DEVARAJ-07/SmartEco" target="_blank" rel="noreferrer" className="text-slate-700 hover:text-slate-950 font-normal text-xs">
                                        <FaGithub className="inline text-[13px]" />
                                    </a>
                                </span>
                                <span className="text-[12px] text-slate-500 italic font-medium">Jun 2025 – Nov 2025</span>
                            </div>
                            <p className="text-[12.5px] text-slate-600 font-semibold italic">React.js, FastAPI, Python, Random Forest, REST API</p>
                            <ul className="list-disc list-outside pl-4 text-[14px] text-slate-800 mt-0.5 space-y-0.5 font-normal">
                                <li>Built a full-stack sustainability platform with a <strong>React.js</strong> frontend consuming a <strong>Python FastAPI</strong> REST API, integrating a <strong>Random Forest ML model</strong> that achieved <strong>81% prediction accuracy</strong> for forecasting campus energy and resource consumption.</li>
                                <li>Trained and validated the <strong>Random Forest</strong> model on historical campus consumption data, tuning feature inputs to balance prediction accuracy against response time for the live dashboard.</li>
                            </ul>
                        </div>

                        {/* P6: The Smart ATM */}
                        <div>
                            <div className="flex justify-between items-baseline text-[14.5px]">
                                <span className="font-bold text-slate-850 flex items-center gap-2">
                                    The Smart ATM – Cardless Cash Withdrawal System
                                    <a href="https://github.com/DEVARAJ-07/SmartATM" target="_blank" rel="noreferrer" className="text-slate-700 hover:text-slate-950 font-normal text-xs">
                                        <FaGithub className="inline text-[13px]" />
                                    </a>
                                </span>
                                <span className="text-[12px] text-slate-500 italic font-medium">Jan 2025 – Jun 2025</span>
                            </div>
                            <p className="text-[12.5px] text-slate-600 font-semibold italic">React.js, Node.js, Express.js, MongoDB, Twilio API, JWT</p>
                            <ul className="list-disc list-outside pl-4 text-[14px] text-slate-800 mt-0.5 space-y-0.5 font-normal">
                                <li>Architected a full-stack banking web application enabling cardless withdrawals via <strong>OTP-based two-factor authentication</strong>, integrating <strong>Twilio</strong> for real-time SMS delivery.</li>
                                <li>Designed a <strong>RESTful API</strong> backend with <strong>Node.js/Express.js</strong> and <strong>MongoDB schema design</strong>, enforcing daily transaction limits, <strong>JWT session management</strong>, multi-step OTP verification, and reducing unauthorized-access risk by <strong>90%</strong> in penetration tests.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Soft Skills & Languages & Areas of Interest */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1 border-t border-slate-200">
                        <div>
                            <h3 className="text-[15px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">Soft Skills</h3>
                            <ul className="list-disc list-outside pl-4 mt-1 text-[13.5px] text-slate-800 space-y-0.5 font-normal">
                                <li>Problem Solving</li>
                                <li>Team Collaboration</li>
                                <li>Time Management</li>
                                <li>Adaptability</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-[15px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">Languages Known</h3>
                            <ul className="list-disc list-outside pl-4 mt-1 text-[13.5px] text-slate-800 space-y-0.5 font-normal">
                                <li>English</li>
                                <li>Tamil</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-[15px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">Areas of Interest</h3>
                            <ul className="list-disc list-outside pl-4 mt-1 text-[13.5px] text-slate-800 space-y-0.5 font-normal">
                                <li>Full Stack Engineering</li>
                                <li>Android App Development</li>
                                <li>Cloud Engineering</li>
                            </ul>
                        </div>
                    </div>

                    {/* Certifications & Achievements */}
                    <div className="space-y-1 pt-1">
                        <h2 className="text-[17px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">Certifications & Achievements</h2>
                        <ul className="list-disc list-outside pl-4 text-[14px] text-slate-800 space-y-1.5 font-normal">
                            <li><strong>Generative AI: Working with Large Language Models</strong> – May 2026</li>
                            <li><strong>Cloud Computing</strong> – NPTEL, 2024</li>
                            <li><strong>Industrial IoT</strong> – NPTEL, 2025</li>
                            <li><strong>Smart India Hackathon (2023-2024)</strong> – Selected in the <strong>First Round</strong> in both <strong>2023</strong> and <strong>2024</strong> editions, advancing through internal institutional screening among competing student teams.</li>
                            <li><strong>MSME Idea Hackathon 5.0 (2025-2026)</strong> – Advanced to the <strong>Final Round</strong> and were <strong>shortlisted for project selection</strong> by MSME evaluators, representing one of the top teams from the national-level competition.</li>
                            <li><strong>24-Hour Intercollege Hackathon</strong> – Participated in a time-bound 24-hour hackathon and built <strong>SmartEco</strong>, a real-time campus resource optimization platform, from ideation to a working prototype within the deadline.</li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
