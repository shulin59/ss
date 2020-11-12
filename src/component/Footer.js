import react, {Component} from 'react';

export default class Footer extends Component{
    render(){
        return(
            <div id="footer" style={{backgroundColor:'#f1f1f1', paddingBottom:'17px'}}><br/>
                <i className="fa fa-copyright" aria-hidden="true" style={{marginLeft:'25px', position:'absolute'}}> 2020<strong> Shulin Saraswat</strong>. All Rights Reserved</i>
                <p style={{position:'relative', textAlign:'right', marginRight:'25px'}}>Made with lots of <span><i className="fa fa-heart" style={{color:'#f05c21'}}></i></span></p>
            </div>
        );
    }
}