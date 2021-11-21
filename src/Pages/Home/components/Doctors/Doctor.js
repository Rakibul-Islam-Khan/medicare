import React from 'react';

const Doctor = (props) => {
    const {name, img, designation} = props.doctor;
    return (
        <>
           <div className="col">
                <div className="card p-2">
                    <img src={img} className="card-img-top" height="300" alt="..." />
                    <div className="card-body">
                        <h6 className="card-title">{name}</h6>
                        <p className="card-text">{designation}</p>
                        <a className="fs-3 me-3" href="#">
                            <i className="bi bi-facebook "></i>
                        </a>
                        <a className="fs-3 mx-3" href="#">
                            <i className="bi bi-twitter "></i>
                        </a>
                        <a className="fs-3 mx-3" href="#">
                            <i className="bi bi-instagram "></i>
                        </a>
                        <a className="fs-3 mx-3" href="#">
                        <i class="bi bi-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default Doctor;