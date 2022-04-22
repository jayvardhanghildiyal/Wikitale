import React, {Component} from 'react';
import Header from '../Common/Header.js';
import image from '../assets/img/about.jpg';

//re-usable components
import Services from '../Common/Services.js';
import Portfolio from '../Common/Portfolio.js';
import Timeline from '../Common/Timeline.js';
import Team from '../Common/Team.js';
import Clients from '../Common/Clients.js';

class Home extends Component{

    render(){

        return(
            <div>
                <Header 
                    title = "Undertale"
                    subtitle = "A Game I Love!"
                    buttonText = "Try Now!"
                    link = "https://undertale.com/"
                    showButton = {true}
                    image = {image}
                />

                <Services
                    
                />

                <Portfolio
                

                />

                <Timeline


                />

                <Team

                />

                <Clients
                

                />
            </div>
           
        );
    }

}

export default Home;