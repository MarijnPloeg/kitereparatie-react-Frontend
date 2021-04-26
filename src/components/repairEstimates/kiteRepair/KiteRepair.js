import React, {useState} from "react";
//Images
import kitephoto from "./images/Kite.JPG"
import "./KiteRepair.css"

const KiteRepair = () => {
    const [indication, setIndication] = useState("0,-");
    const [type, setType] = useState("Doek")

    return (
        <div className="form">
            <img src={kitephoto} alt="Kite foto" className="repairPhoto"/>
            <div className="sideText">
                <h3>Kitereparatie</h3>
                <p>Vul het onderstaande formulier in voor een prijs indicatie</p>
                <h1>±€{indication}</h1>
                <div className="options">
                    <input type="radio" id="Doek" name="selectRepair" value="Doek" onClick={() => setType("Doek")}/>
                    <label htmlFor="Doek">Doek</label>
                    <input type="radio" id="Lekkage" name="selectRepair" value="Lekkage"
                           onClick={() => setType("Lekkage")}/>
                    <label htmlFor="Lekkage">Lekkage</label>
                    <input type="radio" id="Bridles" name="selectRepair" value="Bridles"
                           onClick={() => setType("Bridles")}/>
                    <label htmlFor="Bridles">Bridles</label>
                    <input type="radio" id="Anders" name="selectRepair" value="Anders" onClick={() => setType("Anders")}/>
                    <label htmlFor="Anders">Anders</label>
                </div>
                <div className="secondaryForm">
                    <div className="secondaryOptions">
                        <button className="firstOption">Doek</button>
                        <button className="secondOption">Leading Edge</button>
                        <button className="thirdOption">Strut</button>
                    </div>
                    <p>Geef een indicatie van de schade</p>
                    <input type="text" name="schade" id="schade"/>
                    <button className="calculateCosts" onClick={() => setIndication("35,-")}>Bereken kosten</button>
                </div>
            </div>
        </div>
    );
}

export default KiteRepair;