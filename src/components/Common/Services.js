import React, {Component} from 'react';
import SingleService from "./SingleService";

import red from "../assets/img/souls/Red_SOUL_sprite.png";
import lightblue from "../assets/img/souls/Light_Blue_SOUL_sprite.png";
import orange from "../assets/img/souls/Orange_SOUL_sprite.png";
import blue from "../assets/img/souls/Blue_SOUL_sprite.png";
import purple from "../assets/img/souls/Purple_SOUL_sprite.png";
import green from "../assets/img/souls/Green_SOUL_sprite.png";
import yellow from "../assets/img/souls/Yellow_SOUL_sprite.png";

const services = [
    {trait: "Unknown" , description: "Do not deal damage directly but warn of powerful incoming attacks.", icon: red},
    {trait: "Patience" , description: "Inflicts damage unless the SOUL does not move.", icon: lightblue},
    {trait: "Bravery" , description: "Inflicts damage unless the SOUL moves through them.", icon: orange},
    {trait: "Integrity" , description: "Gravity affects the SOUL, with the SOUL falling back to the bottom of the Bullet Board after a jump.", icon: blue},
    {trait: "Perseverance" , description: "The SOUL's movement is restricted to horizontal purple lines.", icon: purple},
    {trait: "Kindness" , description: "Heals the protagonist and/or progresses the battle.", icon: green},
    {trait: "Justice" , description: "SOUL is turned upside down, and shoots bullets upward. Can be used to damage foes and objects.", icon: yellow}
];

class Services extends Component{
    render(){
        return(
            <section class="page-section" id="services">
                <div class="container">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">The Eight Human Souls</h2>
                        <h3 class="section-subheading text-muted">The Eight Humans are the humans from the Surface who fell through the Barrier on Mount Ebott into the Underground. Among them are the first human, the protagonist, and the six other human SOULs that Asgore has collected.</h3>
                    </div>
                    <div class="row text-center">
                        {services.map((service, index) => {
                            return <SingleService {...service} key = {index}/>
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

export default Services;