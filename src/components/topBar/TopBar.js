import "./TopBar.css";
import logo from "./KitereparatieLogo-Kleur.png";
import profilePic from "./IMG_0007.jpg";
import {UserContext} from "../../context/UserContext";
import {useContext} from "react";

const TopBar = () => {
    const {user, setUser} = useContext(UserContext);

    function showUser() {
        console.log(user);
    }

    return (
        <div className="topBarContainer">
            <img src={logo} alt="Kitereparatie"/>
            <h1 className="welcomeMessage">Welkom terug, <span className="userName">{user.firstName}</span></h1>
            <img src={profilePic} alt="Profielfoto" className="profilePicture"/>
        </div>
    );
}

export default TopBar;