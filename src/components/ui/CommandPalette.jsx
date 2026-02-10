import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Command, ArrowRight } from "lucide-react";
import { Link as ScrollLink, scroller } from "react-scroll";

const CommandPalette = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(0);

    const commands = [
        { name: "Go to Home", id: "home", type: "navigation" },
        { name: "Go to About", id: "about", type: "navigation" },
        { name: "Go to Experience", id: "experience", type: "navigation" },
        { name: "Go to Projects", id: "projects", type: "navigation" },
        { name: "Go to Skills", id: "skills", type: "navigation" },
        { name: "Contact Me", id: "contact", type: "navigation" },
        { name: "View Resume", action: () => window.open("https://drive.google.com/file/d/19HStCQF_2NlCMDRQBuClxfxfMSFu_k2V/view?usp=sharing", "_blank"), type: "action" },
        { name: "Visit GitHub", action: () => window.open("https://github.com/jatinsri25", "_blank"), type: "action" },
    ];

    const filteredCommands = commands.filter(cmd =>
        cmd.name.toLowerCase().includes(query.toLowerCase())
    );

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setIsOpen((prev) => !prev);
            }
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const handleSelect = (command) => {
        if (command.type === "navigation") {
            scroller.scrollTo(command.id, {
                smooth: true,
                duration: 500,
            });
        } else if (command.action) {
            command.action();
        }
        setIsOpen(false);
        setQuery("");
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="relative w-full max-w-lg bg-surface border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                    >
                        <div className="flex items-center px-4 py-3 border-b border-white/5">
                            <Search className="w-5 h-5 text-muted mr-3" />
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => {
                                    setQuery(e.target.value);
                                    setSelectedIndex(0);
                                }}
                                placeholder="Type a command or search..."
                                className="w-full bg-transparent border-none outline-none text-white placeholder:text-gray-500 text-sm h-6"
                                autoFocus
                            />
                            <div className="hidden sm:flex items-center gap-1">
                                <span className="text-xs px-1.5 py-0.5 rounded bg-white/5 text-muted">ESC</span>
                            </div>
                        </div>

                        <div className="max-h-[300px] overflow-y-auto py-2">
                            {filteredCommands.length === 0 ? (
                                <div className="px-4 py-8 text-center text-muted text-sm">
                                    No results found.
                                </div>
                            ) : (
                                filteredCommands.map((command, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleSelect(command)}
                                        className={`w-full text-left px-4 py-3 flex items-center justify-between transition-colors ${index === selectedIndex ? "bg-primary/20 text-white" : "text-gray-400 hover:bg-white/5 hover:text-white"
                                            }`}
                                        onMouseEnter={() => setSelectedIndex(index)}
                                    >
                                        <div className="flex items-center">
                                            {command.type === "navigation" ? <ArrowRight className="w-4 h-4 mr-3 opacity-50" /> : <Command className="w-4 h-4 mr-3 opacity-50" />}
                                            <span className="text-sm font-medium">{command.name}</span>
                                        </div>
                                    </button>
                                ))
                            )}
                        </div>

                        <div className="px-4 py-2 border-t border-white/5 bg-white/5 flex items-center justify-between text-xs text-muted">
                            <span>
                                <strong>CMD + K</strong> to open
                            </span>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CommandPalette;
