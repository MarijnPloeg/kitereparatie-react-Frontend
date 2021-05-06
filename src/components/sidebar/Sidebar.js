import React from "react";
import "./Sidebar.css"
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faList, faFileInvoice, faPhone} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sideBarContainer">
                <Link to="/profile" className="sidebarElement"><FontAwesomeIcon icon={faUser} className="sidebarIcon" />Mijn
                    profiel</Link>
                <Link to="/myRepairs" className="sidebarElement"><FontAwesomeIcon icon={faList} className="sidebarIcon"/>Mijn
                    reparaties</Link>
                <Link to="/createrepair" className="sidebarElement"><FontAwesomeIcon
                    icon={faFileInvoice} className="sidebarIcon"/>Facturen</Link>
                <Link to="/" className="sidebarElement"><FontAwesomeIcon
                    icon={faPhone} className="sidebarIcon"/>Contact</Link>
                <Link to="/home" className="logout">Uitloggen</Link>
            </div>
        </div>
    );
}

export default Sidebar;