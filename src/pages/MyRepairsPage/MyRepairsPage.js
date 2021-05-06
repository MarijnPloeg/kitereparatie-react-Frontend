import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import CreateRepairButton from "../../components/createRepairButton/CreateRepairButton";

import "./loggedInPage.css";
import TopBar from "../../components/topBar/TopBar";

const MyRepairsPage = () => {
    return (
        <>
            <TopBar />
            <CreateRepairButton/>
            <Sidebar/>
        </>
    );
}

export default MyRepairsPage;