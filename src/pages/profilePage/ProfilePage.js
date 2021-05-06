import React, {useContext} from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import {UserContext} from "../../context/UserContext";

const ProfilePage = () => {
    const {user} = useContext(UserContext);
    function showUser() {
    console.table(user)
    }
    return (
        <p>
            <Sidebar/>
            <button onClick={showUser}>Show user</button>
        </p>
    );
}

export default ProfilePage;