import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import "./App.css";
//Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import MyRepairsPage from "./pages/MyRepairsPage/MyRepairsPage"

function App() {
    return (
        <Router>
            <AnimatePresence exitBeforeEnter>
                <Switch>
                    <Route exact path="/home" component={HomePage}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/register" component={RegisterPage}/>
                    <Route path="/myRepairs" component={MyRepairsPage}/>
                </Switch>
            </AnimatePresence>
        </Router>

    );
}

export default App;
