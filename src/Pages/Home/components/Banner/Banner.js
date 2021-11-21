import React from 'react';
import "./Banner.css";
const Banner = () => {
    return (
        <div className='medicare-banner'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className='mt-5'>We Care for Your Health Every Moment</h1>
                        <p className='mt-4'>If you are looking at blank cassettes on the web, you may be very confused at the difference in price You may see some for as low as each.</p>
                        <button type="button" className="btn btn-primary mt-3">Get Started</button>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height="300px" alt="" className='medicare-img' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;