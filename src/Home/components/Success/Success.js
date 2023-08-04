import React from 'react';
import SecTitle from '../Shared/SecTitle/SecTitle';
import { BsCalendarCheck, BsClipboard2Check } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { FaRegFaceLaugh } from "react-icons/fa6";
import SuccessCard from './SuccessCard/SuccessCard';

const Success = () => {

    const stats = [
        { id: 1, icon: <BsCalendarCheck />, value: 10, duration:10,  text: "Years of operation", cls: "text-violet-600 bg-violet-50" },
        { id: 2, icon: <BsClipboard2Check />, value: 400, duration:5, text: "Projects delivered", cls: "text-orange-500 bg-orange-50" },
        { id: 3, icon: <FaUsers />, value: 20, duration:8, text: "Specialist", cls: "text-teal-500 bg-teal-50" },
        { id: 4, icon: <FaRegFaceLaugh />, value: 2000, duration:3, text: "Happy customer", cls: "text-rose-500 bg-rose-50" },
    ]

    return (
        <div className="bg-[url('https://i.ibb.co/xJCsmq2/bg1.png')] bg-no-repeat bg-right-top">
            <div className='w-10/12 mx-auto py-20'>
                <div className='mt-10'>
                    <SecTitle text={"expert in fields"} title={"success"}></SecTitle>
                </div>
                <div className='grid text grid-cols-4 gap-3 lg:gap-10 py-10 [&>*:nth-child(even)]:translate-y-10'>
                    {
                        stats.map(s => <SuccessCard key={s.id} stat={s}></SuccessCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Success;