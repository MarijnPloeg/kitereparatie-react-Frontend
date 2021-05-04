import React, { useState} from "react";
import axios from "axios";
import {motion} from "framer-motion";
import {Link, useHistory} from "react-router-dom";
import {useForm} from 'react-hook-form';
import "./RegisterPage.css"
import logo from "../LoginPage/KitereparatieLogo-Kleur.png";

const RegisterPage = () => {
    const {handleSubmit, register} = useForm();
    const history = useHistory();
    const [registerSuccess, toggleRegisterSucces] = useState(false);

    async function onSubmit(data) {
        console.table(data);
        try {
            const result = await axios.post("http://localhost:8088/api/v1/registration", {
                firstname: data.username.split(' ').slice(0, -1).join(' '),
                lastname: data.username.split(' ').slice(-1).join(' '),
                email: data.email,
                password: data.password
            });
            console.log(result);
            toggleRegisterSucces(true);
            setTimeout(() => {history.push("/login")}, 4000)
        } catch (e) {
            //TODO: Toon error message aan gebruiker
            console.log(e)
        }
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
                {/*TODO: Registratie verwerken via Social buttons*/}
                {/*<div className="socialButtons">*/}
                {/*    <svg><FontAwesomeIcon icon={faFacebookF} className={"facebookBtn"}/></svg>*/}
                {/*    <svg><FontAwesomeIcon icon={faApple} className={"appleBtn"}/></svg>*/}
                {/*    <svg><FontAwesomeIcon icon={faGoogle} className={"googleBtn"}/></svg>*/}
                {/*</div>*/}
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
                    {registerSuccess === true &&
                    <p className="registerSuccess">Registratie is gelukt, je word nu doorgestuurd naar de inlog
                        pagina</p>}
                </form>
            </section>
        </motion.div>
    );

};

export default RegisterPage;