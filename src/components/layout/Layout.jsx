import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "../ui/ScrollProgress";
import CommandPalette from "../ui/CommandPalette";
import FloatingDock from "./FloatingDock";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
    // Ensure dark mode is always applied
    useEffect(() => {
        document.documentElement.classList.add("dark");
    }, []);

    return (
        <div className="min-h-screen bg-background text-text font-sans antialiased selection:bg-blue-500/30 selection:text-blue-200">
            <ScrollProgress />
            <CommandPalette />
            <Navbar />
            <main className="flex-grow pt-20 pb-24">
                {children}
            </main>
            <FloatingDock />
            <Footer />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
