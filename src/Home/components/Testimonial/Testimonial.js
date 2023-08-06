import React, { useState } from 'react';
import SecTitle from '../Shared/SecTitle/SecTitle';
import TestimonialBtn from './TestimonialBtn/TestimonialBtn';
import TestimonialDetails from './TestimonialDetails/TestimonialDetails';

const Testimonial = () => {
    const [state, setState] = useState('1');

    const testDetails = [
        {
            id: 1,
            title: "web developer",
            text: "A web developer is a programmer who develops World Wide Web applications using a client–server model.",
            name: "Rakibul Hasan",
            img: "https://i.ibb.co/wNmYX33/profile2-removebg-preview-2.png"
        },
        {
            id: 2,
            title: "web designer",
            text: "A web designer is responsible for creating the design and layout of a website or web pages.",
            name: "Rakib",
            img: "https://i.ibb.co/kmx3xSr/profile-removebg-preview.png"
        },
        {
            id: 3,
            title: "photographer",
            text: "Photographers take and process pictures of people, places, products and events.",
            name: "Carlos",
            img: "https://i.ibb.co/hVHbFtJ/IMG-20220527-161056-removebg-preview.png"
        },
        {
            id: 4,
            title: "student",
            text: "A person formally engaged in learning, especially one enrolled in a school or college; pupil: a student at Yale.",
            name: "Hasan",
            img: "https://i.ibb.co/qx3Tzf2/pexels-subham-majumder-3614106.jpg"
        },
    ]

    const [testimonial, setTestimonial] = useState(testDetails[0]);
    const handleTestBtn = (e) => {
        setState(e);
        if (e === '1') {
            setTestimonial(testDetails[0]);
        }
        else if (e === '2') {
            setTestimonial(testDetails[1]);
        }
        else if (e === '3') {
            setTestimonial(testDetails[2]);
        }
        else if (e === '4') {
            setTestimonial(testDetails[3]);
        }
    }

    const value ={
        state,
        handleTestBtn
    }

    return (
        <div>
            <div className='w-10/12 mx-auto mb-20'>
                <div className='py-10'>
                    <SecTitle text="what our clients says" title="testimonials"></SecTitle>
                </div>
                <div className='sm:flex shadow-2xl xl:h-[300px] rounded-xl xl:w-7/12 lg:w-8/12 sm:w-9/12 mx-auto items-center py-7 px-6'>
                    <div className='bg-blue-600 rounded-xl xl:w-fit h-[150px] lg:h-[250px] sm:h-[200px] lg:-translate-x-20 sm:-translate-x-16 mx-auto'>
                        <img className='rounded-lg h-full xl:w-[300px] lg:w-[350px] sm:w-[350px] mx-auto' src={testimonial.img} alt="person" />
                    </div>
                    <div className='flex items-center pt-7 lg:-translate-x-12 sm:-translate-x-8'>
                        <div className='pr-5'>
                            <TestimonialDetails testimonial={testimonial}></TestimonialDetails>
                        </div>
                        <div>
                            <TestimonialBtn value={value}></TestimonialBtn>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Testimonial;