import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Section from "../ui/Section";
import PropTypes from "prop-types";

const Hero = () => {
    return (
        <Section id="home" className="min-h-screen flex items-center justify-center -mt-20">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-secondary font-medium tracking-wide mb-4">
                            Hello, I'm
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
                            Jatin <span className="text-gradient">Srivastava</span>
                        </h1>
                        <p className="text-muted text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
                            Specializing in <span className="text-white">Autonomous Vehicle AI</span> data pipelines and <span className="text-white">Full Stack Web Development</span>.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#projects"
                                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary hover:bg-blue-600 text-white font-medium transition-all hover:scale-105 shadow-lg shadow-blue-500/25"
                            >
                                View Work <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                            <a
                                href="https://drive.google.com/file/d/19HStCQF_2NlCMDRQBuClxfxfMSFu_k2V/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 text-white font-medium transition-all hover:scale-105 backdrop-blur-sm"
                            >
                                View Resume <Download className="ml-2 w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>
                </div>

                <div className="order-1 md:order-2 flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative w-64 h-64 md:w-96 md:h-96"
                    >
                        {/* Abstract animated shape or placeholder for 3D element */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-[80px] opacity-20 animate-pulse will-change-transform"></div>
                        <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center overflow-hidden">
                            <div className="text-center p-6">
                                <span className="text-6xl mb-4 block">👋</span>
                                <p className="text-muted font-mono text-sm">
                                    const developer = &#123;<br />
                                    &nbsp;&nbsp;name: 'Jatin',<br />
                                    &nbsp;&nbsp;stack: ['React', 'Next.js']<br />
                                    &#125;;
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};

export default Hero;
