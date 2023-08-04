import React from 'react';

const BannerInfo = ({info}) => {
    return (
        <div>
            <p className='uppercase text-xs font-bold'> -{info.motto}</p>
            <h2 className='uppercase text-3xl font-bold w-9/12 sm:w-8/12 md:w-11/12 xl:w-8/12'>{info.title} <span className='text-blue-600'>{info.colorText}</span></h2>
            <p className='my-5'><small>{info.text}</small></p>
            <button className='px-8 py-3 bg-blue-600 rounded-full uppercase text-sm text-white cursor-pointer hover:bg-blue-900 duration-500'>{info.btnText}</button>
        </div>
    );
};

export default BannerInfo;