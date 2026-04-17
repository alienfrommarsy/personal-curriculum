import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="key-metrics">
        <h2>Key Metrics</h2>
        <p>Total Courses: X</p>
        <p>Students Enrolled: Y</p>
        <p>Completed Courses: Z</p>
      </div>
      <div className="features">
        <h2>Features</h2>
        <ul>
          <li>View Course Materials</li>
          <li>Track Progress</li>
          <li>Contact Instructors</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
