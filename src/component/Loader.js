import react, {Component} from 'react';
import loadergif from '../images/loadergif.gif';
import '../css/loader.css';

export default class Loader extends Component{
    componentDidMount(){
        var loader = document.querySelector(".load");
        window.addEventListener("load", function vanish(){
            loader.classList.add("disappear")
        });
    }
    
    render(){
        return(
            <div className="load">
                <img src={loadergif} alt="laoding page"/>
            </div>
        );
    }
}