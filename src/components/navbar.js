// import React from 'react';
import '../styles/dashboard.css';
import {
  FaBars,
  FaBell,
  FaCog,
  FaUserCircle
} from 'react-icons/fa';
const Navbar = () => {
  return (
      <div className="navbar">
    <div className="navbar-left">
      <FaBars className="menu-icon" />
      <h2 className="navbar-title">clockify</h2>
    </div>
    <div className="navbar-right">
      <button className="upgrade-button">UPGRADE</button>
      <FaBell className="nav-icon" />
      <FaCog className="nav-icon" />
      <FaUserCircle className="nav-icon" />
    </div>
  </div>
  );
};

export default Navbar;
