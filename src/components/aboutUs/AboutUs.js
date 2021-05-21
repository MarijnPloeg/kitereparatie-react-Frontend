import React from "react";
import "./AboutUs.css"
import naaimachine from "./images/Naaimachine.jpeg"

const AboutUs = () => {
    return (
        <div id="overOns" className="aboutUs">
            <h1>Over ons</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium blanditiis consectetur culpa
                deserunt dolorem eveniet fugit iste iure, iusto libero maiores necessitatibus nemo non pariatur quae
                repellendus reprehenderit rerum similique totam veniam. Alias aliquid corporis culpa cum delectus dicta
                error est harum illum labore minus, officiis quae quaerat, quas quibusdam quis vero! Adipisci alias
                atque consequuntur delectus dolore ea, error eveniet iusto minima molestiae optio praesentium quae,
                quisquam sapiente veniam!</p>
            <img src={naaimachine} alt="Naaimachine"/>

        </div>
    );
}

export default AboutUs;