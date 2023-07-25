import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/waa.png'
import Clients from '../Common/Clients';

class About extends Component{
    render(){
        return(
            <div>
                <Header 
                    title = "Undertale"
                    subtitle = "A Game I Love!"
                    showButton = {false}
                    image = {image}
                />
                <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Undertale's History.</h2>
                    <h3 className="section-subheading text-muted">A timeline that talks about different components that makes Undertale, Undertale.</h3>
                </div>
                <ul className="timeline">
                    <li>
                        <div className="timeline-image"><img className="img-fluid mx-auto d-block" src="" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4></h4>
                                <h4 className="subheading">A Promising Start</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Undertale was developed by Toby Fox across 32 months. Development was financed through a crowdfunding campaign on the website <a href="https://www.kickstarter.com/about" target="_blank">Kickstarter</a>. The campaign was launched on June 25, 2013, with a goal of $5,000; it ended on July 25, 2013, with $51,124 raised by 2,398 people. Temmie Chang later started working as the main artist for the game, providing most of the sprites and concept art.</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4></h4>
                                <h4 className="subheading">Iconic Game Design</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">
                                First off, Fox made sure that the game was not filled with boring fetch quests and didn't require grinding stats or other items, as they were classic tropes that still infest the gaming industry. 
                                The iconic Bullet hell shooters such as the Touhou Project series.
                                The game's dialogue system was inspired by Shin Megami Tensei (1992), particularly the gameplay mechanic whereby players can talk to monsters to avoid conflict.
                                Fox intended to expand upon this mechanic, as failing to negotiate resulted in a requirement to fight. 
                                When he began developing this mechanic, the concept of completing the game without killing any enemies "just evolved naturally".
                                When questioned on the difficulty of playing the game without killing, Fox responded that it is "the crux of one of the major themes of this game", asking players to think about it themselves.</p></div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4></h4>
                                <h4 className="subheading">Writing</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">
                            Toby Fox wanted to expand on the idea of being trapped in an underground world.
                            Fox's desire to "subvert concepts that go unquestioned in many games" further influenced Undertale's development.
                            Fox found that the writing became easier after establishing a character's voice and mood. He also felt that creating the world was a natural process, as it expressed the stories of those within it.Fox felt the importance to make the game's monsters "feel like an individual".
                            </p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4></h4>
                                <h4 className="subheading">Music</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">
                            The game's soundtrack was entirely composed by Fox with FL Studio. A self-taught musician, he composed most of the tracks with little iteration; the game's main theme, "Undertale", was the only song to undergo multiple iterations in development.
                            According to Fox, over 90% of the songs were composed specifically for the game. "Megalovania", the song used during the boss battle with Sans, had previously been used within Homestuck and in one of Fox's EarthBound ROM hacks. For each section of the game, Fox composed the music prior to programming, as it helped "decide how the scene should go".
                            Undertale's soundtrack has been well received by critics as part of the success of the game, in particular for its use of various <a href="https://www.youtube.com/watch?v=YQuDid8oPTI" target="_blank">leitmotifs</a> for the various characters used throughout various tracks. In particular, "Hopes and Dreams", the boss theme when fighting Asriel in the Pacifist run, brings back most of the main character themes, and is "a perfect way to cap off your journey", according to USgamer's Nadia Oxford. Oxford notes this track in particular demonstrates Fox's ability at "turning old songs into completely new experiences", used throughout the game's soundtrack.</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <h4>
                                A Game
                                <br />
                                Loved By
                                <br />
                                Everyone!
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
                <Clients
                

                />
            </div>
            
        );
    }
}

export default About;