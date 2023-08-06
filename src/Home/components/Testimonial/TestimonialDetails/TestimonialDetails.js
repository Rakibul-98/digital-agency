import React from 'react';

const TestimonialDetails = ({testimonial}) => {
    return (
        <div>
            <p className='bg-blue-600 w-fit px-2 py-1 text-white rounded'>{testimonial.title}</p>
            <p className='my-5'><i>{testimonial.text}</i></p>
            <strong>{testimonial.name}</strong> <br />
            <p className='text-gray-500 text-xs font-semibold'>{testimonial.title}</p>
        </div>
    );
};

export default TestimonialDetails;