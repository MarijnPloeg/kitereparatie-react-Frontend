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
    const apiURL = "http://localhost:8088";

    const authAxios = axios.create({
        baseURL: apiURL,
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }})

    async function fetchRepairs() {
        try {
            const repairsData = await authAxios.get("/repairs");
            setRepairs(repairsData.data)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        apiURL && fetchRepairs();
    }, [apiURL]);


    return (
        <div className="repairsContainer">
            <div className="repairsList">
                {repairs.filter(value => {
                    if (searchTerm === "") {
                        return value;
                    } else if (value.repairType.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return value;
                    }
                }).map((val, key) => {
                    return (
                        <Repair data={val}/>
                    )
                })}
            </div>
        </div>

    );
};

export default Repairs;