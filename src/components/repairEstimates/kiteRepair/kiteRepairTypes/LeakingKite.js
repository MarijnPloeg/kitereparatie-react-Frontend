import React, {useContext} from "react";
import {IndicationContext} from "../../../../context/IndicationContext";

export const LeakingKite = () => {
    const [indication, setIndication] = useContext(IndicationContext);
    return (
        <>
            <div className="secondaryForm">
                <select name="leakIndicator" id="leakIndicator">
                    <option onClick={() => setIndication("20,-")} value="Lekkage">Lekkage</option>
                    <option onClick={() => setIndication("30,-")} value="LE">Leading edge ontploft</option>
                    <option onClick={() => setIndication("40,-")} value="DontKnow">Ik weet het niet</option>
                </select>
            </div>

        </>
    );
};