import React from 'react';
import './NavBar.css';

const NavBar = () => {

    return (
        <div className='flex justify-between'>
            <div>
                <a href="">RH</a>
            </div>
            <div>
                <ul className='navbar uppercase flex'>
                    <li><a href="">home</a></li>
                    <li><a href="">about</a></li>
                    <li><a href="">service</a></li>
                    <li><a href="">work</a></li>
                    <li><a href="">contact us</a></li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;