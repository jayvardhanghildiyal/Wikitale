import React, {Component} from 'react';
import PortfolioItem from './PortfolioItem.js';
import Clients from './Clients.js';

import Header from '../Common/Header';
import image from '../assets/img/chara.jpg'

import img1 from "../assets/img/portfolio/1.jpg";
import img2 from "../assets/img/portfolio/2.jpg";
import img3 from "../assets/img/portfolio/3.jpg";
import img4 from "../assets/img/portfolio/4.jpg";
import img5 from "../assets/img/portfolio/5.jpg";
import img6 from "../assets/img/portfolio/6.jpg";

const portfolio = [
    {title: "Threads", subtitle: "Illustration", image: img1},
    {title: "Explore", subtitle: "Graphic Design", image: img2},
    {title: "Finish", subtitle: "Identity", image: img3},
    {title: "Lines", subtitle: "Branding", image: img4},
    {title: "SouthWest", subtitle: "Website Design", image: img5},
    {title: "Window", subtitle: "Photography", image: img6}
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