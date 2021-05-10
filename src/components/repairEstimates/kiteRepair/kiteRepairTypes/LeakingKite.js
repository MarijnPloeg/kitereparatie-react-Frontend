import React, {useContext} from "react";
import {IndicationContext} from "../../../../context/IndicationContext";

export const LeakingKite = () => {
    const [setIndication] = useContext(IndicationContext);
    return (
        <>
            <div className="secondaryForm">
                <select name="leakIndicator" id="leakIndicator">
                    <option onClick={() => setIndication("20,-")} value="Lekkage">Lekkage</option>
                    <option onClick={() => setIndication("30,-")} value="LE">Leading edge ontploft</option>
                    <option onClick={() => setIndication("40,-")} value="DontKnow">Ik weet het niet</option>
                </select>
                {/*<input type="radio" name="ventiel" id="1" value="ventiel" onClick={() => setIndication("30,-")}/>*/}
                {/*<label htmlFor="ventiel">Ventiel</label>*/}
                {/*<input type="radio" name="LeOntploft" id="2" value="LeOntploft" onClick={() => setIndication("50,-")} />*/}
                {/*<label htmlFor="ventiel">Leading edge ontploft</label>*/}
                {/*<input type="radio" name="NoClue" id="3" value="NoClue" onClick={() => setIndication("40,-")} />*/}
                {/*<label htmlFor="ventiel">Ik weet niet waar hij lek is</label>*/}
            </div>

        </>
    );
};