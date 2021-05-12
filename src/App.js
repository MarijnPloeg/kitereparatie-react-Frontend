import React, {useState, useMemo} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import "./App.css";
//Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import StartPage from "./pages/startPage/StartPage"
import ProfilePage from "./pages/profilePage/ProfilePage";
import ClientsPage from "./pages/customersPage/CustomersPage"
import CreateRepairForm from "./pages/createRepairPage/CreateRepairForm";
import EditClient from "./components/editClient/EditClient";
import {UserContext} from "./context/UserContext";
import {AddressContext} from "./context/AddressContext";
import {selectedUserContext} from "./context/selectedUser";

function App() {
    const [user, setUser] = useState({user:{}});
    const userValue = useMemo(() => ({ user, setUser }), [user, setUser]);

    const [repair, setRepair] = useState(null);
    const repairValue = useMemo(() => ({ repair, setRepair }), [repair, setRepair]);

    const [address, setAddress] = useState({address: {}})
    const addressValue = useMemo(() => ({address, setAddress}), [address, setAddress])

    const [selectedUser, setSelectedUser] = useState({selectedUser: {}})
    const selectedUserValue = useMemo(() => ({selectedUser, setSelectedUser}), [selectedUser, setSelectedUser])

    return (
        <Router>
            <AnimatePresence exitBeforeEnter>
                <Switch>
                    <UserContext.Provider value={userValue}>
                        <Route exact path="/home" component={HomePage}/>
                        <Route path="/login" component={LoginPage}/>
                        <Route path="/myRepairs" component={StartPage}/>
                        <Route path="/register" component={RegisterPage}/>
                        <AddressContext.Provider value={addressValue}>
                            <Route path="/profile" component={ProfilePage}/>

                            <selectedUserContext.Provider value={selectedUserValue}>
                                <Route path="/klanten" component={ClientsPage}/>
                                <Route path="/klant" component={EditClient}></Route>
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
