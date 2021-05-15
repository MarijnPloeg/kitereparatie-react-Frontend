import React, {useState, useContext, useEffect} from "react";
import UploadFilesService from "../services/uploadFilesService";
import "./Profile.css";
import axios from "axios";
import {UserContext} from "../../context/UserContext";

const Profile = () => {
    // const {user} = useContext(UserContext);
    // const [image, setImage] = useState({
    //     selectedFiles: "",
    //     currentFile: undefined,
    //     progress: 0,
    //     message: "",
    //     fileInfos: [],
    // });
    //
    // function selectFile(e) {
    //     console.log(e.target.files[0])
    //     setImage({
    //         selectedFiles: e.target.files,
    //     })
    //     upload(user);
    // }
    //
    // function upload(user) {
    //     let currentFile = image.selectedFiles[0];
    //     setImage({
    //         progress: 0,
    //         currentFile: currentFile
    //     });
    //     UploadFilesService.upload(currentFile, (e) => {
    //         setImage({
    //             progress: Math.round((100 * e.loaded) / e.total),
    //         })
    //     }).then((res) => {
    //         setImage({
    //             message: res.data.message
    //         });
    //     }).then((files) => {
    //         setImage({
    //             fileInfos: files.data
    //         });
    //     });
    // }
    //
    // const {selectedFiles, currentFile, progress, message, fileInfos} = image;
    const [image, setImage] = useState();

    const onFileChangeHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        axios.post('http://localhost:8088/users/upload', formData).then((res) => {
            console.log(res);
        })
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
