import React from 'react';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import '../styles/dashboard.css';

const Dashboard = () => {
  return (
      <div className="dashboard-wrapper">
    <Navbar />
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-main">
        <div className="dashboard-header">
          <h1>Dashboard</h1>
          <div className="dashboard-filters">
            <select>
              <option>Project</option>
            </select>
            <select>
              <option>Only me</option>
            </select>
            <input type="date" />
          </div>
        </div>
        <div className="dashboard-card">
          <div className="dashboard-stats">
            <div className="total-time">
              <h2>Total time</h2>
              <p>00:00:00</p>
            </div>
            <div className="top-info">
              <div>
                <p>Top Project</p>
                <p>--</p>
              </div>
              <div>
                <p>Top Client</p>
                <p>--</p>
              </div>
            </div>
          </div>
          <div className="dashboard-graph">
            <p className="graph-title">Most tracked activities</p>
            <div className="graph-placeholder">Graph Placeholder</div>
            <div className="project-summary">
              <p>No project</p>
              <p>00:00:00</p>
              <p>0.00%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Dashboard;
