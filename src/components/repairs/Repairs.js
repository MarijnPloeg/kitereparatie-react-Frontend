import React, {useContext, useEffect, useState} from "react";
import Customer from "../customer/Customer";
import axios from "axios";

import Repair from "../repair/Repair";
// Styling
import "./Repairs.css";

const Repairs = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [repairs, setRepairs] = useState([]);
    const [repairOwner, setRepairOwner] = useState({});
    const url = "http://localhost:8088/repairs";

    async function fetchRepairs() {
        try {
            const repairsData = await axios.get(url);
            setRepairs(repairsData.data)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        console.log(repairs.data)
        url && fetchRepairs();
    }, [url]);


    return (
        <div className="repairsContainer">
            <div className="repairsList">
                <div className="topBar">
                    <p>Soort reparatie</p>
                    <p>Ingeleverd op</p>
                    <p>Ingeleverd door</p>
                    <p>Status</p>
                    <input type="text" placeholder="Zoeken..." onfocus="this.placeholder = ''"
                           onChange={(e) => setSearchTerm(e.target.value)}/>
                </div>
                {repairs.filter(value => {
                    if (searchTerm === "") {
                        return value;
                    } else if (value.repairType.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return value;
                    }
                }).map((val, key) => {
                    console.log("GETTING MAPPED HERE! ",val);
                    return (
                        <Repair repair={val}/>
                    )
                })}

            </div>
        </div>

    );
};

export default Repairs;