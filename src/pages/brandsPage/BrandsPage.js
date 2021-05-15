import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import CreateRepairButton from "../../components/createRepairButton/CreateRepairButton";
import TopBar from "../../components/topBar/TopBar";
import Brands from "../../components/brands/Brands";

const BrandsPage = () => {


    return (
        <>
            <TopBar />
            <CreateRepairButton/>
            <Sidebar/>
            <Brands/>
        </>
    );
}

export default BrandsPage;