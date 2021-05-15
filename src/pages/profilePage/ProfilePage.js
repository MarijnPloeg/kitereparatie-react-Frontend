import React, {useContext} from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import {UserContext} from "../../context/UserContext";
import TopBar from "../../components/topBar/TopBar";
import CreateRepairButton from "../../components/createRepairButton/CreateRepairButton";
import UserForm from "../../components/userForm/UserForm";
import Profile from "../../components/profile/Profile";
import "./ProfilePage.css"

const ProfilePage = () => {
    const {user} = useContext(UserContext);

    return (
        <div>
            <TopBar/>
            <CreateRepairButton/>
            <Sidebar/>
            <div className="profileOptions">
                <UserForm user={user}/>
                <Profile/>
            </div>
        </div>
    );
}

export default ProfilePage;