import '../styles/signup.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import bgImage from '../asset/water.jpg';


const SignUp = () => {
    const [form, setForm] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        const { fullName, email, password, confirmPassword } = form;
        if (!fullName || !email || !password || !confirmPassword) {
            alert('All fields are required.');
            return;
        }
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }
        
        console.log('Sign Up Data:', form);
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
                <div className="signup-form">
                    <h1>Create Account</h1>
                    <p>Join us by filling in the details below</p>

                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        className="input"
                        value={form.fullName}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="input"
                        value={form.email}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="input"
                        value={form.password}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        className="input"
                        value={form.confirmPassword}
                        onChange={handleChange}
                    />

                    <button className="signup-btn" onClick={handleSubmit}>Sign Up</button>

                    <div className="divider">or</div>

                    <button className="social-btn google">
                        <FontAwesomeIcon icon={faGoogle} /> Sign Up with Google
                    </button>

                    <button className="social-btn apple">
                        <FontAwesomeIcon icon={faApple} /> Sign Up with Apple
                    </button>

                    <p className="back-login">
                        Already have an account? <Link to="/signin" className="login-link">Login</Link>
                    </p>
                </div>

                
                <div className="signup-right" style={{ backgroundImage: `url(${bgImage})` }}>

                    <div className="content">
                        <h2>Welcome!</h2>
                        <p>Create an account to get started. We're glad to have you!</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default SignUp;