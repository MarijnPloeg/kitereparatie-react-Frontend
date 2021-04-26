import React from "react";
import logo from "./KitereparatieLogo-Kleur.png"
import "./TopNavigation.css";
import {Link} from "react-router-dom"

const TopNavigation = () => {


    return (
        <nav className="navContainer">
            <ul className="menuItems">
                <li>Home</li>
                <li>Over ons</li>
                <li>Reparaties</li>
                <li><img src={logo} alt="logo" className="logo"/></li>
                <li>Prijzen</li>
                <li>Contact</li>
                <li><button><Link to="/login" className="login">Login</Link></button></li>
            </ul>
        </nav>
    );
}

export default TopNavigation;