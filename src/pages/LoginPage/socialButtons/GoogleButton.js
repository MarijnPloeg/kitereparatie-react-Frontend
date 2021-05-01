import React from "react";
import GoogleLogin from "react-google-login";

export const GoogleButton = () => {
    const googleResponse = (response) => {
        console.log(response);
        console.log(response.profileObj)
    }

    return (
        <GoogleLogin
            clientId="853859914914-gjij5cmif3io5kvmdlqmf0ui92etmgf2.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={googleResponse}
            onFailure={googleResponse}
            cookiePolicy="single_host_origin"
            className="googleBtn"/>
    )
}