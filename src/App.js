import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import ForgotPassword from './pages/Password';
import OTP from './pages/otp';
import './App.css';

function App() {
  const { isAuthenticated, emailForOTP } = useSelector((state) => state.auth);
  return (
    <Router>
      <Routes>
        {/* Protected route */}

        {/* Auth routes */}
        <Route path="/signin" element={!isAuthenticated ? <SignIn /> : <Navigate to="/" />} />
        <Route path="/signup" element={!isAuthenticated ? <SignUp /> : <Navigate to="/" />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />

        {/* OTP route guarded by Redux state */}
        <Route
          path="/otp"
          element={emailForOTP ? <OTP /> : <Navigate to="/forgot-password" />}
        />

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
       
    </Router>
  );
}

export default App;





