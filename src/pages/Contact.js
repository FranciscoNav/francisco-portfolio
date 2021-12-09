import React from 'react';
import Title from '../components/Title';

function Contact() {
    
    return (
        <div className='contact-page' id="contact">
            <Title title={'Contact'} span={'Contact'}/>
            <br/>
            <p>If you would like to contact me, or if you found a bug on the site, please fill out the form below. Thank you!</p>
            <br/>
            <form action="https://formsubmit.co/fnaveira11@gmail.com" method="POST" className="contact-form">
                <h5>Contact Form</h5>
                <input type="text" name="name" placeholder="Name" required className="contact-input"/>
                <br/>
                <input type="email" name="email" placeholder="Email" required className="contact-input"/>
                <br/>
                <textarea type="text" name="content" placeholder="Message"  className="contact-message"></textarea>
                <br/>
                <input type="hidden" name="_next" value="http://localhost:3000/contact"/>
                <button type='submit' className="contact-button">Send</button>
            </form>
        </div>
    )
}

export default Contact;
