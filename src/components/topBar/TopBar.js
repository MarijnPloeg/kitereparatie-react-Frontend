import "./TopBar.css";
import logo from "./KitereparatieLogo-Kleur.png";
import profilePic from "./IMG_0007.jpg";

const TopBar = () => {
    return (
        <div className="topBarContainer">
            <img src={logo} alt="Kitereparatie"/>
            <h1 className="welcomeMessage">Welkom terug, <span className="userName">Marijn</span></h1>
            <img src={profilePic} alt="Profielfoto" className="profilePicture"/>
        </div>
    );
}

export default TopBar;