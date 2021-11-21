import React from "react";
import "./Footer.css";
const Footer = () => {
    return (
        <footer className="bg-footer">
            <div className="container">
                <div className="row py-5 text-light">
                    <div className="col-md-4">
                        <h4>Medicare</h4>
                        <p className="para">
                        A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                        </p>
                        <a className="icon fs-3 me-3" href="#">
                            <i className="bi bi-facebook "></i>
                        </a>
                        <a className="icon fs-3 mx-3" href="#">
                            <i className="bi bi-twitter "></i>
                        </a>
                        <a className="icon fs-3 mx-3" href="#">
                            <i className="bi bi-instagram "></i>
                        </a>
                        <a className="icon fs-3 mx-3" href="#">
                            <i className="bi bi-github "></i>
                        </a>
                    </div>
                    <div className="col-md-2">
                    <h4>NAVIGATION</h4>
                        <ul>
                            <li className="nav-item"><i class="bi bi-check2"></i> Department</li>
                            <li className="nav-item"><i class="bi bi-check2"></i> Blog</li>
                            <li className="nav-item"><i class="bi bi-check2"></i> Terms</li>
                            <li className="nav-item"><i class="bi bi-check2"></i> Contact</li>
                            <li className="nav-item"><i class="bi bi-check2"></i> Shop</li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                    <h4>OUR SERVICES</h4>
                        <ul>
                            <li className="nav-item"><i class="bi bi-check2"></i> Heart Surgery</li>
                            <li className="nav-item"><i class="bi bi-check2"></i> Surgical Treatment</li>
                            <li className="nav-item"><i class="bi bi-check2"></i> General Treatment</li>
                            <li className="nav-item"><i class="bi bi-check2"></i> Medical Treatment</li>
                            <li className="nav-item"><i class="bi bi-check2"></i> Help Desk</li>
                        </ul>
                    </div>
                    <div className="col-md-4 px-5">
                        <h4>Subscribe</h4>
                        <div className="input-group my-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Your email address"
                                aria-label="Recipient's username"
                                aria-describedby="button-addon2"
                            />
                            <button className="btn btn-primary" type="button" id="button-addon2">
                                <i className="bi bi-arrow-right"></i>
                            </button>
                        </div>
                        <small>Get the latest news and updates right at your inbox.</small>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
