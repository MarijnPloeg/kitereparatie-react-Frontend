import React, {useContext, useEffect, useState} from "react";
import Customer from "../customer/Customer";
import axios from "axios";

// Styling
import "./Customers.css";

const Customers = () => {
    const [customers, setCustomers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const url = "http://localhost:8088/users";

    async function fetchCustomers() {
        try {
            const data = await axios.get(url);
            setCustomers(data.data);
            console.log(data.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        url && fetchCustomers();
    }, [url]);

    return (
        <div className="customersContainer">
            <div className="customerList">
                <div className="topBar">
                    <p>Naam</p>
                    <p>Email</p>
                    <p>Adres</p>
                    <input type="text" placeholder="Zoeken..." onfocus="this.placeholder = ''" onChange={(e) => setSearchTerm(e.target.value)}/>
                </div>
                {customers.filter((val) => {
                   if (searchTerm === "") {
                       return val;
                   } else if (val.firstName.toLowerCase().includes(searchTerm.toLowerCase())) {
                       return val;
                   }
                }).map((val, key) => {
                    return <Customer user={val} name={val.firstName + " " + val.lastName} email={val.email} />
                }
                )}
            </div>
        </div>
    );
}

export default Customers;