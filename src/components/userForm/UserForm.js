import React, {useContext} from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import {AddressContext} from "../../context/AddressContext";
//Styling
import "./UserForm.css";

const UserForm = (user) => {
    const {handleSubmit, register} = useForm();
    const {address, setAddress} = useContext(AddressContext);

    function organizeData(data) {
        setAddress({
            State: data.state,
            city: data.city,
            country: data.country,
            houseNumber: data.houseNumber,
            postalCode: data.postalCode,
            streetName: data.streetName
        });

        postData();
    }

    async function postData() {
        console.log("From post",user.user)
        console.log("From post",address);

        // let params = {
        //     User: user.user,
        //     Address: address
        // }
        // try {
        //     console.log('Adres: ',address)
        //     const res = await axios.post("http://localhost:8088/addresses", {
        //        params
        //     });
        //     console.log(res);
        // } catch (e) {
        //     console.log("Error with async function: ", e)
        // }
    }

    return (
        <>
            <form className="profileForm" onSubmit={handleSubmit(organizeData)}>
                <label htmlFor="naam">Naam:</label>
                <input type="text" id="naam" name="naam"
                       value={user.user.firstName + " " + user.user.lastName} {...register("name")}/>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" value={user.user.email}{...register("email")}/>
                <label htmlFor="streetName">Straat:</label>
                <input type="text" id="streetName" name="streetName" value={user.user.streetName} {...register("streetName")}/>
                <label htmlFor="houseNumber">Huisnummer:</label>
                <input type="text" id="houseNumber" name="houseNumber"{...register("houseNumber")}/>
                <label htmlFor="postalCode">Postcode:</label>
                <input type="text" id="postalCode" name="postalCode"{...register("postalCode")}/>
                <label htmlFor="city">Stad:</label>
                <input type="text" id="city" name="city"{...register("city")}/>
                <label htmlFor="state">Provincie:</label>
                <input type="text" id="state" name="state"{...register("state")}/>
                <label htmlFor="country">Land:</label>
                <input type="text" id="country" name="country"{...register("country")}/>
                <button type="submit" className="updateButton">Update</button>
                <button type="submit" className="updateButton">Save</button>
            </form>
        </>
    )
};

export default UserForm