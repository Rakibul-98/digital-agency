import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import SocialBtn from './SocialBtn/SocialBtn';

const Footer = () => {
    return (
        <div>
            <div>
                <div>
                    <ContactForm />
                </div>
                <div>
                    <div>
                        <h3>service</h3>
                        <ul>
                            <li>logo design</li>
                            <li>web design</li>
                            <li>print design</li>
                            <li>photography</li>
                            <li>multimedia</li>
                            <li>infographic</li>
                        </ul>
                        <SocialBtn />
                    </div>
                    <div>
                        <h3>quick links</h3>
                        <ul>
                            <li>Home</li>
                            <li>about</li>
                            <li>service</li>
                            <li>work</li>
                            <li>contact</li>
                        </ul>
                        <h3>subscribe us</h3>
                        <input type="email" name="" id="" />
                        <button>submit</button>
                    </div>
                </div>
            </div>
            <small>copyright || all rights reserved</small>
        </div>
    );
};

export default Footer;