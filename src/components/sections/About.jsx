import Section from "../ui/Section";
import { Code, Server, Database, Zap } from "lucide-react";

const About = () => {
    const services = [
        {
            icon: <Code className="w-8 h-8 text-blue-400" />,
            title: "Frontend Development",
            description: "Building responsive, pixel-perfect single page applications using React and Tailwind CSS."
        },
        {
            icon: <Server className="w-8 h-8 text-purple-400" />,
            title: "Backend API",
            description: "Developing robust RESTful APIs and microservices using Node.js and Express."
        },
        {
            icon: <Database className="w-8 h-8 text-green-400" />,
            title: "Database Design",
            description: "Designing efficient database schemas and managing data with MongoDB and SQL."
        },
        {
            icon: <Zap className="w-8 h-8 text-yellow-400" />,
            title: "Performance Optimization",
            description: "Optimizing applications for speed, accessibility, and search engine visibility."
        },
    ];

    return (
        <Section id="about">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-gradient">Me</span>
                </h2>

                <div className="max-w-3xl mx-auto text-muted text-lg leading-relaxed mb-16 text-center">
                    <p className="mb-6">
                        I used to ship full stack webapps, now I teach machines to think (and sometimes they outsmart me).
                        I'm obsessed with <span className="text-white">AI/ML</span> — mostly deep learning and applied AI — while keeping my roots strong in <span className="text-white">Full Stack Development</span>.
                    </p>
                    <p>
                        I like building products that somehow end up working. From optimizing autonomous vehicle datasets at Zensar to building sovereign multi-agent engines like Veltrix, I thrive on solving complex problems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                            <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                            <p className="text-sm text-muted">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default About;
