import "../css/spotlight-button.css";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const SpotlightButton = () => {
    const btnRef = useRef(null);
    const spanRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (spanRef.current && btnRef.current) {
                const { left, width } = btnRef.current.getBoundingClientRect();
                const offsetX = e.clientX - left;
                const leftPos = `${(offsetX / width) * 100}%`;

                spanRef.current.animate(
                    { left: leftPos },
                    { duration: 250, fill: "forwards" }
                );
            }
        };

        const handleMouseLeave = () => {
            if (spanRef.current) {
                spanRef.current.animate(
                    { left: "50%" },
                    { duration: 100, fill: "forwards" }
                );
            }
        };

        const buttonElement = btnRef.current;
        if (buttonElement) {
            buttonElement.addEventListener("mousemove", handleMouseMove);
            buttonElement.addEventListener("mouseleave", handleMouseLeave);
        }

        return () => {
            if (buttonElement) {
                buttonElement.removeEventListener("mousemove", handleMouseMove);
                buttonElement.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, []);

    return (
        <motion.button
            ref={btnRef}
            className="spotlight-button"
        >
            <span className="text-content">Explore my works!</span>
            <span ref={spanRef} className="spotlight-effect"></span>
        </motion.button>
    );
};

export default SpotlightButton;
