import React, {Component} from 'react';
import './App.css';
import Main from '../src/component/Main';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Scroll from '../src/component/BackTopButton';

class App extends Component{
  componentDidMount(){
    AOS.init({
      offset:200,
      duration:800
    });
  }
  render(){
    return(
      <div>
        <Main/>   
        <Scroll showBelow={250} />
      </div>
    );
  }
}
export default App;
