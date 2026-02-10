import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import PropTypes from "prop-types";

// Base Dock Component
const Dock = ({ children, className = "" }) => {
    const mouseX = useMotionValue(Infinity);

    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className={`mx-auto flex h-16 items-end gap-4 rounded-2xl bg-gray-900/40 backdrop-blur-md border border-white/10 px-4 pb-3 ${className}`}
        >
            {children.map((child, i) => {
                // Pass mouseX to children
                if (child) {
                    return <DockIcon key={i} mouseX={mouseX}>{child}</DockIcon>
                }
                return null;
            })}
        </motion.div>
    );
};

Dock.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

// Dock Icon Component
const DockIcon = ({ mouseX, children }) => {
    const ref = useRef(null);

    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const width = useSpring(widthSync, { mass: 0.05, stiffness: 50, damping: 12 });

    return (
        <motion.div
            ref={ref}
            style={{ width }}
            className="aspect-square w-10 cursor-pointer rounded-full bg-gray-800/80 hover:bg-gray-700 border border-white/10 flex items-center justify-center text-white shadow-lg"
        >
            <motion.div
                style={{ width: width, opacity: useTransform(width, [40, 80], [0.5, 1]) }}
                className="flex items-center justify-center w-full h-full"
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

DockIcon.propTypes = {
    mouseX: PropTypes.object, // Framer motion value
    children: PropTypes.node,
};

export default Dock;
