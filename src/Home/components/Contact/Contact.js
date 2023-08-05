import React from 'react';
import { IoIosCall } from "react-icons/io";

const Contact = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/5KpRzrk/Background.png')] bg-no-repeat bg-cover">
            <div className='uppercase font-bold text-white text-center py-10'>
                <p className='text-xs'>-let's work together</p>
                <h2 className='text-4xl mt-5 px-2'>need a successful project?</h2>
                <button className='py-5 px-10 bg-white rounded-full text-blue-600 uppercase my-5 hover:bg-green-500 hover:text-white'>contact us</button>
                <p className='flex items-center justify-center'>or call us now <span className='mx-3 text-3xl'><IoIosCall/></span> 123-456-789</p>
            </div>
        </div>
    );
};

export default Contact;