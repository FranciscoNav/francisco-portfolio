import React from 'react'
import {faFacebook, faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage() {

    return (
        <div className="home-page">
            <header className='hero'>
                <h1 className='hero-text'>
                    Hi. I am
                    <span> Francisco Naveira</span>
                </h1>
                <p className="homepage-subtext">
                    This will be a paragraph talking about who francisco is and how he is super cool.
                    This will be a paragraph talking about who francisco is and how he is super cool.
                    This will be a paragraph talking about who francisco is and how he is super cool.
                    This will be a paragraph talking about who francisco is and how he is super cool.
                </p>
                <div className='icons'>
                    <Link className="icon-link">
                        <FontAwesomeIcon icon={faFacebook} className="brand-icon"/>
                    </Link>
                    <Link className="icon-link">
                        <FontAwesomeIcon icon={faGithub} className="brand-icon"/>
                    </Link>
                    <Link className="icon-link">
                        <FontAwesomeIcon icon={faTwitter} className="brand-icon"/>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage


