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
                <button className="sidebarElement">Mijn reparaties</button>
                <button className="sidebarElement">Reparatie aanmelden</button>
                <button className="sidebarElement">Facturen</button>
                <button className="sidebarElement">Contact</button>
            </div>
        </div>
    );
}

export default Sidebar;