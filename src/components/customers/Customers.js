import React, {useContext, useEffect, useState} from "react";
import Customer from "../customer/Customer";
import axios from "axios";

// Styling
import "./Customers.css";

const Customers = () => {
    const [customers, setCustomers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [error, setError] = useState("");
    const apiURL = "http://localhost:8088";

    const authAxios = axios.create({
        baseURL: apiURL,
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }})

    async function fetchCustomers() {
        try {
            const data = await authAxios.get("/users");
            setCustomers(data.data);
        } catch (e) {
            setError(e.message)
        }
    }

    useEffect(() => {
        apiURL && fetchCustomers();
    }, [apiURL]);

    return (
        <div className="customersContainer">
            <div className="customerList">
                <div className="topBar">
                    <p>Naam</p>
                    <p>Email</p>
                    <p>Adres</p>
                    <input type="text" placeholder="Zoeken..." onfocus="this.placeholder = ''"
                           onChange={(e) => setSearchTerm(e.target.value)}/>
                </div>
                {customers.filter((val) => {
                    if (searchTerm === "") {
                        return val;
                    } else if (val.firstName.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val;
                    }
                }).map((val, key) => {
                    let address = val.address;
                    let streetName;
                    if (address === null) {
                        streetName = "";
                    } else {
                        streetName = address.streetName + " " + address.houseNumber + ", " + address.city;
                    }
                    return <Customer name={val.firstName + " " + val.lastName} email={val.email}
                                     address={streetName}/>;
                    }
                )}
            </div>
        </div>
    );
}

export default Customers;