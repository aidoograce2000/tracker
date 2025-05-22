import '../styles/password.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { storeEmailForOTP } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    const email = document.querySelector('.input').value;
    dispatch(storeEmailForOTP(email));
    
    navigate('/otp');
  };

  return (
    <div className="forgot-container">
      <div className="forgot-box">
        <div className="forgot-form">
          <h1>Forgot Password?</h1>
          <p>Enter your email to reset your password</p>
          <form onSubmit={handleReset}>
                <input type="email" placeholder="Email" className="input" />

                <button className="reset-btn">Send Reset Link</button>
           </form>
          <p className="back-login">Remembered your password? 
            <Link to="/signin"><span className="login-link">Login</span></Link>
          </p>
        </div>

        <div className="forgot-illustration">
          <p>We help keep your account safe and secure.</p>
          
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
