import React from "react";
import TopNavigation from "./components/navigation/TopNavigation";
import "./App.css";
import HomeOptions from "./components/homeOptions/HomeOptions";
import AboutUs from "./components/aboutUs/AboutUs";
import RepairsAndPricing from "./components/repairsAndPricing/RepairsAndPricing";

function App() {
    return (
        <div>
            <TopNavigation/>
            <HomeOptions />
            <AboutUs />
            <RepairsAndPricing />
        </div>
    );
}

export default App;
