import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import TopBar from "../../components/topBar/TopBar";
import CreateRepairButton from "../../components/createRepairButton/CreateRepairButton";
import Repairs from "../../components/repairs/Repairs";

const RepairsPage = () => {
    return (
        <div>
            <TopBar/>
            <CreateRepairButton/>
            <Sidebar/>
            <Repairs/>
        </div>
    );
}

export default RepairsPage;