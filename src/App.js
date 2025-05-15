import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import ForgotPassword from './pages/Password';
import OTP from './pages/otp';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        <Route path="/otp" element={<OTP />} />
      </Routes>
    </Router>
  );
}

export default App;
