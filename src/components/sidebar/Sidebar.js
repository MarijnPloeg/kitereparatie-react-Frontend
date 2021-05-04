import React from "react";
import logo from "./KitereparatieLogo-Kleur.png"
import "./Sidebar.css"
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="profileCard">
                <img src={logo} alt=""/>
                <h2>Kitereparatie</h2>
            </div>
            <div className="sideBarContainer">
                <Link to="/myRepairs" className="sidebarElement">Mijn reparaties</Link>
                <Link to="/createrepair" className="sidebarElement">Reparatie aanmelden</Link>
                <Link className="sidebarElement">Facturen</Link>
                <Link className="sidebarElement">Contact</Link>
            </div>
        </div>
    );
}

export default Sidebar;