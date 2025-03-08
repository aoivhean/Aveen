import "../css/hero.css";
import heroImage from "../../assets/bg.png";
import Carousel from "./carousel";
import SpotlightButton from "./spotlight-button";
import AboutMe from "./aboutme";
import { useEffect, useRef, useState } from "react";


const Hero = () => {
    const aboutRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.3 }
        );

        if (aboutRef.current) observer.observe(aboutRef.current);
        return () => {
            if (aboutRef.current) observer.unobserve(aboutRef.current);
        };
    }, []);

    return (
        <>
            <div className="hero">
                <img src={heroImage} alt="Background" className="bg" />
                <div className="hero-wrapper">
                    <div className="hero-container">
                        <div className="hero-left">
                            <div className="left-content">
                                <h3>
                                    A Front-End Developer. I specialize in creating responsive, user-friendly websites using HTML, CSS, JavaScript, and React. Passionate about building clean and intuitive web experiences, I'm always looking for new challenges and ways to enhance my skills.
                                </h3>
                            </div>
                        </div>
                        <div className="hero-right">
                            <Carousel />
                            <div className="hero-right-button-wrapper">
                                <SpotlightButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={aboutRef} className={`about-section ${isVisible ? "visible" : ""}`}>
                <AboutMe />
            </div>
        </>
    );
};

export default Hero;