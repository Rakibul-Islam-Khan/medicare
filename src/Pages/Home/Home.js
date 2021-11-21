import React from 'react';
import Banner from './components/Banner/Banner';
import Doctors from './components/Doctors/Doctors';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Services from './components/Services/Services';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Services/>
            <Doctors/>
            <Footer/>
        </div>
    );
};

export default Home;