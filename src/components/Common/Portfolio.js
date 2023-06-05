import React, {Component} from 'react';
import PortfolioItem from './PortfolioItem.js';
import Clients from './Clients.js';

import Header from './Header.js';
import image from '../assets/img/chara.jpg'

import img1 from "../assets/img/portfolio/toriel.png";
import img2 from "../assets/img/portfolio/papyrus.png";
import img3 from "../assets/img/portfolio/sans.jpg";
import img4 from "../assets/img/portfolio/undyne.png";
import img5 from "../assets/img/portfolio/alphys.png";
import img6 from "../assets/img/portfolio/temmie.png";
import img7 from "../assets/img/portfolio/mettaton.png";
import img8 from "../assets/img/portfolio/asgore.png";
import img9 from "../assets/img/portfolio/asriel.png";
import img10 from "../assets/img/portfolio/muffet.png";

const portfolio = [
    {title: "Toriel", subtitle: "Knows the best for you.", image: img1},
    {title: "Papyrus", subtitle: "Nyeh heh heh!", image: img2},
    {title: "Sans", subtitle: "The easiest enemy. Can only deal 1 damage.", image: img3},
    {title: "Undyne", subtitle: "The heroine that NEVER gives up.", image: img4},
    {title: "Alphys", subtitle: "Basement Dweller.", image: img5},
    {title: "Temmie", subtitle: "RATED TEM OUTTA TEM. Loves to pet cute humans. But you're allergic!", image: img6},
    {title: "Mettaton", subtitle: "Fabulous!", image: img7},
    {title: "Asgore", subtitle: "King Fluffybuns.", image: img8},
    {title: "Asriel", subtitle: "The Poor Prince.", image: img9},
    {title: "Muffet", subtitle: "If she invites you to her parlor, excuse yourself.", image: img10}
];

class Portfolio extends Component{
    render(){
        return(
            <div>
                <Header 
                    title = "Undertale"
                    subtitle = "A Game I Love!"
                    showButton = {false}
                    image = {image}
                    st
                />

            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Characters</h2>
                        <h3 className="section-subheading text-muted">Notable and iconic characters in the Undertale cast !</h3>
                    </div>
                    <div className="row">                  
                    {portfolio.map((item, index) => {
                        return <PortfolioItem {...item} key = {index} />
                    })}
                    </div>
                </div>
            </section>

            <Clients
                

                />
            </div>
            
        )
    }
}

export default Portfolio;