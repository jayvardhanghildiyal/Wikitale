import React, {Component} from 'react';
import {Link} from "react-router-dom";


class Header extends Component{

        render(){
            return(
                <div>
                <header className="masthead" style = {{backgroundImage: `url(${this.props.image})`}}>
                   <div className="container">
                       <div className="masthead-subheading">{this.props.title}</div>
                       <div className="masthead-heading text-uppercase">{this.props.subtitle}</div>
                       {this.props.showButton &&
                        <a className="btn btn-primary btn-xl text-uppercase" href={this.props.link} target = "_blank">{this.props.buttonText}</a>
                       }
                       </div>
                </header>
            </div>
            )
        }

}

export default Header;