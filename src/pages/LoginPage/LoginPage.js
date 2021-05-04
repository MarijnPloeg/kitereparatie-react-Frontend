import React from "react";
import axios from "axios";
import { useForm } from 'react-hook-form';
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

import logo from "./KitereparatieLogo-Kleur.png"
import "./LoginPage.css"

const LoginPage = () => {
    const {handleSubmit, register} = useForm();

    async function onSubmit(data) {
        console.table(data);

        try {
            const res = await axios.post("http://localhost:8088/authenticate", {
                email: data.email,
                password: data.password
            });
            console.log(res);
        } catch (e) {
            console.log("Error with async function: ", e)
        }
    }

    return (
        <motion.div className="loginPage"
                    initial={{x: 0}}
                    animate={{x: 1}}
                    transition={{duration: .1, ease: "easeInOut"}}
                    exit={{x: 0}}>
            <section className="loginContainer">
                <Link to="/"><img className="loginLogo" src={logo} alt=""/></Link>
                <h1 className={"loginTitle"}>Welkom terug!</h1>
                {/*<GoogleButton />*/}
                {/*<FacebookButton />*/}
                <p className={"loginText"}>of login met je email adres:</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="email">
                        <input
                            type="email"
                            id="email"
                            placeholder="email"
                            {...register("email")} />
                    </label>
                    <label htmlFor="password">
                        <input
                            type="password"
                            id="password"
                            placeholder="password"
                            {...register("password")}
                        />
                    </label>
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