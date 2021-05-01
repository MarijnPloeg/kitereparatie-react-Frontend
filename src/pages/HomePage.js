import React from "react";
import {motion} from "framer-motion";

//Components
import TopNavigation from "../components/navigation/TopNavigation";
import HomeOptions from "../components/homeOptions/HomeOptions";
import AboutUs from "../components/aboutUs/AboutUs";
import RepairsAndPricing from "../components/repairsAndPricing/RepairsAndPricing";

const HomePage = () => {
    return (
        <motion.div  initial={{ scale: 0, opacity: 0 }}
                     animate={{ scale: 1, opacity: 1 }}
                     exit={{ x: 0, opacity: 0 }}>
            <TopNavigation/>
            <HomeOptions />
            <AboutUs />
            <RepairsAndPricing />
        </motion.div>
    )
}

export default HomePage;