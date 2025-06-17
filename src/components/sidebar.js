// import React, { useState } from 'react';
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
import { Link, useLocation } from 'react-router-dom'; // 👈 add this
import { useState, useEffect } from 'react';
import '../styles/dashboard.css';
import projects from '../pages/project';

const Sidebar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const [showReports, setShowReports] = useState(false);
  const [showMore, setShowMore] = useState(false);

  // Auto-expand dropdowns if their routes are active
  useEffect(() => {
    if (pathname.startsWith('/reports')) {
      setShowReports(true);
    }
    if (pathname.startsWith('/more')) {
      setShowMore(true);
    }
  }, [pathname]);

  const isActive = (route) => pathname === route;
  const isPrefixActive = (prefix) => pathname.startsWith(prefix);

  return (
    <div className="sidebar">
      <nav className="nav-links">
        <Link to="/time-tracker" className={`nav-item ${isActive('/time-tracker') ? 'active' : ''}`}>
          <FaClock /> <span>Time Tracker</span>
        </Link>
        <Link to="/calendar" className={`nav-item ${isActive('/calendar') ? 'active' : ''}`}>
          <FaCalendarAlt /> <span>Calendar</span>
        </Link>

        <div className="nav-section">ANALYZE</div>
        <Link to="/dashboard" className={`nav-item ${isActive('/dashboard') ? 'active' : ''}`}>
          <FaTachometerAlt /> <span>Dashboard</span>
        </Link>

        <div
          className={`nav-item dropdown ${isPrefixActive('/reports') ? 'active' : ''}`}
          onClick={() => setShowReports(!showReports)}
        >
          <FaChartBar /> <span>Reports</span>
          {showReports ? <FaChevronUp className="ml-auto" /> : <FaChevronDown className="ml-auto" />}
        </div>
        {showReports && (
          <div className="dropdown-content">
            <Link to="/reports/a" className={isActive('/reports/a') ? 'active' : ''}>Report A</Link><br />
            <Link to="/reports/b" className={isActive('/reports/b') ? 'active' : ''}>Report B</Link>
          </div>
        )}

        <div className="nav-section">MANAGE</div>
        <Link to="/projects" className={`nav-item ${isActive('/projects') ? 'active' : ''}`}>
          <FaProjectDiagram /> <span>Projects</span>
        </Link>
        <Link to="/team" className={`nav-item ${isActive('/team') ? 'active' : ''}`}>
          <FaUsers /> <span>Team</span>
        </Link>
        <Link to="/clients" className={`nav-item ${isActive('/clients') ? 'active' : ''}`}>
          <FaUsers /> <span>Clients</span>
        </Link>
        <Link to="/tags" className={`nav-item ${isActive('/tags') ? 'active' : ''}`}>
          <FaTags /> <span>Tags</span>
        </Link>

        <div
          className={`nav-item dropdown ${isPrefixActive('/more') ? 'active' : ''}`}
          onClick={() => setShowMore(!showMore)}
        >
          <span className="show-more">Show More</span>
          {showMore ? <FaChevronUp className="ml-auto" /> : <FaChevronDown className="ml-auto" />}
        </div>
        {showMore && (
          <div className="dropdown-content">
            <Link to="/more/a" className={isActive('/more/a') ? 'active' : ''}>Option A</Link><br />
            <Link to="/more/b" className={isActive('/more/b') ? 'active' : ''}>Option B</Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
