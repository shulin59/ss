import react, {Component} from 'react';
import Navbar from '../NavBar/navbar';
import Hero from '../Hero/Hero';
import AboutMe from '../AboutMe/AboutMe';
import Skill from '../Skill/Skill';
import Experience from '../Experience/Experience';
import Project from '../Project/Project';
import Resume from '../Resume/Resume';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
// import BackTopButton from '../BackTopButton/BackTopButton';

export default class Main extends Component{
    render(){
        return(
            <div>
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