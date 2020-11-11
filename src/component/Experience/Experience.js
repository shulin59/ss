import react, {Component} from 'react';
import '../../css/experience.css';

export default class Experience extends Component{
    render(){
        return(
            <div id="experience" style={{backgroundColor:'#f1f1f1', paddingBottom:'17px'}}><br/>
                <h2 style={{textAlign:'center'}}>EXPERIENCE</h2>
                <hr style={{width:'8%', color:'#f05c21', backgroundColor:'#f05c21'}}></hr><br/>
                <div class="timeline">
                    <div class="container-exp left">
                        <div class="content">
                            <h2 style={{color:'#0072AA'}}>Standard Chartered <span style={{color:'#21AA47'}}>Global Business Services</span></h2>
                            <h6>Developer- Technology &amp; Innovation (September 2020 - present)</h6>
                            <p style={{lineHeight:'2.0'}}>Working on the migration of current on prime application to cloud. Also working on the breaking on the current application to microservices.</p>
                        </div>
                    </div>
                    <div class="container-exp right">
                        <div class="content">
                            <h2 style={{color:'#6d6e70'}}>Tech <span style={{color:'#e31837'}}>Mahindra</span></h2>
                            <h6>Intern (May 2018 - June 2018)</h6>
                            <p style={{lineHeight:'2.0'}}>Designed an effective UI using ThingWorx that ensures the safety of workers inside a manufacturing zone using cognitive inspection.</p>
                        </div>
                    </div>
                    <div class="container-exp left">
                        <div class="content">
                        <h2 style={{color:'#44a4ee'}}>IoThinC - VIT</h2>
                        <h6>Co-Founder &amp; Management Head (Jan 2019 - September 2019)</h6>
                        <p style={{lineHeight:'2.0'}}>A dedicated club for Internet of Things enthusiasts. Build IoT enabled project and held workshops to better understand the application in the field of Internet of Things</p>
                    </div>
                </div>
                </div>
            </div>    
        );
    }
}