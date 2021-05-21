import React, {useState, useContext} from "react";
//Images
import kitephoto from "./images/Kite.JPG"
import "./KiteRepair.css"
import {IndicationContext} from "../../../context/IndicationContext";
import FabricRepair from "./kiteRepairTypes/FabricRepair";
import {LeakingKite} from "./kiteRepairTypes/LeakingKite";

const KiteRepair = () => {

    const [type, setType] = useState("")
    const [indication] = useContext(IndicationContext);

    return (
        <div className="form">
            <img src={kitephoto} alt="Kite foto" className="repairPhoto"/>
            <div className="sideText">
                <h3>Kitereparatie</h3>
                <p>Vul het onderstaande formulier in voor een prijs indicatie</p>
                <h1>±€{indication.toString()}</h1>
                <div className="options">
                    <input type="radio" id="Doek" name="selectRepair" value="Doek"
                           onClick={() => setType("Doek")}/>
                    <label htmlFor="Doek">Doek</label>
                    <input type="radio" id="Lekkage" name="selectRepair" value="Lekkage"
                           onClick={() => setType("Lekkage")}/>
                    <label htmlFor="Lekkage">Lekkage</label>
                    <input type="radio" id="Bridles" name="selectRepair" value="Bridles"
                           onClick={() => setType("Bridles")}/>
                    <label htmlFor="Bridles">Bridles</label>
                    <input type="radio" id="Anders" name="selectRepair" value="Anders"
                           onClick={() => setType("Anders")}/>
                    <label htmlFor="Anders">Anders</label>
                </div>
                {type === "Doek" && (
                    <FabricRepair/>
                )}
                {type === "Lekkage" && (
                    <LeakingKite/>
                )}
            </div>
        </div>
    );
}

export default KiteRepair;