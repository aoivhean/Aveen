import { useState } from 'react'
import './hero.css'
import heroImage from '../assets/me.jpg'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Hero() {
    const [count, setCount] = useState(0)

    return (
        <>
            <nav className='nav-bar'>
                <div className='navbar-left'>
                    <h1 className='navbar-name'>Nizel Aveen Alonzo</h1>
                </div>

                <div className='navbar-right'>
                    <ul className='navbar-links'>
                        <li><a href='#'>About Me</a></li>
                        <li><a href='#'>My Projects</a></li>
                        <li><a href='#'>Contacts</a></li>
                    </ul>

                    <div className='navbar-socials'>
                        <a href='#'><FaFacebook /></a>
                        <a href='#'><FaInstagram /></a>
                        <a href='#'><FaSquareXTwitter /></a>
                    </div>
                </div>
            </nav>
            <div className='container-box'>
                <div className='container'>
                    <div className='img-container'>
                        <img src={heroImage} alt='me' />
                    </div>

                    <div className='content'>
                        <h3> A Front-End Developer and WMSU graduate. I specialize in creating responsive, user-friendly websites using HTML, CSS, JavaScript, and React. Passionate about building clean and intuitive web experiences, I'm always looking for new challenges and ways to enhance my skills.</h3>

                        <div className='button-container'>
                            <a href="#" className='button'>Explore my projects!</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
