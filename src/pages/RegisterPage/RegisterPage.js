import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {useForm} from 'react-hook-form';
import "./RegisterPage.css"
import {motion} from "framer-motion";
import logo from "../LoginPage/KitereparatieLogo-Kleur.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faApple, faFacebookF, faGoogle} from "@fortawesome/free-brands-svg-icons";

const RegisterPage = () => {
    const {handleSubmit, register} = useForm();
    let {newUser, setNewUser} = useState({firstname: '', lastname: '', email: '', password: ''});

    function onSubmit(data) {
        console.log(data);
        newUser ={
            firstname: data.username.split(' ').slice(0, -1).join(' '),
            lastname: data.username.split(' ').slice(-1).join(' '),
            email: data.email,
            password: data.password
        };

        axios.post("http://localhost:8088/api/v1/registration", {
            firstname: data.username.split(' ').slice(0, -1).join(' '),
            lastname: data.username.split(' ').slice(-1).join(' '),
            email: data.email,
            password: data.password
        }).then(response => {
            console.log("Succes!, response: ", response);
        }).catch(error => {
            console.log("Error!: ", error);
        });

        console.log("newUser", newUser);
    }

    return (
        <motion.div className="registerPage"
                    initial={{x: 0}}
                    animate={{x: 1}}
                    transition={{duration: .1, ease: "easeInOut"}}
                    exit={{x: 0}}>
            <section className="sideLogin">
                <h1 className="loginTitle">Welkom terug!</h1>
                <p className="loginText">Login om toegang te krijgen tot je account</p>
                <Link className="loginButton" to="/login">Login</Link>
            </section>
            <section className="loginContainer">
                <Link to="/"><img className="loginLogo" src={logo} alt=""/></Link>
                <h1 className={"loginTitle"}>Welkom bij kitereparatie!</h1>
                <div className="socialButtons">
                    <svg><FontAwesomeIcon icon={faFacebookF} className={"facebookBtn"}/></svg>
                    <svg><FontAwesomeIcon icon={faApple} className={"appleBtn"}/></svg>
                    <svg><FontAwesomeIcon icon={faGoogle} className={"googleBtn"}/></svg>
                </div>
                <p className={"loginText"}>of maak een account met je email adres:</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="username">
                        <input
                            type="text"
                            id="username"
                            placeholder="Naam"
                            {...register("username")} />
                    </label>
                    <label htmlFor="email">
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            {...register("email")} />
                    </label>
                    <label htmlFor="password">
                        <input
                            type="password"
                            id="password"
                            placeholder="Wachtwoord"
                            {...register("password")}
                        />
                    </label>
                    <button type="submit" className="loginButton">Registreer</button>
                </form>
            </section>
        </motion.div>
    );

};

export default RegisterPage;