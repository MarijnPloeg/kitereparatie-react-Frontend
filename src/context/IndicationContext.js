import React, {useState, createContext} from "react";

export const IndicationContext = createContext();

export const IndicationProvider = props => {
    const [indication, setIndication] = useState(0.00);

    return (
       <IndicationContext.Provider value={[indication, setIndication]}>
           {props.children}
       </IndicationContext.Provider>
    );
};
