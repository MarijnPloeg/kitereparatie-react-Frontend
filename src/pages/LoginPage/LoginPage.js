import React, {useState} from "react";
import { useForm } from 'react-hook-form';
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import logo from "./KitereparatieLogo-Kleur.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookF, faApple, faGoogle} from "@fortawesome/free-brands-svg-icons";
import AppleLogin from "react-apple-login";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from "react-google-login";
import "./LoginPage.css"
import {GoogleButton} from "./socialButtons/GoogleButton";
import {FacebookButton} from "./socialButtons/FacebookButton";

const LoginPage = () => {
    const {handleSubmit, register} = useForm();


    function onSubmit(data) {
        console.log(data);
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
                <GoogleButton />
                <FacebookButton />
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
                            placeholder="Wachtwoord"
                            {...register("wachtwoord")}
                        />
                    </label>
                    <Link to="" className={"forgotPassword"}>Wachtwoord vergeten?</Link>
                    <Link to="myRepairs"><button type="submit" className="loginButton">Login</button></Link>
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