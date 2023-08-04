import React from 'react';
import BannerInfo from '../Shared/BannerInfo/BannerInfo';

const Banner = () => {
    return (
        <div className='w-10/12 md:w-10/12 md:flex flex-row-reverse mx-auto items-center py-20'>
            <div className='pb-5'>
                <img className='scale-90 hover:scale-100 duration-1000 md:scale-110' src="https://i.ibb.co/Sr3MzK7/laptop.png" alt="laptop" />
            </div>
            <div className='md:w-11/12 lg:w-6/12'>
                <BannerInfo/>
            </div>
        </div>
    );
};

export default Banner;