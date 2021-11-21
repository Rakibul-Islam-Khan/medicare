import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const Header = () => {
    const { users, logOut } = useAuth()
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top p-3 shadow">
                <div className="container">
                    <a className="navbar-brand text-danger" href="#">Medicare</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services#services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/doctors#doctors">Doctors</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            {!users?.email ? <Link to="/login">
                                <button className="btn btn-outline-success me-5" type="submit">Login</button>
                            </Link>
                            :
                            <Link to="/home">
                            <button onClick={logOut} className="btn btn-outline-success me-5" type="submit">Logout</button>
                        </Link>

                            }
                            {users.email && <span>Sign in as <span className='text-danger'>{users?.displayName}</span></span>}
                            {users.email && <img src={users?.photoURL} height="48"/>}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;