import React, {useState} from "react";
import "./RepairsAndPricing.css";
import KiteRepair from "../repairEstimates/kiteRepair/KiteRepair";
import { KiteRepairProvider} from "../../context/KiteRepairContext";

const RepairsAndPricing = () => {
    const [option, setOption] = useState("Kite");
    return (
        <div className="repairsAndPricingContainer">
            <h1 className="repairTitle">Reparaties en Prijzen</h1>
            <div className="optionContainer">
                <button className="option" onClick={() => setOption("Kite")}>Kite</button>
                <button className="option" onClick={() => setOption("Bar")}>Bar</button>
                <button className="option" onClick={() => setOption("Wetsuit")}>Wetsuit</button>
                <button className="option" onClick={() => setOption("Board")}>Board</button>
            </div>
            <form className="form">
                {option === "Kite" && (
                    <KiteRepairProvider>
                        <KiteRepair/>
                    </KiteRepairProvider>
                )}
                {option === "Bar" && (
                    <h1>Bar</h1>
                )}
                {option === "Wetsuit" && (
                    <h1>Wetsuit</h1>
                )}
                {option === "Board" && (
                    <h1>Board</h1>
                )}
            </form>
        </div>
    );
};

export default RepairsAndPricing;