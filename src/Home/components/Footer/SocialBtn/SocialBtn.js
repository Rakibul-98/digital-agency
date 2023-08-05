import React from 'react';
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaPinterestP, FaLinkedinIn } from "react-icons/fa";

const SocialBtn = () => {

    const socials = [
        { id: 1, icon: <FaFacebookF />, link: "https://www.facebook.com/rakibul.rupom2001", class: "bg-violet-500 hover:bg-violet-200" },
        { id: 2, icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/rakibul-98/", class: "bg-blue-500 hover:bg-blue-200" },
        { id: 3, icon: <BsTwitter />, link: "https://rakibul-98.medium.com/", class: "bg-sky-500 hover:bg-sky-200" },
        { id: 4, icon: <FaPinterestP />, link: "https://portfolio-rakibul.netlify.app/", class: "bg-red-600 hover:bg-red-200" },
        { id: 5, icon: <BsInstagram />, link: "https://github.com/Rakibul-98", class: "bg-pink-600 hover:bg-pink-200" },
    ]

    return (
        <div>
            <h3 className='uppercase font-bold text-3xl mt-10'>follow us</h3>
            <div className='flex mt-5'>
                {
                    socials.map(s =>
                        <a className={`p-2 rounded-full mr-2 text-white ${s.class}`} key={s.id} href={s.link} target="_blank" rel="noOpener noReferrer">{s.icon}</a>
                    )
                }
            </div>
        </div>
    );
};

export default SocialBtn;