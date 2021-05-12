import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import TopBar from "../../components/topBar/TopBar";
import Customers from "../../components/customers/Customers";
import CreateRepairButton from "../../components/createRepairButton/CreateRepairButton";

const customersPage = () => {
    return (
        <div>
            <TopBar/>
            <CreateRepairButton/>
            <Sidebar/>
            <Customers/>
        </div>
    );
}

export default customersPage;