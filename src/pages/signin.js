import '../styles/signin.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [form, setForm] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        const { email, password } = form;
        if (!email || !password) {
            alert('Both fields are required.');
            return;
        }
        
        console.log('Sign In Data:', form);
    };

    return (
        <div className="signin-container">
            <div className="signin-box">
                <div className="signin-form">
                    <h1>Welcome Back</h1>
                    <p>Please sign in to your account</p>

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

                    <button className="signin-btn" onClick={handleSubmit}>Sign In</button>

                    <div className="forgot-link">
                        <Link to="/forgotpassword">Forgot Password?</Link>
                    </div>

                    <div className="divider">or</div>

                    <button className="social-btn google">
                        <FontAwesomeIcon icon={faGoogle} /> Sign In with Google
                    </button>

                    <button className="social-btn apple">
                        <FontAwesomeIcon icon={faApple} /> Sign In with Apple
                    </button>

                    <p className="new-account">
                        Don't have an account? <Link to="/signup" className="signup-link">Create one</Link>
                    </p>
                </div>

                <div className="signin-illustration">
                    <p>Your secure access starts here. Welcome back!</p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
