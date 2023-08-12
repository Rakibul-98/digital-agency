import React from 'react';
import BannerInfo from '../Shared/BannerInfo/BannerInfo';

const Team = () => {

    const teamInfo = {
        motto: "learn about us",
        title: "we're",
        colorText: "experienced team.",
        text: "A team is defined as a group of people who perform interdependent tasks to work toward accomplishing a common mission or specific objective. Some teams have a limited life: for example, a design team developing a new product, or a continuous process improvement team organized to solve a particular problem.",
        btnText: "learn more"
    }

    return (
        <div id='about' className="bg-[url('https://i.ibb.co/wg0jBQ4/bg2.png')] bg-no-repeat">
            <div className='w-10/12 md:w-10/12 md:flex mx-auto justify-between items-center'>
                <div className='md:w-11/12 lg:w-6/12'>
                    <BannerInfo info={teamInfo}></BannerInfo>
                </div>
                <div className='pt-5 px-5'>
                    <img className='mask mask-hexagon-2 hover:mask-hexagon' src="https://i.ibb.co/N1Cq6Nt/profile.png" alt="img" />
                </div>
            </div>
        </div>
    );
};

export default Team;