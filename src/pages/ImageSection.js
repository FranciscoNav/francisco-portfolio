import React from 'react';
import AboutPic from '../img/AboutPic';

function ImageSection() {
    return (
        <div className='ImageSection'>
            <div className='img'>
                {/* Replace this with a better picture later */}
                <img  src={AboutPic} alt="about-img"/>
            </div>
            <div className='about-info'>
                <h4>I am <span>Francisco Naveira</span></h4>
                <p>
                    About This will be a paragraph talking about who francisco is and how he is super cool.
                    About This will be a paragraph talking about who francisco is and how he is super cool.
                    About This will be a paragraph talking about who francisco is and how he is super cool.
                </p>   
                <div className='about-details'>
                    
                </div>
            </div>
        </div>
    )
}

export default ImageSection;
