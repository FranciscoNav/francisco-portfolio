import React from 'react';
import AboutPic from '../../img/AboutPic.jpg'
import FranciscoNaveiraResume from '../../PDF/FranciscoNaveiraResume.pdf'

function ImageSection() {

    return (
        <div className='image-section'>
            <div className='img-dev'>
                {/* Replace this with a better picture later */}
                <img src={AboutPic} alt=''/>
            </div>
            <div className='about-info'>
                <h4>I am <span>Francisco Naveira</span></h4>
                <p className='about-text'>
                    About This will be a paragraph talking about who francisco is and how he is super cool.
                    About This will be a paragraph talking about who francisco is and how he is super cool.
                    About This will be a paragraph talking about who francisco is and how he is super cool.
                </p>   
                <div className='about-details'>
                    <div className="about-details-left">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Languages</p>
                        <p>Location</p>
                    </div>
                    <div className="about-details-right">
                        <p>: Francisco Naveira</p>
                        <p>: 28</p>
                        <p>: English and Spanish</p>
                        <p>: Elon, North Carolina</p>
                    </div>
                </div>
                <a className="resume-btn" href={FranciscoNaveiraResume} download="Francisco Naveira Resume">Download Resume</a>
            </div>
        </div>
    )
}

export default ImageSection;
