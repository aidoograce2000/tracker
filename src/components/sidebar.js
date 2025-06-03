import React, { useState } from 'react';
import {
  FaClock,
  FaChartBar,
  FaProjectDiagram,
  FaUsers,
  FaTags,
  FaCalendarAlt,
  FaChevronDown,
  FaChevronUp,
  FaTachometerAlt
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/dashboard.css';

const Sidebar = () => {
   const [showReports, setShowReports] = useState(false);
  const [showMore, setShowMore] = useState(false);

  return (
      <div className="sidebar">
      <nav className="nav-links">
        <Link to="/time-tracker" className="nav-item">
          <FaClock /> <span>Time Tracker</span>
        </Link>
        <Link to="/calendar" className="nav-item">
          <FaCalendarAlt /> <span>Calendar</span>
        </Link>

        <div className="nav-section">ANALYZE</div>
        <Link to="/dashboard" className="nav-item active">
          <FaTachometerAlt /> <span>Dashboard</span>
        </Link>
        <div className="nav-item dropdown" onClick={() => setShowReports(!showReports)}>
          <FaChartBar /> <span>Reports</span>
          {showReports ? <FaChevronUp className="ml-auto" /> : <FaChevronDown className="ml-auto" />}
        </div>
        {showReports && <div className="dropdown-content">Report A<br />Report B</div>}

        <div className="nav-section">MANAGE</div>
        <Link to="/projects" className="nav-item">
          <FaProjectDiagram /> <span>Projects</span>
        </Link>
        <Link to="/team" className="nav-item">
          <FaUsers /> <span>Team</span>
        </Link>
        <Link to="/clients" className="nav-item">
          <FaUsers /> <span>Clients</span>
        </Link>
        <Link to="/tags" className="nav-item">
          <FaTags /> <span>Tags</span>
        </Link>

        <div className="nav-item dropdown" onClick={() => setShowMore(!showMore)}>
          <span className="show-more">Show More</span>
          {showMore ? <FaChevronUp className="ml-auto" /> : <FaChevronDown className="ml-auto" />}
        </div>
        {showMore && <div className="dropdown-content">Option A<br />Option B</div>}
      </nav>
    </div>
  );
};

export default Sidebar;