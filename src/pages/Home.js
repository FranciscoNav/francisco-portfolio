import React from 'react'
import {faGithub, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home() {

    return (
        <div className="home-page" id="home">
            <header className='hero'>
                <h1 className='hero-text'>
                    Hi! I am
                    <span> Francisco Naveira</span>
                </h1>
                <p className="homepage-subtext">
                    I am a Full Stack Software Engineer specializing in React, Ruby on Rails, JavaScript, and SQL. 
                    Before becoming a web developer, I worked for 4+ years as an accountant. Although I enjoyed accounting, 
                    I found myself wanting to work in an industry whose primary focus was looking towards the future rather than analyzing the past. 
                    After a year of thorough career research, I finally took the plunge and attended Flatiron School to become a Software Engineer.
                </p>
                <br></br>
                <p>
                    I’m excited about any opportunity where I can work on a team to develop innovative new projects. 
                    If you’re interested in seeing more of my work, navigate to the portfolio portion of this website. Enjoy!
                </p>

                <div className='icons'>
                    <a className="icon-link" href="https://www.linkedin.com/in/francisco-naveira/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} className="icon fb"/>
                    </a>
                    <a className="icon-link" href="https://github.com/FranciscoNav" target="_blank">
                        <FontAwesomeIcon icon={faGithub} className="icon git"/>
                    </a>
                    <a className="icon-link" href="https://twitter.com/Cisco_Naveira" target="_blank">
                        <FontAwesomeIcon icon={faTwitter} className="icon tw"/>
                    </a>
                </div>
                
            </header>
        </div>
    )
}

export default Home;