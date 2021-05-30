import React, {useEffect, useState} from "react";
import "./ClientsRepair.css"
import axios from "axios";



const ClientRepairs = ({user}) => {
    const [customerRepairList, setCustomerRepairList] = useState([]);
    const apiURL = `http://localhost:8088`;


    const authAxios = axios.create({
        baseURL: apiURL,
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }})

    async function fetchClientRepairs () {
        console.log(user)
        try {
            const res = await authAxios.get(`/repairs/klant/${user.appUserId}`)
            setCustomerRepairList(res.data[0])
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        apiURL && fetchClientRepairs();
    }, [apiURL]);



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