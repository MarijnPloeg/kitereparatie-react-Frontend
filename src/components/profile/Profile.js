import React, {useState, useContext, useEffect} from "react";
import UploadFilesService from "../services/uploadFilesService";
import "./Profile.css";
import axios from "axios";
import {UserContext} from "../../context/UserContext";

const Profile = () => {
    const [image, setImage] = useState();
    const apiURL = "http://localhost:8088"

    const authAxios = axios.create({
        baseURL: apiURL,
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }})

    const onFileChangeHandler = (e) => {
        e.preventDefault();
        console.log(e);
        console.log("Image: ",e.target.files[0])
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        authAxios.post('/users/6/image/upload', formData,
            {
                headers: {
                    "Content-Type" : "multipart/form-data"
                }
            }).then((res) => {
            console.log(res)
        });
    };



    return (
        <div className="profileBox">
            <h1>Profile 1</h1>
            <form method="post" encType="multipart/form-data">
                <input type="file"
                       id="profilePicture" name="profilePicture"
                       accept="image/png, image/jpeg"
                       onChange={onFileChangeHandler}/>
            </form>
            <img src="" alt=""/>
        </div>
    );
};

export default Profile
