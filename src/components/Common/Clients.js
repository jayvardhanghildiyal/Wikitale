import transitions from '@material-ui/core/styles/transitions';
import React, {Component} from 'react';

class Clients extends Component{
    render(){
        
        return(
            <div className="py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="client col-sm-4 col-md-4 col-lg-4">
                        <a href="https://store.steampowered.com/app/391540/Undertale/" target = "_blank"><img className="img-fluid img-brand d-block mx-auto" src="img/logos/steam.svg" alt="Get Undertale on Steam !" /></a>
                    </div>
                    <div className="client col-sm-4 col-md-4 col-lg-4">
                        <a href="https://twitter.com/undertale" target = "_blank"><img className="img-fluid img-brand d-block mx-auto" src="img/logos/twitter.svg" alt="..." /></a>
                    </div>
                    <div className="client col-sm-4 col-md-4 col-lg-4">
                        <a href="https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z?si=6ee08687619a4289" target = "_blank"><img className="img-fluid img-brand d-block mx-auto" src="img/logos/spotify.png" alt="..." /></a>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Clients;