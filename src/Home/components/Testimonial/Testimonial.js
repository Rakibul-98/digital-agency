import React from 'react';
import SecTitle from '../Shared/SecTitle/SecTitle';

const Testimonial = () => {
    return (
        <div>
            <div className='w-10/12 mx-auto mb-20'>
                <div className='py-10'>
                    <SecTitle text="what our clients says" title="testimonials"></SecTitle>
                </div>
                <div className='sm:flex shadow-2xl xl:h-[300px] rounded-xl xl:w-7/12 lg:w-8/12 sm:w-9/12 mx-auto items-center py-7 px-6'>
                    <div className='bg-blue-600 rounded-xl xl:w-fit h-[150px] lg:h-[250px] sm:h-[200px] lg:-translate-x-20 sm:-translate-x-16 mx-auto'>
                        <img className='rounded-lg h-full xl:w-[300px] lg:w-[350px] sm:w-[350px] mx-auto' src="https://i.ibb.co/wNmYX33/profile2-removebg-preview-2.png" alt="person" />
                    </div>
                    <div className='pt-7 lg:-translate-x-12 sm:-translate-x-8'>
                        <p className='bg-blue-600 w-fit px-2 py-1 text-white rounded'>Web Developer</p>
                        <p className='my-5'><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur atque enim totam iste exercitationem.</i></p>
                        <strong>Rakibul Hasan</strong> <br />
                        <p className='text-gray-500 text-xs font-semibold'>Web Developer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;