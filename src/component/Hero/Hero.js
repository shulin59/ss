import react, {Component} from 'react';
import Typewriter from 'typewriter-effect';
import hero from '../../images/shulin.jpeg';
import '../../css/Hero.css';

export default class Hero extends Component {
    render(){
        return(
            // Landing BEGIN
            <div className="container">
                <img src={hero} alt="hero banner" style={{width:'100%'}}/>
                <div className="centered">
                    <h1 className="heading-hero"><strong>Shulin Saraswat</strong></h1>
                    <h2 style={{color: 'white'}}> 
                    <Typewriter 
                        options={{
                            strings:['a developer', 'a Photographer'],
                            autoStart: true,
                            loop: true,
                            skipAddStyles: true,
                        }}
                    />
                    </h2>
                </div>
                <div className="lead-down">
                    <span>
                        <i className="fa fa-chevron-down" aria-hidden="true">
                        </i>
                    </span>
                </div>
            </div>
            // Landing END 
        );
    }
}