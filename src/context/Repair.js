import React, {useState, createContext} from "react";

const today = new Date();

const initialRepair = {
    build_year: 2020,
    clean_product: true,
    date_created: today.getDate(),
    delivery_option: "BYPOST",
    express_repair: false,
    model: "Orbit",
    product_image: null,
    repair_note: "Lekt bij de strut",
    repair_type: "Lekkage",
    size: 9,
    length_check: false,
    board_type: null,
    canopy: false,
    leading_edge: false,
    leakage: true,
    location: "inflate ventiel",
    strut: false,
    damage_sizecm: null,
    zipper: false,
    brand_brandid: 1,
    customerid_id: null
};
export const RepairContext = createContext(initialRepair);

export const RepairProvider = props => {
    const [repair, setRepair] = useState(initialRepair);
    return (
        <RepairProvider.Provider value={[repair, setRepair]}>
            {props.children}
        </RepairProvider.Provider>
    );
};
