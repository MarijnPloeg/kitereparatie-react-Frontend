import "./TopBar.css";
import logo from "./KitereparatieLogo-Kleur.png";
import profilePic from "./IMG_0007.jpg";
import {UserContext} from "../../context/UserContext";
import {useContext, useEffect} from "react";
import {Link} from "react-router-dom";

const TopBar = () => {
    const {user, setUser} = useContext(UserContext);

    useEffect(() => {
        if (user === null) {
            setUser(JSON.parse(localStorage.getItem("user")))
        }
    }, [user]);


    return (
        <div className="topBarContainer">
            <Link to="/home">
            <img src={logo} alt="Kitereparatie"/>
            </Link>
            <h1 className="welcomeMessage">Welkom terug, <span className="userName">{user.firstName}</span></h1>
            <img src={profilePic} alt="Profielfoto" className="profilePicture"/>
        </div>
    );
}

export default TopBar;