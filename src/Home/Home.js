import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Team from './components/Team/Team';
import Success from './components/Success/Success';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Banner/>
            <Services/>
            <Projects/>
            <Team/>
            <Success/>
            <Testimonial/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;