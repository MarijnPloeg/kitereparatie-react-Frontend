import React, {useContext} from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import {UserContext} from "../../context/UserContext";
import TopBar from "../../components/topBar/TopBar";
import CreateRepairButton from "../../components/createRepairButton/CreateRepairButton";
import Profile from "../../components/profile/Profile";

const ProfilePage = () => {
    const {user} = useContext(UserContext);
    function showUser() {
        console.table(user);
    }

    return (
        <div>
            <TopBar/>
            <CreateRepairButton/>
            <Sidebar/>
            <Profile/>
        </div>
    );
}

export default ProfilePage;