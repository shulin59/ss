import React, { Component} from 'react';
import about from '../images/about.jpg';
import '../css/Hero.css';
import '../css/aboutme.css';


export default class AboutMe extends Component{
    
    render(){
        return(
            // About BEGIN
            <div id="about" data-aos="fade-up" style={{backgroundColor:'#f1f1f1', paddingBottom:'17px'}}><br/>
                <h2 style={{textAlign:'center'}}>ABOUT ME</h2>
                <hr style={{width:'8%', color:'#f05c21', backgroundColor:'#f05c21'}}></hr><br/>
                <div className="container conatinerSmall">
                    <div className="card mb-3" data-aos="fade-up" >
                        <div className="row">
                            <div className="col-md-4">
                                <img src={about} className="card-img" alt="profile" style={{height:'100%'}}/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <p className="card-text" style={{lineHeight:'2.0', textAlign:'left'}}>
                                        Hi! I'm Shulin Saraswat, a developer and analyst from Bangalore, India. 
                                        Since stepping into the world of technology, I have been experimenting with various programming tools. 
                                        I pursued my <i>Bachelor's of Technology in Electronics and Communication with specialisation in Internet of Things and Sensors</i> at Vellore Institute of Technology, Vellore
                                        and at the same time dabbling in the world of programming. Have had the pleasure to work with some awesome peers at <b style={{color:'#44a4ee'}}>IoThinC-VIT</b><i> as a Co-founder and Management Head</i>.
                                        <br/>I am currently working with <b style={{color:'#21AA47'}}>Standard Chartered Global Business Service</b> and <i>titled as Developer - Technology &amp; Innovation.</i> 
                                        I am placed under Foundation Services and Tech Strategy (FSTS) department and primarly working toward migration of applications to cloud. Moreover I am a <i>photography enthusiast</i>, who capture the good times, develop from the negative and if things don't make out <b>TAKE ANOTHER SHOT !</b>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 cardTable" data-aos="fade-up">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="card-body table-responsive">
                                <table className="table table-hover table-bordered">
                                    <tbody>
                                        <tr>
                                            <td>B.Tech</td>
                                            <td>ECE (IoT and Sensors)</td>
                                            <td>VIT, Vellore</td>
                                            <td>CGPA: 8.56</td>
                                        </tr>
                                        <tr>
                                            <td>CBSE</td>
                                            <td>12<sup>th</sup></td>
                                            <td>St. Kabir School, Ahmedabad</td>
                                            <td>Science: 89.8%</td>
                                        </tr>
                                        <tr>
                                            <td>CBSE</td>
                                            <td>10<sup>th</sup></td>
                                            <td>St. Kabir School, Ahmedabad</td>
                                            <td>CGPA: 9.2</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-md-3">
                        <i className="card-img fa fa-university fa-5x"></i>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            // About END 
        );
    }
}