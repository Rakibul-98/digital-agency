import React from 'react';
import './NavBar.css';
import { MdDesignServices } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";

const NavBar = () => {

    const navList = [
        { id: 1, name: "home", link: "#home" },
        { id: 2, name: "about", link: "#about" },
        { id: 3, name: "service", link: "#service" },
        { id: 5, name: "work", link: "#work" },
        { id: 4, name: "contact us", link: "#contact" }
    ]
    
    const handleToggleMenu =()=>{
        const navBar = document.getElementById("nav_links_sm");
        if (navBar.style.display === "") {
            navBar.style.display = "block"
        }
        else{
            navBar.style.display = ""
        }
    }

    return (
        <div className='flex justify-between items-center mx-auto w-10/12 relative'>
            <div>
                <a className='font-bold text-5xl text-blue-700' href="/">RH</a>
            </div>
            <div className="font-semibold uppercase">
                <div className='md:hidden'>
                    <label className="swap swap-rotate absolute right-0 top-2 text-4xl hover:text-blue-500">
                        <input onClick={handleToggleMenu} type="checkbox" />
                        <span className="swap-off"><CiMenuKebab /></span>
                        <span className="swap-on"><MdDesignServices /></span>
                    </label>

                    <ul id='nav_links_sm' className="hidden absolute top-16 right-0 text-right z-50 bg-slate-400">
                        {
                            navList.map(l=>
                            <li className='py-2 px-5 mb-2 text-white hover:bg-white w-52 hover:text-black'>
                                <a href={l.link}>{l.name}</a>
                            </li>)
                        }
                    </ul>
                </div>
                <ul className="md:flex hidden nav_links_lg">
                    {
                        navList.map(l=>
                        <li className='py-2 px-5 mx:1 lg:mx-2 hover:bg-white'>
                            <a href={l.link}>{l.name}</a>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default NavBar;