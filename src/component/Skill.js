import React, {Component} from 'react';
import htmllogo from '../images/html.png'; 
import csslogo from '../images/css-3.png'; 
import javalogo from '../images/java.png';
import postgreslogo from '../images/Postgresql.png';
import awslogo from '../images/aws.png';
import jslogo from '../images/jslogo.png';
import '../css/skill.css';

export default class Skill extends Component{
    render(){
        return(
            // Skill BEGIN
            <div id="skill" style={{paddingBottom:'17px'}} data-aos="fade-up"><br/>
                <h2 style={{textAlign:'center'}}>MY SKILLS</h2>
                <hr style={{width:'8%', color:'#f05c21', backgroundColor:'#f05c21'}}></hr><br/>
                <div className="container">
                    <p style={{lineHeight:'2.0'}}>An almost indispensable skill for any successful person is the ability to pose the right question before trying to find answers to it.
                        Aside from the <i>leadership skills, time management skills, problem solveing skills, inter personal skills;</i> some of the notable skillset which I have cultivated up throughout my time in school and college are mentioned henceforth.
                    </p><br/>
                    <div data-aos="fade-up">
                    <div className="row" style={{paddingBottom:'40px'}} >
                        <div className="col-4 col-12-medium">
                            <img className="popup" src={htmllogo} alt="html logo"/>
                            <p style={{marginTop:'5px'}}><b>HTML</b></p>
                        </div>
                        <div className="col-4 col-12-medium">
                            <img className="popup" src={csslogo} alt="css logo"/>
                            <p style={{marginTop:'5px'}}><b>CSS</b></p>
                        </div>
                        <div className="col-4 col-12-medium">
                            <img className="popup" src={javalogo} alt="java logo"/>
                            <p style={{marginTop:'5px'}}><b>Java</b></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 col-12-medium">
                            <img className="popup" src={jslogo} alt="java script logo"/>
                            <p style={{marginTop:'5px'}}><b>Java Script</b></p>
                        </div>
                        <div className="col-4 col-12-medium">
                            <img className="popup" src={postgreslogo} alt="postgres logo"/>
                            <p style={{marginTop:'5px'}}><b>PostgreSQL</b></p>
                        </div>
                        <div className="col-4 col-12-medium">
                            <img className="popup" src={awslogo} alt="aws logo"/>
                            <p style={{marginTop:'5px'}}><b>AWS</b></p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            // Skill END
        );
    }
}