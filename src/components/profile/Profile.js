import React, {useContext} from "react";
import {useForm} from "react-hook-form";

import "./Profile.css";
import {UserContext} from "../../context/UserContext";
import {Link} from "react-router-dom";
import axios from "axios";
import {AddressContext} from "../../context/AddressContext";

const Profile = () => {
    const {handleSubmit, register} = useForm();
    const {user, setUser} = useContext(UserContext);
    const {address, setAddress} = useContext(AddressContext);

    async function onSubmit(data) {
        try {
            setAddress({
                state: data.state,
                city: data.city,
                country: data.country,
                houseNumber: data.houseNumber,
                postalCode: data.postalCode,
                streetName: data.streetName
            })
            // const res = await axios.post("http://localhost:8088/addresses", {
            //     appUserId: user.appUserId,
            //     state: data.state,
            //     city: data.city,
            //     country: data.country,
            //     houseNumber: data.houseNumber,
            //     postalCode: data.postalCode,
            //     streetName: data.streetName
            // });
            console.log(address);
        } catch (e) {
            console.log("Error with async function: ", e)
        }
    }

    function showAddress() {
        console.log(address);
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="naam">Naam:</label>
                <input type="text" id="naam" name="naam" value={user.firstName + " " + user.lastName}/>
                <label htmlFor="naam">Email:</label>
                <input type="text" id="email" name="email" value={user.email}/>
                <label htmlFor="naam">Wachtwoord:</label>
                <input type="password" id="password" name="password" value={user.password}/>
                <label htmlFor="naam">Straat:</label>
                <input type="text" id="streetName" name="streetName"/>
                <label htmlFor="naam">Huisnummer:</label>
                <input type="text" id="houseNumber" name="houseNumber"/>
                <label htmlFor="naam">Postcode:</label>
                <input type="text" id="postalCode" name="postalCode"/>
                <label htmlFor="naam">Stad:</label>
                <input type="text" id="city" name="city"/>
                <label htmlFor="naam">Provincie:</label>
                <input type="text" id="state" name="state"/>
                <label htmlFor="naam">Land:</label>
                <input type="text" id="country" name="country"/>
                <button onClick={showAddress}>Show address</button>
                <button type="submit" className="updateButton">Update</button>
            </form>

        </>

    );
};

export default Profile;