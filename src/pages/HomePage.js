import React from "react";
import TopNavigation from "../components/navigation/TopNavigation";
import HomeOptions from "../components/homeOptions/HomeOptions";
import AboutUs from "../components/aboutUs/AboutUs";
import RepairsAndPricing from "../components/repairsAndPricing/RepairsAndPricing";

const HomePage = () => {
    return (
        <div>
            <TopNavigation/>
            <HomeOptions />
            <AboutUs />
            <RepairsAndPricing />
        </div>
    )
}

export default HomePage;