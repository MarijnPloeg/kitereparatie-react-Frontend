import React, {useState, useMemo} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import "./App.css";
//Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import MyRepairsPage from "./pages/MyRepairsPage/MyRepairsPage"
import ProfilePage from "./pages/profilePage/ProfilePage";
import CreateRepairForm from "./pages/createRepairPage/CreateRepairForm";
import {UserContext} from "./context/UserContext";

function App() {
    const [user, setUser] = useState(null);
    const value = useMemo(() => ({ user, setUser }), [user, setUser]);

    return (
        <Router>
            <AnimatePresence exitBeforeEnter>
                <Switch>
                    <UserContext.Provider value={value}>
                        <Route exact path="/home" component={HomePage}/>
                        <Route path="/login" component={LoginPage}/>
                        <Route path="/myRepairs" component={MyRepairsPage}/>
                        <Route path="/register" component={RegisterPage}/>
                        <Route path="/profile" component={ProfilePage}/>
                        <Route path="/createRepair" component={CreateRepairForm}/>
                    </UserContext.Provider>
                </Switch>
            </AnimatePresence>
        </Router>

    );
}

export default App;
