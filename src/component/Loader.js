import React, {Component} from 'react';
import loadergif from '../images/loadergif.gif';
import '../css/loader.css';

export default class Loader extends Component{
    componentDidMount(){
        var loader = document.querySelector(".loader");
        window.addEventListener("load", function vanish(){
            loader.classList.add("disappear")
        });
    }
    
    render(){
        return(
            <div className="loader">
                <img src={loadergif} alt="laoding page"/>
            </div>
        );
    }
}