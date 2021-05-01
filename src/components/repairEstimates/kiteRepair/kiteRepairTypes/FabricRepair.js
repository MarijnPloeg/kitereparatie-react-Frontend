import React, {useContext} from "react";
import {KiteRepairContext} from "../../../../context/KiteRepairContext";

const FabricRepair = () => {
    const [indication, setIndication] = useContext(KiteRepairContext);

    return (
        <>
            <div className="secondaryForm">
                <div className="secondaryOptions">
                    <button className="firstOption">Doek</button>
                    <button className="secondOption">Leading Edge</button>
                    <button className="thirdOption">Strut</button>
                </div>
                <p>Geef een indicatie van de schade in CM</p>
                <select name="damageIndicator" id="damageIndicator">
                    <option onClick={() => setIndication("20,-")} value="10">10</option>
                    <option onClick={() => setIndication("30,-")} value="20">20</option>
                    <option onClick={() => setIndication("40,-")} value="30">30</option>
                    <option onClick={() => setIndication("50,-")} value="40">40</option>
                    <option onClick={() => setIndication("60,-")} value="50">50</option>
                    <option onClick={() => setIndication("70+,-")} value="60">60+</option>
                </select>
            </div>

        </>
    )
};

export default FabricRepair;