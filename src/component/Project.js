import react, {Component} from 'react';
import despoc from '../images/despoc.jpg';
import vems from '../files/vems.pdf';
import face from '../files/facialRecognitionSmartLock.pdf';
import artmos from '../files/artmos.pdf';
import '../css/project.css';

export default class Project extends Component{
    render(){
        return(
            <div id="projects" style={{paddingBottom:'17px'}}  data-aos="fade-up"><br/>
                <h2 style={{textAlign:'center'}}>PROJECTS</h2>
                <hr style={{width:'8%', color:'#f05c21', backgroundColor:'#f05c21'}}></hr><br/>
                <div className="container">
                    {/* Published Project BEGIN */}
                    <div className="card mb-3" style={{borderColor:'#f3e909'}} >
                        <div className="row">
                            <div className="col-md-4">
                                <img src={despoc} className="card-img despocImage" alt="DeSPOC"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 class="card-title" style={{lineHeight:'2.0', textAlign:'left'}}>Publication</h5>
                                    <p className="card-text" style={{lineHeight:'2.0', textAlign:'left', fontSize:"17px"}}>
                                    <i><b>Experimental Validation of an IoT based Device Selective Power Cut Mechanism Using Power Line Carrier Communication for Smart Management of Electricity</b></i><br/>
                                    This work was dealt with Implementing a device selective protocol which can selectively cut power of particular devices depending upon their power rating, 
                                    manufacturer company etc. by use of power line carrier communication. Hence revolutionizing the concept of area selective power cut to device selective power cut.</p><br/>
                                    <a className="btn downloadbtn rounded-pill shadow" href="https://link.springer.com/article/10.1007/s42835-020-00568-6#:~:text=With%20device%20selective%20power%2Dcut,with%20limited%20use%20of%20electricity" 
                                        target="_blank" style={{textDecoration:'none', width:'50%'}}>
                                        <i className="fa fa-eye">&ensp;View Research Paper</i>
                                    </a>                                
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Published Project END */}

                    {/* Other Project BEGIN */}
                    <div class="card-deck">
                        <div class="card" style={{borderColor:'#f3e909'}} data-aos="fade-up">
                            {/* <img src="..." class="card-img-top" alt="..."/> */}
                            <div class="card-body">
                                <h5 class="card-title">Vehicle Monitoring System (VEMS)</h5>
                                <p class="card-text" style={{lineHeight:'2.0', textAlign:'justify', fontSize:"17px"}}>VeMS is to track and monitor the vehicle parameters using IoT. 
                                The parameter being object detection, weather forecast, engine performance and car location.</p>
                                <a className="btn downloadbtn rounded-pill shadow" href={vems} target="_blank" style={{textDecoration:'none', width:'50%', marginTop:'68px'}}>
                                    <i className="fa fa-eye">&ensp;View</i>
                                </a>
                            </div>
                        </div>
                        <div class="card" style={{borderColor:'#f3e909'}} data-aos="fade-up">
                            {/* <img src={facelock} className="card-img" alt="profile picture" style={{height:'100px', weight:'9px', paddingTop:'20px', marginTop:'30px',marginLeft:'25px'}}/> */}
                            <div class="card-body">
                                <h5 class="card-title">Facial Recognition Smart Lock</h5><br/>
                                <p class="card-text" style={{lineHeight:'2.0', textAlign:'justify', fontSize:"17px"}}>The main purpose of the project is to improve security systems in homes, offices etc. 
                                The idea is to unlock a door by recognizing the face of an authorized person And then send the image to the cloud for analysis and to notify the user.</p>
                                <a className="btn downloadbtn rounded-pill shadow" href={face} target="_blank" style={{textDecoration:'none', width:'50%'}}>
                                    <i className="fa fa-eye">&ensp;View</i>
                                </a>
                            </div>
                        </div>
                        <div class="card" style={{borderColor:'#f3e909'}} data-aos="fade-up">
                            {/* <img src="..." class="card-img-top" alt="..."/> */}
                            <div class="card-body">
                                <h5 class="card-title">Artificial Atmosphere<br/>(ARTMOS)</h5>
                                <p class="card-text" style={{lineHeight:'2.0', textAlign:'justify', fontSize:"17px"}}>To grow crops with suitable surrounding in any environment by creating artificial conditions using micro-controller.</p>
                                <a className="btn downloadbtn rounded-pill shadow" href={artmos} target="_blank" style={{textDecoration:'none', width:'50%', marginTop:'102px'}}>
                                    <i className="fa fa-eye">&ensp;View</i>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Other Project END */}

                </div>

            </div>
        );
    }
}