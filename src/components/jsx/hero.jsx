import "../css/hero.css";
import heroImage from "../../assets/bg.png";
import Carousel from "./carousel";
import SpotlightButton from "./spotlight-button";

const Hero = () => {
    return (
        <>
            <div className="hero">
                <img src={heroImage} alt="me" className="bg" />
            </div>
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
        </>
    );
};

export default Hero;