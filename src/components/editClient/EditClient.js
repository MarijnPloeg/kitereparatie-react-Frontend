import React, {useContext} from "react";
import {selectedUserContext} from "../../context/selectedUser";
import TopBar from "../topBar/TopBar";
import Sidebar from "../sidebar/Sidebar";
import CreateRepairButton from "../createRepairButton/CreateRepairButton";
import UserForm from "../userForm/UserForm";
import ClientRepairs from "../clientRepairs/ClientRepairs";

const EditClient = () => {
    const {selectedUser} = useContext(selectedUserContext);

    return (
        <>
            <TopBar/>
            <Sidebar/>
            <CreateRepairButton/>
            <UserForm user={selectedUser} />
            <ClientRepairs  user={selectedUser} />
        </>
    );
};

export default EditClient;