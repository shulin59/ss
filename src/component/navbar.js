import React, {Component} from 'react';
import logo from '../images/logo.png';
import '../css/navbar.css';

export default class Navbar extends Component{

    componentDidMount(){
        var header= document.getElementById("navbarTogglerDemo01")
        var btns= header.getElementsByClassName("nav-link");
        for(var i=0; i<btns.length; i++){
            btns[i].addEventListener("click", function(){
                var current=document.getElementsByClassName("selected");
                current[0].className=current[0].className.replace("selected","");
                this.className+=" selected";
            });
        }
    }

    render(){
        return(
            // Navbar BEGIN
            <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-light" data-aos="fade-down">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0" id="myNav">
                        <li className="nav-item">
                            <a className="nav-link selected" href="#home">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skill">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#experience">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#resume">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <a className="navbar-brand" href="#home">
                    <img src={logo} width="50" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
                </a>
            </nav>
            // Navbar END
        );
    }
}