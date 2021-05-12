import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import CreateRepairButton from "../../components/createRepairButton/CreateRepairButton";

import "./StartPage.css";
import TopBar from "../../components/topBar/TopBar";

const StartPage = () => {
    return (
        <>
            <TopBar />
            <CreateRepairButton/>
            <Sidebar/>
        </>
    );
}

export default StartPage;