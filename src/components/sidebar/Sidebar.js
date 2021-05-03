import React from "react";
import logo from "./KitereparatieLogo-Kleur.png"
import "./Sidebar.css"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="profileCard">
                <img src={logo} alt=""/>
                <h2>Kitereparatie</h2>
            </div>
            <div className="sideBarContainer">
                <a className="sidebarElement">Mijn reparaties</a>
                <a className="sidebarElement">Reparatie aanmelden</a>
                <a className="sidebarElement">Facturen</a>
                <a className="sidebarElement">Contact</a>
            </div>
        </div>
    );
}

export default Sidebar;