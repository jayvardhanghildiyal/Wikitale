import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/head.png'
import Clients from './Clients';

class Team extends Component{
    render(){
        return(
            <div>
                <Header 
                    title = "Undertale"
                    subtitle = "A Game I Love!"
                    showButton = {false}
                    image = {image}
                />
                <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">The Dev Team !</h2>
                    <h3 className="section-subheading text-muted">The amazing dev team that provided us with this wonderful game :D</h3>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="img/team/tff.png" alt="Toby Fox" />
                            <h4>Toby Fox</h4>
                            <p className="text-muted">Lead Developer, Music Composer, Producer, Character Design, Director</p>
                            <a className="btn btn-dark btn-social mx-2" href="https://twitter.com/tobyfox"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="https://fwugradiation.tumblr.com/"><i className="fab fa-tumblr"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="img/team/tcc.png" alt="Temmie Chang" />
                            <h4>Temmie Chang</h4>
                            <p className="text-muted">Lead Illustrator, Overworld Character Design, Lead Artist</p>
                            <a className="btn btn-dark btn-social mx-2" href="https://twitter.com/tuyoki" target = "_blank"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="https://www.facebook.com/TemmieC" target = "_blank"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="https://www.instagram.com/tuyoki/" target = "_blank"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">This page is dedicated to the main leads who helped in the development of the game.</p></div>
                </div>
             </div>
            </section>

            <Clients
                

                />
            </div>
            

        );
    }
}

export default Team;