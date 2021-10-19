import React from 'react';
import Title from '../components/About_Components/Title';
import ImageSection from '../components/About_Components/ImageSection';
import SkillsSection from '../components/About_Components/SkillsSection';


function About() {

    return (
        <div className="about-page">
            <Title title={'About'} span={'About'}/>
            <ImageSection/>
            <Title title={'My Skills'} span={'My Skills'}/>
            <SkillsSection skill={'Javascript'} progress={'70%'}/>
        </div>
    )
}

export default About;
