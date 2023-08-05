import React from 'react';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Team from './components/Team/Team';
import Success from './components/Success/Success';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <Projects/>
            <Team/>
            <Success/>
            <Testimonial/>
            <Contact/>
            {/* <Footer/> */}
        </div>
    );
};

export default Home;