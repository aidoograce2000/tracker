
import { useSelector } from 'react-redux';
import '../styles/dashboard.css';

const DashboardContent = () => {
  const { totalTime, topProject, topClient } = useSelector((state) => state.dashboard);

  return (
    <div className="dashboard-content">
      <div className="summary">
        <div><h3>Total time</h3><p>{totalTime}</p></div>
        <div><h3>Top Project</h3><p>{topProject}</p></div>
        <div><h3>Top Client</h3><p>{topClient}</p></div>
      </div>
      <div className="chart-placeholder">
        <p>[Graph/chart placeholder]</p>
      </div>
    </div>
  );
};

export default DashboardContent;