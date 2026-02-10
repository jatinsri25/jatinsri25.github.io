import Section from "../ui/Section";
import { skills } from "../../data/portfolio";
import { Cpu, Database, Code, Monitor, Server, Terminal } from "lucide-react";

const Skills = () => {
    return (
        <Section id="skills">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
                    Technical <span className="text-gradient">Skills</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Define category configuration for custom labels and icons */}
                    {(() => {
                        const categoryConfig = {
                            ai_agents: { label: "AI & Agents", icon: <Cpu className="w-6 h-6 mr-2 text-blue-400" /> },
                            frontend: { label: "Frontend", icon: <Code className="w-6 h-6 mr-2 text-purple-400" /> },
                            backend: { label: "Backend", icon: <Server className="w-6 h-6 mr-2 text-green-400" /> },
                            database: { label: "Database", icon: <Database className="w-6 h-6 mr-2 text-yellow-400" /> },
                            tools: { label: "DevOps & Tools", icon: <Terminal className="w-6 h-6 mr-2 text-orange-400" /> },
                            languages: { label: "Languages", icon: <Monitor className="w-6 h-6 mr-2 text-pink-400" /> },
                        };

                        return Object.entries(skills).map(([key, items]) => {
                            const config = categoryConfig[key] || { label: key, icon: null };
                            return (
                                <div key={key}>
                                    <h3 className="text-xl font-bold mb-6 capitalize text-white flex items-center">
                                        {config.icon || <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-3"></span>}
                                        {config.label}
                                    </h3>

                                    <div className="flex flex-wrap gap-3">
                                        {items.map((skill, index) => (
                                            <div
                                                key={index}
                                                className="group relative px-4 py-2 bg-surface border border-white/5 rounded-xl hover:border-white/10 transition-all hover:translate-y-[-2px]"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                                <span className="relative text-gray-300 font-medium group-hover:text-white transition-colors">
                                                    {skill}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        });
                    })()}
                </div>
            </div>
        </Section>
    );
};

export default Skills;
