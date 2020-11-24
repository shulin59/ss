import React, {Component} from 'react';
import Typewriter from 'typewriter-effect';
import hero from '../images/shulin.jpeg';
import '../css/Hero.css';

export default class Hero extends Component {
    render(){
        return(
            // Landing BEGIN
            <div id="home">
            <div className="container">
                <img className="heroBanner" src={hero} alt="hero banner" style={{width:'100%'}} data-aos="fade-right" data-aos-delay="300"/>
                <div className="centered">
                    <h1 className="heading-hero" data-aos="fade-left" data-aos-delay="400"><strong>Shulin Saraswat</strong></h1>
                    <h2 className="typing"> 
                    <Typewriter 
                        options={{
                            strings:['a Developer', 'a Photographer', 'an IoT enthusiast', 'a Numismatist'],
                            autoStart: true,
                            loop: true,
                            skipAddStyles: true,
                        }}
                    />
                    </h2>
                </div>
                <a href="#about">
                <div className="lead-down">
                    <span>
                        <i className="fa fa-chevron-down" aria-hidden="true">
                        </i>
                    </span>
                </div>
                </a>
            </div>
            </div>
            // Landing END 
        );
    }
}