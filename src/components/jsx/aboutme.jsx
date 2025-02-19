import "../css/aboutme.css";
import aboutImage1 from "../../assets/image1.jpg";
import heroImage from "../../assets/bg.png";

const AboutMe = () => {
    return (

        <div className="hero">
            <img src={heroImage} alt="me" className="bg" />


            <div className="about-me-container">
                <img src={aboutImage1} alt="About Me" className="about-me-image" />

                <div className="about-me-content">
                    <h2>About Me</h2>
                    <p>
                        Hi! I'm a passionate Front-End Developer with a love for crafting clean,
                        responsive, and visually engaging websites. My journey in web development
                        started with curiosity, and now I strive to build seamless digital experiences
                        through HTML, CSS, JavaScript, and frameworks like React.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;