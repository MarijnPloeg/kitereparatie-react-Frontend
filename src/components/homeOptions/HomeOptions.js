import React from "react";
//Images
import barImage from "./images/Bar.JPG"
import kiteImage from "./images/Kite.JPG";
import boardImage from "./images/Board.jpg";
import wetsuitImage from "./images/Wetsuit.JPG"
import HomeCard from "../homeCard/HomeCard";
//Css
import "./HomeOptions.css";


const HomeOptions = () => {
    return(
        <div className="cardContainer">
            <HomeCard image={barImage} title="Bar reparatie"/>
            <HomeCard image={kiteImage} title="Kite reparatie"/>
            <HomeCard image={boardImage} title="Board reparatie"/>
            <HomeCard image={wetsuitImage} title="Wetsuit reparatie"/>
        </div>
    )
}

export default HomeOptions;