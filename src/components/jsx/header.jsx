import "../../components/css/header.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header-container">
            <div className="header-content">
                <div className="logo">
                    <img src={logo} alt="logo" className="logo-img" />
                </div>
                <nav className="header-right">
                    <ul className="header-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/aboutme">About Me</Link></li>
                        <li><Link to="/myprojects">My Projects</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;