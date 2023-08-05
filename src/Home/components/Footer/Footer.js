import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import SocialBtn from './SocialBtn/SocialBtn';
import Subscribe from './Subscribe/Subscribe';

const Footer = () => {

    const services = [
        { id: 1, name: "logo design" },
        { id: 2, name: "web design" },
        { id: 3, name: "print design" },
        { id: 4, name: "photography" },
        { id: 5, name: "multimedia" },
        { id: 6, name: "infographic" },
    ]

    const qLinks = [
        { id: 1, name: "home" },
        { id: 2, name: "about" },
        { id: 3, name: "service" },
        { id: 4, name: "work" },
        { id: 5, name: "contact" },
    ]

    return (
        <div className="bg-[url('https://i.ibb.co/ZHv1JTm/footerbg-PNG.png')] bg-no-repeat bg-cover">
            <div className='w-10/12 mx-auto'>
                <div className='lg:flex justify-around py-20'>
                    <div className='xl:w-5/12 lg:w-4/12 sm:w-8/12 mx-auto lg:border-r xl:pr-16 lg:pr-8'>
                        <ContactForm />
                    </div>

                    <div className='xl:w-6/12 lg:w-7/12 md:w-10/12 mx-auto sm:flex justify-between'>
                        <div className='mt-10 lg:mt-0'>
                            <h3 className='uppercase font-bold text-3xl mb-5'>service</h3>
                            <ul>
                                {
                                    services.map(s =>
                                        <li className='capitalize my-2 hover:font-bold cursor-pointer' key={s.id}>{s.name}</li>
                                    )
                                }
                            </ul>
                            <SocialBtn />
                        </div>
                        <div className='mt-10 lg:mt-0'>
                            <h3 className='uppercase font-bold text-3xl mb-5'>quick links</h3>
                            <ul>
                                {
                                    qLinks.map(ql =>
                                        <li className='capitalize my-2 ' key={ql.id}><a className='hover:font-bold' href={`#${ql.name}`}>{ql.name}</a></li>
                                    )
                                }
                            </ul>
                            <Subscribe />
                        </div>
                    </div>
                </div>
                <p className='text-center text-xs'>copyright || all rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;