import React, {useState} from "react";
import { useForm } from 'react-hook-form';
import {Link} from "react-router-dom";
import logo from "./KitereparatieLogo-Kleur.png"

const LoginPage = () => {
    const [page, changePage] = useState("Login");
    const {handleSubmit, register} = useForm();

    function onSubmit(data) {
        console.log(data)
    }

    return (
        <p>
            {page === "Login" && (
                <section className="loginContainer">
                    <img src={logo} alt=""/>
                    <h1>Welkom terug!</h1>
                    <div className="socialButtons">
                        <button>F</button>
                        <button>G</button>
                        <button>A</button>
                    </div>
                    <p>of login met je email adres:</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="username">
                            <input
                                type="text"
                                id="username"
                                placeholder="Gebruikersnaam"
                                {...register("gebruikersnaam")} />
                        </label>
                        <label htmlFor="password">
                            <input
                                type="password"
                                id="password"
                                placeholder="Wachtwoord"
                                {...register("wachtwoord")}
                            />
                        </label>
                        <Link>Wachtwoord vergeten?</Link>
                        <button type="submit">Inloggen</button>
                    </form>
                </section>
            )}
            {page === "Register" && (
                <h1>Register</h1>
            )}
        </p>
    );
}

export default LoginPage;