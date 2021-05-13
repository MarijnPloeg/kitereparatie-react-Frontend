import React, {useContext, useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {faPen} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {selectedUserContext} from "../../context/selectedUser";
import axios from "axios";

const Customer = ({user, name, email}) => {
    const {setSelectedUser} = useContext(selectedUserContext);
    const [streetName, setStreetName] = useState("");
    const url = `http://localhost:8088/addresses/klant/${user.user}`;

    async function getUser() {
        try {
            const res = await axios.get(`http://localhost:8088/users/${email}`);
            setSelectedUser(res.data);
            fetchAddress();
            setUser(res.data);
        } catch (e) {
            console.log(e)
        }
    }

    async function fetchAddress() {
        console.log(user);
        // console.log(url);
        // try {
        //     const address = axios.get(url);
        //     console.log("Address " + address);
        // } catch (e) {
        //     console.log(e);
        // }
    }


    useEffect(() => {
        url && fetchAddress();
    }, [url]);



    function setUser(user) {
        console.log(user)
    }

    return (
        <div className="customer">
            <p className="name">{name}</p>
            <p className="email">{email}</p>
            <p className="address">Jansstraat 33</p>
            <Link className="edit" onClick={getUser} to="/klant"><FontAwesomeIcon icon={faPen}/></Link>
        </div>

    );
}

export default Customer;