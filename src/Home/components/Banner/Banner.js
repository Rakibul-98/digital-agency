import React from 'react';
import BannerInfo from '../Shared/BannerInfo/BannerInfo';

const Banner = () => {
    const bannerInfo={
        motto:"welcome to logo design",
        title:"advance business solution",
        colorText:"ux ui design.",
        text:"we are dedicated to shaping exceptional digital experiences that propel businesses to new heights. As a leading digital agency, we combine creativity, innovation, and cutting-edge technology to craft captivating digital solutions that leave a lasting impact.",
        btnText:"explore our services"
    }

    return (
        <div className='w-10/12 md:w-10/12 md:flex flex-row-reverse mx-auto items-center py-20'>
            <div className='pb-5'>
                <img className='scale-90 hover:scale-100 duration-1000 md:scale-110' src="https://i.ibb.co/Sr3MzK7/laptop.png" alt="laptop" />
            </div>
            <div className='md:w-11/12 lg:w-6/12'>
                <BannerInfo info={bannerInfo}></BannerInfo>
            </div>
        </div>
    );
};

export default Banner;