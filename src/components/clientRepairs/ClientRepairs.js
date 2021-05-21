import React, {useEffect, useState} from "react";
import "./ClientsRepair.css"
import axios from "axios";



const ClientRepairs = ({user}) => {
    const [customerRepairList, setCustomerRepairList] = useState([]);
    const url = `http://localhost:8088/repairs/klant/${user.appUserId}`;

    async function fetchClientRepairs () {
        try {
            const res = await axios.get(url)
            console.log(res.data[0])
            setCustomerRepairList(res.data[0])
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        url && fetchClientRepairs();
    }, [url]);

    function showList() {
        console.log(customerRepairList)
    }


    return (
        <div  className="clientsRepairContainer">
           <li className="clientsRepairList">
               <ul>Reparatie nummer:{customerRepairList.repairID}</ul>
               <ul>Reparatie type:{customerRepairList.repairType}</ul>
               <ul>Reparatie datum:{customerRepairList.dateCreated}</ul>
               <ul>Reparatie info: {customerRepairList.repairNote}</ul>
           </li>
        </div>
    );
};


export default ClientRepairs