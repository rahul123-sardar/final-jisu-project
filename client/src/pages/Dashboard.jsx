import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'; // Import your CSS file

const Dashboard = () => {
  const [msg, setMsg] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:6500/api/auth/dashboard', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      .then((res) => setMsg(res.data.message))
      .catch(() => setMsg('Unauthorized'));

    axios
      .get('http://localhost:6500/api/auth/userinfo', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      .then((res) => setUserInfo(res.data))
      .catch(() => setUserInfo(null));

    axios
      .get('http://localhost:6500/api/auth/activities', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      .then((res) => setActivities(res.data))
      .catch(() => setActivities([]));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Clean City Dashboard</h1>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <div className="dashboard-content">
        {userInfo && (
          <div className="user-info">
            <h2>Welcome, {userInfo.name}</h2>
            <p>Email: {userInfo.email}</p>
          </div>
        )}

        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>Total Users</h3>
            <p>120</p>
          </div>
          <div className="stat-card">
            <h3>Active Sessions</h3>
            <p>15</p>
          </div>
          <div className="stat-card">
            <h3>Pending Requests</h3>
            <p>8</p>
          </div>
        </div>

        <div className="recent-activities">
          <h3>Recent Activities</h3>
          {activities.length > 0 ? (
            <ul>
              {activities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          ) : (
            <p>No recent activities.</p>
          )}
        </div>

        <nav className="dashboard-nav">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/profile">Profile</a>
            </li>
            <li>
              <a href="/settings">Settings</a>
            </li>
            <li>
              <a href="/reports">Reports</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Dashboard;