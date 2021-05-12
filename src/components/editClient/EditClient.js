import React, {useContext} from "react";
import {selectedUserContext} from "../../context/selectedUser";

import {useForm} from "react-hook-form";
import TopBar from "../topBar/TopBar";
import Sidebar from "../sidebar/Sidebar";
import CreateRepairButton from "../createRepairButton/CreateRepairButton";
import UserForm from "../userForm/UserForm";

const EditClient = () => {
    const {selectedUser} = useContext(selectedUserContext);

    return (
        <>
            <TopBar/>
            <Sidebar/>
            <CreateRepairButton/>
            <UserForm user={selectedUser} />
        </>
    );
};

export default EditClient;