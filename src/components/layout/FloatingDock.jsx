import { Home, Github, Linkedin, Mail, FileText, Twitter } from "lucide-react";
import Dock from "../ui/Dock";
import { Link } from "react-scroll";

const FloatingDock = () => {
    const items = [
        { icon: <Home size={20} />, label: "Home", type: "scroll", to: "home" },
        { icon: <Github size={20} />, label: "GitHub", type: "link", href: "https://github.com/jatinsri25" },
        { icon: <Linkedin size={20} />, label: "LinkedIn", type: "link", href: "https://linkedin.com/in/jatinsri25" },
        { icon: <Twitter size={20} />, label: "X (Twitter)", type: "link", href: "https://twitter.com" }, // Replace with actual if known
        { icon: <FileText size={20} />, label: "Resume", type: "link", href: "https://drive.google.com/file/d/19HStCQF_2NlCMDRQBuClxfxfMSFu_k2V/view?usp=sharing" },
        { icon: <Mail size={20} />, label: "Contact", type: "scroll", to: "contact" },
    ];

    return (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
            <Dock>
                {items.map((item, index) => (
                    item.type === "scroll" ? (
                        <Link
                            key={index}
                            to={item.to}
                            smooth={true}
                            duration={500}
                            className="w-full h-full flex items-center justify-center"
                            title={item.label}
                        >
                            {item.icon}
                        </Link>
                    ) : (
                        <a
                            key={index}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full h-full flex items-center justify-center"
                            title={item.label}
                        >
                            {item.icon}
                        </a>
                    )
                ))}
            </Dock>
        </div>
    );
};

export default FloatingDock;
