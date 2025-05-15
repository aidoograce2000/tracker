import '../styles/password.css';
import React from 'react';

const ForgotPassword = () => {
  return (
    <div className="forgot-container">
      <div className="forgot-box">
        <div className="forgot-form">
          <h1>Forgot Password?</h1>
          <p>Enter your email to reset your password</p>

          <input type="email" placeholder="Email" className="input" />

          <button className="reset-btn">Send Reset Link</button>

          <p className="back-login">Remembered your password? <span className="login-link">Login</span></p>
        </div>

        <div className="forgot-illustration">
          <p>We help keep your account safe and secure.</p>
          
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
