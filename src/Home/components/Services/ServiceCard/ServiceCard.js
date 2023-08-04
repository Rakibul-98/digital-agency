import React from 'react';

const ServiceCard = ({service}) => {
    return (
        <div className={`${service.class} px-2 lg:px-12 py-5`}>
            {
                service.img?<img className='lg:h-28 lg:w-28 h-20 w-20 mx-auto p-2' src={service.img} alt="" /> : <p className='font-bold uppercase'>{service.motto}</p>
            }
            {
                service.title ? <h3 className='text-center uppercase font-semibold pb-3'>{service.title}</h3> : <h3 className='font-bold text-4xl uppercase py-3'>our <span className='text-blue-600'>services.</span></h3>
            }
            {
                service.text ? <p className='text-center text-xs md:text-base'>{service.text.slice(0,250)}. . .</p> : <p className='text-xs md:text-base'>Services are intangible and can cover a wide range of activities across various industries. They are distinct from physical goods, as they involve the provision of expertise, skills, or labor to deliver value to customers or clients.</p>
            }
        </div>
    );
};

export default ServiceCard;