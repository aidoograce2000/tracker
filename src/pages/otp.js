import '../styles/otp.css';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearEmail } from '../redux/slices/authSlice';

const OTP = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.emailForOTP);
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [resendTimer, setResendTimer] = useState(30);

  useEffect(() => {
    const timer = resendTimer > 0 && setInterval(() => {
      setResendTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [resendTimer]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.nextSibling && element.value !== "") {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = () => {
    const enteredCode = otp.join('');
    if (enteredCode.length !== 6) {
      alert('Please enter all 6 digits of the OTP.');
      return;
    }

    console.log('OTP entered:', enteredCode);
    
    dispatch(clearEmail()); // Clear stored email from Redux
    alert('OTP Verified Successfully!');
  };

  const resendOTP = () => {
    if (resendTimer === 0) {
      console.log('Resending OTP...');
      setResendTimer(30); 
    }
  };

  return (
    <div className="otp-container">
      <div className="otp-box">
        <div className="otp-form">
          <h1>Verify your Email</h1>
          <p>
            Enter the 6-digit code sent to your email address
            <br />
            <strong>{email}</strong>
          </p>

          <div className="otp-inputs">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                className="otp-input"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            ))}
          </div>

          <button className="verify-btn" onClick={handleSubmit}>
            Verify Code
          </button>

          <p className="resend-text">
            Didn’t get the code?{' '}
            <span
              className={`resend-link ${resendTimer === 0 ? 'active' : 'disabled'}`}
              onClick={resendOTP}
            >
              {resendTimer === 0 ? 'Resend Code' : `Resend in ${resendTimer}s`}
            </span>
          </p>
        </div>

        <div className="otp-illustration">
          <p>Your privacy is important. We’ve sent a secure code to your inbox.</p>
        </div>
      </div>
    </div>
  );
};

export default OTP;
