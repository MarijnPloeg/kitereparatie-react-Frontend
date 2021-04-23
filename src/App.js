import React from "react";
import TopNavigation from "./components/navigation/TopNavigation";
import "./App.css";
import HomeOptions from "./components/homeOptions/HomeOptions";

function App() {
    return (
        <div>
            <TopNavigation/>
            <HomeOptions />
        </div>
    );
}

export default App;
