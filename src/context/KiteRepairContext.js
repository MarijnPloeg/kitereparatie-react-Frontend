import React, {useState, createContext} from "react";

export const KiteRepairContext = createContext();

export const KiteRepairProvider = props => {
    const [indication, setIndication] = useState(0.00);

    return (
       <KiteRepairContext.Provider value={[indication, setIndication]}>
           {props.children}
       </KiteRepairContext.Provider>
    );
};
