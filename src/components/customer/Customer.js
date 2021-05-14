import React, {useContext, useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {faPen} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {selectedUserContext} from "../../context/selectedUser";
import axios from "axios";

const Customer = ({name, email, address}) => {
    const {setSelectedUser} = useContext(selectedUserContext);

    async function getUser() {
        try {
            const res = await axios.get(`http://localhost:8088/users/${email}`);
            setSelectedUser(res.data);
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div className="customer">
            <p className="name">{name}</p>
            <p className="email">{email}</p>
            <p className="address">{address}</p>
            <Link className="edit" onClick={getUser} to="/klant"><FontAwesomeIcon icon={faPen}/></Link>
        </div>

    );
}

export default Customer;