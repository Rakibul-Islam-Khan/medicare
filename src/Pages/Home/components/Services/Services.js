import React, { useEffect, useState } from 'react';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://rakibul-islam-khan.github.io/JSON/data.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div id='services' className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className='text-center mb-4'>
                            <i className="bi bi-activity fs-3"></i>
                            <span className='fs-1'> Services </span>
                            <i className="bi bi-activity fs-3"></i>
                        </div>
                        <div>
                            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                                {
                                    services.map(services => <Service key={services.id} service={services}/>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Services;