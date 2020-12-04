import React, {Component} from 'react';
import Navbar from './navbar';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Skill from './Skill';
import Experience from './Experience';
import Project from './Project';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer';
import Scroll from './BackTopButton';

export default class Main extends Component{
    render(){
        return(
            <div>
                <Scroll showBelow={250} />
                {/* Navbar BEGIN */}
                <Navbar/>
                {/* Navbar END */}
                {/* Hero BEGIN */}
                <Hero/><hr style={{width:'75%'}}></hr>
                {/* Hero END */}
                {/* About BEGIN */}
                <AboutMe/><hr style={{width:'75%'}}></hr>
                {/* About END */}
                {/* Skill BEGIN */}
                <Skill/><hr style={{width:'75%'}}></hr>
                {/* Skill END */}
                {/* Experience BEGIN */}
                <Experience/><hr style={{width:'75%'}}></hr>
                {/* Experience END */}
                {/* Project BEGIN */}
                <Project/><hr style={{width:'75%'}}></hr>
                {/* Project END */}
                {/* Resume BEGIN */}
                <Resume/><hr style={{width:'75%'}}></hr>
                {/* Resume END */}
                {/* Contact BEGIN */}
                <Contact/><hr style={{width:'75%'}}></hr>
                {/* Contact END */}
                <Footer/>

            </div>
        );
    }
}