import "../../components/css/header.css";
import logo from "../../assets/logo.svg";
import burger from "../../assets/burger.svg";
import close from "../../assets/close.svg";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                !event.target.closest(".burger-menu")
            ) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <header className="header-container">
            <div className="header-content">
                <div className="logo">
                    <img src={logo} alt="Aveen Logo" className="logo-img" />
                </div>
                <nav className="header-right">
                    <div className="burger-menu" onClick={toggleMenu}>
                        <img
                            src={burger}
                            alt="Menu Icon"
                            className={`burger-icon ${isMenuOpen ? "open" : ""}`}
                        />
                        <span className="menu-text">Menu</span>
                    </div>
                    <ul
                        ref={menuRef}
                        className={`header-links ${isMenuOpen ? "active" : ""}`}
                    >
                        <li className="close-menu">
                            <img
                                src={close}
                                alt="Close Menu"
                                className="close-icon"
                                onClick={toggleMenu}
                            />
                        </li>
                        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                        <li><Link to="/aboutme" onClick={toggleMenu}>About Me</Link></li>
                        <li><Link to="/myprojects" onClick={toggleMenu}>My Projects</Link></li>
                        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;