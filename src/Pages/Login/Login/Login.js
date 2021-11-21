import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Home/components/Footer/Footer';
import Header from '../../Home/components/Header/Header';

const Login = () => {
    const {error, handleEmail, handlePassword, handleSignUp, signInGoogle, signInFacebook } = useAuth()
    return (
        <>
            <Header />
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-6 px-lg-5">
                        <div className="my-lg-5">
                            <form>
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                            <label for="floatingInput">First Name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div className="form-floating mb-4">
                                            <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                            <label for="floatingInput">Last Name</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-floating mb-4">
                                    <input type="email" onChange={handleEmail} className="form-control" id="floatingInput" placeholder="name@example.com" required />
                                    <label for="floatingInput" >Email address</label>
                                </div>
                                <div className="form-floating mb-4">
                                    <input type="password" onChange={handlePassword} className="form-control" id="floatingPassword" placeholder="Password" required/>
                                    <label for="floatingPassword">Password</label>
                                    <p className='text-danger'>{error}</p>
                                </div>
                                {/* <a className='nav-link text-end mb-3' href="#">Forget Password?</a> */}
                                <button onClick={handleSignUp} className='btn btn-danger w-100 mb-5' type="submit">Register</button>
                            </form>
                            <div className="text-center">
                                <a onClick={signInGoogle}><img src="https://i.ibb.co/ZMg1vmK/icons8-google-48.png" alt="" height="30" className='me-3' /></a>
                                <a onClick={signInFacebook}><img src="https://i.ibb.co/TqDN4mg/icons8-facebook-48.png" alt="" height="30" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="https://i.ibb.co/RDKc0Gy/undraw-Access-account-re-8spm.png" alt="" height="450" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;