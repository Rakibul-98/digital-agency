import React from 'react';

const BannerInfo = () => {
    return (
        <div>
            <p className='uppercase font-bold'>- welcome to logo design</p>
            <h2 className='uppercase text-3xl font-bold w-9/12 sm:w-8/12 md:w-11/12 xl:w-8/12'>advance business solution <span className='text-blue-600'>ux ui design</span></h2>
            <p className='my-5'><small>we are dedicated to shaping exceptional digital experiences that propel businesses to new heights. As a leading digital agency, we combine creativity, innovation, and cutting-edge technology to craft captivating digital solutions that leave a lasting impact.</small></p>
            <button className='px-8 py-3 bg-blue-600 rounded-full uppercase text-sm text-white cursor-pointer hover:bg-blue-900 duration-500'>explore our services</button>
        </div>
    );
};

export default BannerInfo;