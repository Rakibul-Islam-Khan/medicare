import React from 'react';
import { Link } from 'react-router-dom';
import "./Service.css"
const Service = (props) => {
    const {id, title, img, description} = props.service;
    return (
        <>
            <div className="col">
                <div className="card shadow p-3">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <Link to={`/serviceDetail/${id}`}>
                        <button className="btn btn-danger">Read More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;