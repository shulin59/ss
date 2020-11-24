import React, {Component} from 'react';
import '../css/contact.css';

export default class Contact extends Component{
    render(){
        return(
            <div id="contact" style={{paddingBottom:'17px'}} data-aos="fade-up"><br/>
                <h2 style={{textAlign:'center'}}>CONTACT ME</h2>
                <hr style={{width:'8%', color:'#f05c21', backgroundColor:'#f05c21'}}></hr><br/>
                <div className="container icons">
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a href="https://www.linkedin.com/in/shulin-saraswat-7aba05121/" target="_blank"><i className="fa fa-2x fa-linkedin-square"></i></a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://github.com/shulin59" target="_blank"><i className="fa fa-2x fa-github"></i></a>
                        </li>            
                        <li className="list-inline-item">
                            <a href="mailto: shulin59@outlook.com" target="_blank"><i className="fa fa-2x fa-envelope"></i></a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://www.quora.com/profile/Shulin-Saraswat-2" target="_blank"><i className="fa fa-2x fa-quora"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}