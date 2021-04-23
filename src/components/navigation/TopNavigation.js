import React from "react";
import logo from "./KitereparatieLogo-Kleur.png"
import "./TopNavigation.css";

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
                <li><button>Login</button></li>
            </ul>
        </nav>
    );
}

export default TopNavigation;