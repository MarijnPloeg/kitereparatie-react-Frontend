import React, {useState, useMemo, useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import "./App.css";
//Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/loginPage/LoginPage";
import RegisterPage from "./pages/registerPage/RegisterPage";
import StartPage from "./pages/startPage/StartPage"
import ProfilePage from "./pages/profilePage/ProfilePage";
import ClientsPage from "./pages/customersPage/CustomersPage"
import CreateRepairForm from "./pages/createRepairPage/CreateRepairForm";
import EditClient from "./components/editClient/EditClient";
import RepairsPage from "./pages/repairsPage/RepairsPage";
import BrandsPage from "./pages/brandsPage/BrandsPage";
import {UserContext} from "./context/UserContext";
import {AddressContext} from "./context/AddressContext";
import {selectedUserContext} from "./context/selectedUser";
import axios from "axios";

function App() {
    const [user, setUser] = useState(null);
    const userValue = useMemo(() => ({ user, setUser }), [user, setUser]);

    const [repair, setRepair] = useState(null);
    const repairValue = useMemo(() => ({ repair, setRepair }), [repair, setRepair]);

    const [address, setAddress] = useState({address: {}})
    const addressValue = useMemo(() => ({address, setAddress}), [address, setAddress])

    const [selectedUser, setSelectedUser] = useState({selectedUser: {}})
    const selectedUserValue = useMemo(() => ({selectedUser, setSelectedUser}), [selectedUser, setSelectedUser])

    useEffect(() => {
        console.log(localStorage.getItem("user"))
        setUser(localStorage.getItem("user"))
    }, []);


    return (
        <Router>
            <AnimatePresence exitBeforeEnter>
                <Switch>
                    <UserContext.Provider value={userValue}>
                        <Route exact path="/home" component={HomePage}/>
                        <Route path="/login" component={LoginPage}/>
                        <Route path="/myRepairs" component={StartPage}/>
                        <Route path="/register" component={RegisterPage}/>
                        <Route path="/reparaties" component={RepairsPage}/>
                        <Route path="/merken" component={BrandsPage}/>
                        <AddressContext.Provider value={addressValue}>
                            <Route path="/profile" component={ProfilePage}/>
                            <selectedUserContext.Provider value={selectedUserValue}>
                                <Route path="/klanten" component={ClientsPage}/>
                                <Route path="/klant" component={EditClient}/>
                            </selectedUserContext.Provider>
                        </AddressContext.Provider>
                        <Route path="/createRepair" component={CreateRepairForm}/>
                    </UserContext.Provider>
                </Switch>
            </AnimatePresence>
        </Router>
    );
}

export default App;
