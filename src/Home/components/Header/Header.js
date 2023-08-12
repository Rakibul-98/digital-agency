import React from 'react';
import NavBar from '../NavBar/NavBar';
import Banner from '../Banner/Banner';

const Header = () => {
    return (
        <div id='home' className='bg-[url("https://i.ibb.co/MVJGnkR/Untitled-design.png")] bg-no-repeat bg-cover'>
            <NavBar/>
            <Banner/>
        </div>
    );
};

export default Header;