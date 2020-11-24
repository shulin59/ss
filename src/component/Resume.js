import React, {Component} from 'react';
import '../css/resume.css';
import resume from '../images/resume.svg';
import myResume from '../files/resume.pdf';

export default class Resume extends Component{
    render(){
        return(
            <div id="resume" style={{backgroundColor:'#f1f1f1', paddingBottom:'17px'}} data-aos="fade-up"><br/>
            <h2 style={{textAlign:'center'}}>RESUME</h2>
            <hr style={{width:'8%', color:'#f05c21', backgroundColor:'#f05c21'}}></hr><br/>
            <div className="container">
                <div className="card mb-3" >
                    <div className="row">
                        <div className="col-md-4">
                            <img src={resume} className="card-img resumeImage" alt="resume"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <p className="card-text resumeText">
                                    Here you can download my resume. A word of caution though: I have pretty steep learning curve -
                                    as I'm always learning and experimenting with cool stuff, so the resume may not cover all my latest skill sets.
                                    If you are interested, you can check out my <a className="glLink" href="https://github.com/shulin59" target="_blank">github</a> and <a className="glLink" href="https://www.linkedin.com/in/shulin-saraswat-7aba05121/" target="_blank">linkedIn</a> profile apart from this to get better understanding of the work that I do.
                                </p>
                                <a className="btn downloadbtn rounded-pill shadow" href={myResume} target="_blank" style={{textDecoration:'none', width:'50%', height:'75px'}}>
                                    <i className="fa fa-download downloadButton">&ensp;DOWNLOAD</i>
                                </a>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>
        );
    }
}