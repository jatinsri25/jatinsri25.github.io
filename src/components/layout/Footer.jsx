import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-surface py-8 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center">
                <p className="text-gray-500 text-sm center text-center mb-8">
                    &copy; {new Date().getFullYear()} Jatin Srivastava. All rights reserved. <br />
                    Built with React, Tailwind CSS & Framer Motion.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
