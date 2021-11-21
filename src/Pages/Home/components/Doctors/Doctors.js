import React, { useEffect, useState } from 'react';
import Doctor from './Doctor';

const Doctors = () => {
    const [Doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('https://rakibul-islam-khan.github.io/JSON/Docors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <>
            <div className="container" id='doctors'>
                <div className="row">
                    <div className="col-md-12">
                        <div className='text-center mb-4'>
                            <i className="bi bi-activity fs-3"></i>
                            <span className='fs-1'> Doctors </span>
                            <i className="bi bi-activity fs-3"></i>
                        </div>
                        <div>
                        <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">
                                {
                                    Doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}/>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Doctors;