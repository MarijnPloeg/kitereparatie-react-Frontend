import React from "react";
import "./HomeCard.css";

const HomeCard = ({image, title}) => {
    return (
        <div className="card">
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <button className="repairButton">Reparatie aanmelden</button>
        </div>
    );
}

export default HomeCard;