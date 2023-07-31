import React from 'react';
import BannerInfo from '../Shared/BannerInfo/BannerInfo';

const Banner = () => {
    return (
        <div className='md:flex w-10/12 mx-auto items-center'>
            <div className='md:w-5/12'>
                <BannerInfo/>
            </div>
            <div className=''>
                <img className='' src="https://i.ibb.co/Sr3MzK7/laptop.png" alt="laptop" />
            </div>
        </div>
    );
};

export default Banner;