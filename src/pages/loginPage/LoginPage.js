import React, {useContext, useState} from "react";
import axios from "axios";
import {useForm} from 'react-hook-form';
import {Link, useHistory} from "react-router-dom";
import {motion} from "framer-motion";

import logo from "./KitereparatieLogo-Kleur.png"
import "./LoginPage.css"
import {UserContext} from "../../context/UserContext";

const LoginPage = () => {
    const {handleSubmit, register} = useForm();
    const {setUser} = useContext(UserContext);
    const [error, setError] = useState();
    const history = useHistory();

    // Checking if user exists before authenticating the user. This way I can create unique error messages mapped by the back-end
    async function checkEmail(data) {
        try {
            const res = await axios.get(`http://localhost:8088/users/${data.email}`)
            if (res.status === 200) {
                await authenticateUser(data);
            }
            console.log(res.status);
        } catch (e) {
            setError(e);
        }
    }

    async function authenticateUser(data) {
        try {
            const res = await axios.post("http://localhost:8088/authenticate", {
                email: data.email,
                password: data.password
            });

            console.log(res)

            const getUser = await axios.get(`http://localhost:8088/users/${data.email}`);
            localStorage.setItem("token", res.data.jwt);
            localStorage.setItem("user", JSON.stringify(getUser))
            setUser(getUser.data);
            setTimeout((history.push("/myRepairs"), 5000));

        } catch (e) {
            console.log(e.response);
            setError(e.response.data);
        }
    }

    return (
        <motion.div className="loginPage"
                    initial={{x: 0}}
                    animate={{x: 1}}
                    transition={{duration: .1, ease: "easeInOut"}}
                    exit={{x: 0}}>
            <section className="loginContainer">
                <Link to="/home"><img className="loginLogo" src={logo} alt=""/></Link>
                <h1 className={"loginTitle"}>Welkom terug!</h1>
                {/*TODO: Login met social media accounts (Google, Apple & FaceBook*/}
                <p className={"loginText"}>Login met je email adres:</p>
                <form onSubmit={handleSubmit(checkEmail)}>
                    <label htmlFor="email">
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            {...register("email" ,{ required: true })} />
                    </label>
                    <label htmlFor="password">
                        <input
                            type="password"
                            id="password"
                            placeholder="Wachtwoord"
                            {...register("password" ,{ required: true })}
                        />
                    </label>
                    {error && <p className="errorMessage">{error}</p>}
                    <Link to="" className={"forgotPassword"}>Wachtwoord vergeten?</Link>
                    <button type="submit" className="loginButton">Login</button>
                </form>
            </section>
            <section className="sideRegistration">
                <h1 className="loginTitle">Nog geen account?</h1>
                <p className="loginText">Maak een account aan om reparaties aan te melden en bij te houden</p>
                <Link className="loginButton" to="/register">Registreer</Link>
            </section>
        </motion.div>
    );

};

export default LoginPage;