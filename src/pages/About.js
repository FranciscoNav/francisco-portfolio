import React from 'react';
import Title from '../components/Title';
import ImageSection from '../components/About_Components/ImageSection';
import RubyRails from '../img/RubyRailsIcon.png'
import RubyGem from '../img/RubyGem.png'
import {faHtml5, faReact, faSass, faCss3Alt, faJs, faNpm} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About() {

    return (
        <div className="about-page">
            <Title title={'About'} span={'About'}/>
            <ImageSection/>
            <Title title={'My Skills'} span={'My Skills'}/>

            <div className='skillsSection-container'>
                <h5>Javascript</h5>
                <FontAwesomeIcon className="logo js" icon={faJs}/>
                <h5>React</h5>
                <FontAwesomeIcon className="logo react" icon={faReact}/>
                <h5>HTML</h5>
                <FontAwesomeIcon className="logo html" icon={faHtml5}/>
                <h5>NPM</h5>
                <FontAwesomeIcon className="logo npm" icon={faNpm}/>
                <h5>Sass</h5>
                <FontAwesomeIcon className="logo sass" icon={faSass}/>
                <h5>CSS</h5>
                <FontAwesomeIcon className="logo css" icon={faCss3Alt}/>
                <h5>Ruby on Rails</h5>
                <img className="RailsLogo" src={RubyRails} alt="RailsLogo"/>
                <h5>Ruby</h5>
                <img className="RubyLogo" src={RubyGem} alt="RubyLogo"/>
            </div>

        </div>
    )
}

export default About;
