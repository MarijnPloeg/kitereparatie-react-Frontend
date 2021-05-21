import React, {useContext} from "react";

import logo from "./KitereparatieLogo-Kleur.png"
import "./TopNavigation.css";
import {Link} from "react-router-dom"
import {UserContext} from "../../context/UserContext";
import {IndicationContext} from "../../context/IndicationContext";

const TopNavigation = () => {
    const {user, setUser} = useContext(UserContext);

    function clearUser() {
        setUser(null);
        localStorage.clear();
    }

    return (
        <nav className="navContainer">
            <ul className="menuItems">
                <li><a href="#cardContainer">Home</a></li>
                <li><a href="#overOns">Over ons</a></li>
                <li><a href="#prices">Reparaties</a></li>
                <li><img src={logo} alt="logo" className="logo"/></li>
                <li><a href="#prices">Prijzen</a></li>
                <li><a>Contact</a></li>
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