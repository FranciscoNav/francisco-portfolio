import React from 'react'
import {faGithub, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home() {

    return (
        <div className="home-page">
            <header className='hero'>
                <h1 className='hero-text'>
                    Hi. I am
                    <span> Francisco Naveira</span>
                </h1>
                <p className="homepage-subtext">
                    HOME This will be a paragraph talking about who francisco is and how he is super cool.
                    HOME This will be a paragraph talking about who francisco is and how he is super cool.
                    HOME This will be a paragraph talking about who francisco is and how he is super cool.
                    HOME This will be a paragraph talking about who francisco is and how he is super cool.
                </p>
                <div className='icons'>
                    <a className="icon-link" href="https://www.linkedin.com/in/francisco-naveira/">
                        <FontAwesomeIcon icon={faLinkedin} className="icon fb"/>
                    </a>
                    <a className="icon-link" href="https://github.com/FranciscoNav">
                        <FontAwesomeIcon icon={faGithub} className="icon git"/>
                    </a>
                    <a className="icon-link" href="">
                        <FontAwesomeIcon icon={faTwitter} className="icon tw"/>
                    </a>
                </div>
            </header>
        </div>
    )
}

export default Home;