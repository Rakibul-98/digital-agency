import React from 'react';

const SecTitle = ({text,title}) => {
    return (
        <div className='text-center uppercase font-bold'>
            <p className='text-xs'>- {text}</p>
            <h2 className='text-4xl'>our <span className='text-blue-600'>{title}.</span></h2>
        </div>
    );
};

export default SecTitle;