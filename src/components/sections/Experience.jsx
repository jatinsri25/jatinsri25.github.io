import Section from "../ui/Section";
import { experiences } from "../../data/portfolio";

const Experience = () => {
    return (
        <Section id="experience">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
                    Work <span className="text-gradient">Experience</span>
                </h2>

                <div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-8 md:pl-12">
                            {/* Timeline Dot */}
                            <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                <span className="text-sm font-medium text-muted bg-white/5 py-1 px-3 rounded-full mt-2 sm:mt-0 w-fit">
                                    {exp.duration}
                                </span>
                            </div>

                            <div className="mb-4">
                                <h4 className="text-lg font-medium text-blue-400">{exp.company}</h4>
                            </div>

                            <p className="text-muted mb-6 leading-relaxed">
                                {exp.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {exp.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5 hover:bg-white/10 transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Experience;
