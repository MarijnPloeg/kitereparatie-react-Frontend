import React from "react";
import FacebookLogin from "react-facebook-login";
import {faFacebookF} from "@fortawesome/free-brands-svg-icons";

export const FacebookButton = () => {
    const facebookResponse = (response) => {
        console.log(response);
    }

    return (
        <FacebookLogin
            appId="214910170071132"
            autoLoad={true}
            fields="name,email,picture"
            callback={facebookResponse} />
    )
}