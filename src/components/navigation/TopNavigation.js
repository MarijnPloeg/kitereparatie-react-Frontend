import React, {useContext} from "react";

import logo from "./KitereparatieLogo-Kleur.png"
import "./TopNavigation.css";
import {Link} from "react-router-dom"
import {UserContext} from "../../context/UserContext";

const TopNavigation = () => {
    const {user, setUser} = useContext(UserContext);

    function clearUser() {
        setUser(null);
        localStorage.clear();
    }

    return (
        <nav className="navContainer">
            <ul className="menuItems">
                <li><Link to="/">Home</Link></li>
                <li><Link to="#overons">Over ons</Link></li>
                <li>Reparaties</li>
                <li><img src={logo} alt="logo" className="logo"/></li>
                <li>Prijzen</li>
                <li>Contact</li>
                {user ? (
                    <li>
                        <button className="login" onClick={() => clearUser()}>Log uit</button>
                    </li>
                ) : (
                    <li>
                        <button><Link to="/login" className="login">Login</Link></button>
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default TopNavigation;