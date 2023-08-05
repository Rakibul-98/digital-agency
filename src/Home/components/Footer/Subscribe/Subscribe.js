import React from 'react';
import { IoIosPaperPlane } from "react-icons/io";

const Subscribe = () => {
    return (
        <div className='mt-16'>
            <h3 className='uppercase font-bold text-3xl mb-5'>subscribe us</h3>
            <div>
                <input className='rounded-full focus:outline-none bg-slate-100 p-2 ps-3' type="email" name="" id="" placeholder='Email address' />
                <button className='py-3 px-7 bg-blue-600 rounded-full uppercase text-sm text-white cursor-pointer hover:bg-blue-900 duration-300 -translate-x-10'><IoIosPaperPlane /></button>
            </div>
        </div>
    );
};

export default Subscribe;