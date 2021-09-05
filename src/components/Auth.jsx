import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

import signinImage from '../assets/signup.jpg';

const Auth = () => {

    const [isSignup, setIsSignup] = useState(true);

    const handleChange = () => { }
    
    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
    }

    return (
        <div className="auth__form-container">

            <div className="auth__form-container_fields">

                <div className="auth__form-container_fields-content">
                    <p>{isSignup ? 'Sign Up' : 'Sign In'}</p>

                    <form onSubmit={() => {} }>

                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="fullName">Full Name</label>
                                <input
                                    name="fullName"
                                    type="text"
                                    placeholder="Full Name"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}

                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="Username">Username</label>
                            <input
                                name="Username"
                                type="text"
                                placeholder="Username"
                                onChange={handleChange}
                                required
                            />
                        </div>


                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="Phone Number">Phone Number</label>
                                <input
                                    name="Phone Number"
                                    type="text"
                                    placeholder="Phone Numberr"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}

                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="Address">Address</label>
                            <input
                                name="Address"
                                type="text"
                                placeholder="Address"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="Avatar URL">Avatar URL</label>
                                <input
                                    name="Avatar URL"
                                    type="text"
                                    placeholder="Avatar URL"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}

                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="Password">Password</label>
                            <input
                                name="Password"
                                type="Password"
                                placeholder="Password"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="Comfirm Password">Comfirm Password</label>
                                <input
                                    name="Password"
                                    type="Password"
                                    placeholder="Comfirm Password"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}

                    </form>

                    <div className="auth__form-container_fields-account">
                        <p>
                            {isSignup
                                ? "Already have an account?"
                                : "Don't have an account?"
                            }
                            <span onClick={switchMode}>
                                {isSignup ? 'Sign In' : 'Sign Up'}
                            </span>
                        </p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Auth