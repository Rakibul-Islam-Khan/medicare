import React from 'react';
import { useParams } from 'react-router';
import Footer from '../../Home/components/Footer/Footer';
import Header from '../../Home/components/Header/Header';

const Services = () => {
    const {serviceId} = useParams();
    console.log(useParams())
    return (
        <>
            <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            <Footer/>
        </>
    );
};

export default Services;