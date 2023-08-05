import React from 'react';
import CountUp from 'react-countup';

const SuccessCard = ({ stat }) => {
    return (
        <div className="card py-5 px-1 text-center shadow-lg hover:shadow-2xl bg-white">
            <p className={`mx-auto text-2xl p-3 w-fit rounded-full mb-3 ${stat.cls}`}>{stat.icon}</p>
            <h3 className='text-2xl font-bold'><CountUp end={stat.value} duration={stat.duration} enableScrollSpy={true} />+</h3>
            <p className='text-xs'>{stat.text}</p>
        </div>
    );
};

export default SuccessCard;