import React, {useContext} from "react";
import {UserContext} from "../../context/UserContext"
import "./Sidebar.css"
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faList, faFileInvoice, faPhone, faUsers, faUserCheck, faGlobe} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
    const user = useContext(UserContext);
    const userRole = user.user.appUserRole;

    function showUser() {
        console.log(userRole)
    }

    return (
        <div className="sidebar">
            <div className="sideBarContainer">
                {userRole === "CUSTOMER" && (
                    <>
                        <Link to="/profile" className="sidebarElement"><FontAwesomeIcon icon={faUser}
                                                                                        className="sidebarIcon"/>Mijn
                            profiel</Link>
                        <Link to="/myRepairs" className="sidebarElement"><FontAwesomeIcon icon={faList}
                                                                                          className="sidebarIcon"/>Mijn
                            reparaties</Link>
                        <Link to="/createRepair" className="sidebarElement"><FontAwesomeIcon
                            icon={faFileInvoice} className="sidebarIcon"/>Facturen</Link>
                        <Link to="/" className="sidebarElement"><FontAwesomeIcon
                            icon={faPhone} className="sidebarIcon"/>Contact</Link>
                    </>
                )}
                {userRole === "MANAGER" && (
                    <>
                        <Link to="/profile" className="sidebarElement"><FontAwesomeIcon icon={faUser} className="sidebarIcon"/>Mijn profiel</Link>
                        <Link to="/klanten" className="sidebarElement"><FontAwesomeIcon icon={faUsers} className="sidebarIcon"/>Klanten</Link>
                        <Link to="/reparaties" className="sidebarElement"><FontAwesomeIcon icon={faList} className="sidebarIcon"/>Reparaties</Link>
                        <Link to="/werknemers" className="sidebarElement"><FontAwesomeIcon icon={faUserCheck} className="sidebarIcon"/>Werknemers</Link>
                        <Link to="/merken" className="sidebarElement"><FontAwesomeIcon icon={faGlobe} className="sidebarIcon"/>Merken</Link>
                    </>
                )}
                <Link to="/home" className="logout"><button onClick={() => localStorage.clear()}>Uitloggen</button></Link>

            </div>
        </div>
    );
};

export default Sidebar;