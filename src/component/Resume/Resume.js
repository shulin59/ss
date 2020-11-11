import react, {Component} from 'react';
import '../../css/resume.css';
import resume from '../../images/resume.svg';

export default class Resume extends Component{
    render(){
        return(
            <div id="resume" style={{backgroundColor:'#f1f1f1', paddingBottom:'17px'}}><br/>
            <h2 style={{textAlign:'center'}}>RESUME</h2>
            <hr style={{width:'8%', color:'#f05c21', backgroundColor:'#f05c21'}}></hr><br/>
            <div className="container">
                <div className="card mb-3" >
                    <div className="row">
                        <div className="col-md-4">
                            <img src={resume} className="card-img" alt="profile picture" style={{height:'75%', paddingTop:'20px', marginTop:'30px',marginLeft:'25px'}}/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <p className="card-text" style={{lineHeight:'2.0', textAlign:'left', fontSize:"17px"}}>
                                    Here you can download my resume. A word of caution though: I have pretty steep learning curve -
                                    as I'm always learning and experimenting with coll stuff, so th resume may not cover all my latest skill sets.
                                    If you are interested, you can check out my <a href="" style={{textDecoration:'none'}}>github profile</a> and linkedIn profile apart from this to get better understanding of the work that I do.
                                </p><br/><br/>
                                <a className="btn downloadbtn rounded-pill shadow" href="" style={{textDecoration:'none', width:'50%', height:'75px'}}>
                                    <i className="fa fa-download" style={{marginTop:'20px', fontSize:'20px'}}>&ensp;DOWNLOAD</i>
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