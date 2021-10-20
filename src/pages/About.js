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
            <div className='skillsSection-container'>
                <SkillsSection skill={'Javascript'} progress={'75%'}/>
                <SkillsSection skill={'React'} progress={'80%'}/>
                <SkillsSection skill={'Ruby on rails'} progress={'60%'}/>
                <SkillsSection skill={'Ruby'} progress={'60%'}/>
                <SkillsSection skill={'SQL'} progress={'40%'}/>
                <SkillsSection skill={'HTML'} progress={'55%'}/>
            </div>
        </div>
    )
}

export default About;
