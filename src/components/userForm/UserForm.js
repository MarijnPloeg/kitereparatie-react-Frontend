import React, {useContext} from "react";
import {set, useForm} from "react-hook-form";
import axios from "axios";
import {AddressContext} from "../../context/AddressContext";
//Styling
import "./UserForm.css";

const UserForm = (user) => {
    const {handleSubmit, register} = useForm();
    const {error, setError} = useForm("");
    const {address, setAddress} = useContext(AddressContext);
    const apiURL = "http://localhost:8088"

    const authAxios = axios.create({
        baseURL: apiURL,
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }})

    function organizeData(data) {
        setAddress({
            State: data.state,
            city: data.city,
            country: data.country,
            houseNumber: data.houseNumber,
            postalCode: data.postalCode,
            streetName: data.streetName
        });
         postData(data);
    }

    async function postData(data) {
        try {
            const res = await authAxios.post(`/users/${user.user.appUserId}/address`, {
                state: data.state,
                city: data.city,
                country: data.country,
                houseNumber: data.houseNumber,
                postalCode: data.postalCode,
                streetName: data.streetName
            });
        } catch (e) {
            setError(e.message)
        }
    }

    return (
        //TODO: Show errors
        <>
            <form className="profileForm" onSubmit={handleSubmit(organizeData)}>
                <label htmlFor="naam">Naam:</label>
                <input type="text" id="naam" name="naam"
                       value={user.user.firstName + " " + user.user.lastName} {...register("name")}/>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" value={user.user.email}{...register("email")}/>
                <label htmlFor="streetName">Straat:</label>
                <input type="text" id="streetName" name="streetName" value={address.streetName} {...register("streetName")}/>
                <label htmlFor="houseNumber">Huisnummer:</label>
                <input type="text" id="houseNumber" name="houseNumber" value={address.houseNumber} {...register("houseNumber")}/>
                <label htmlFor="postalCode">Postcode:</label>
                <input type="text" id="postalCode" name="postalCode" value={address.postalCode}{...register("postalCode")}/>
                <label htmlFor="city">Stad:</label>
                <input type="text" id="city" name="city" value={address.city}{...register("city")}/>
                <label htmlFor="state">Provincie:</label>
                <input type="text" id="state" name="state" value={address.state}{...register("state")}/>
                <label htmlFor="country">Land:</label>
                <input type="text" id="country" name="country" value={address.country}{...register("country")}/>
                {/*TODO: Saving to POST request and Update to PUT request*/}
                <button type="submit" className="updateButton">Update</button>
                <button type="submit" className="updateButton">Save</button>
            </form>
        </>
    )
};

export default UserForm