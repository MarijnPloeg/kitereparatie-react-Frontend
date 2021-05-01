import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import "./App.css";
//Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
    return (
        <Router>
            <AnimatePresence exitBeforeEnter>
                <Switch>
                    <Route exact path="/home" component={HomePage}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/register" component={RegisterPage}/>
                </Switch>
            </AnimatePresence>
        </Router>

    );
}

export default App;
