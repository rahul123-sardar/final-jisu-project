import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'; // Import your CSS file

const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    role: '',
    profilePicture: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false); // Toggle edit mode
  const [updatedInfo, setUpdatedInfo] = useState({ name: '', email: '' });

  useEffect(() => {
    axios
      .get('http://localhost:6500/api/auth/userinfo', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      .then((res) => {
        setUserInfo(res.data);
        setUpdatedInfo({ name: res.data.name, email: res.data.email });
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to load profile data');
        setLoading(false);
      });
  }, []);

  const handleUpdate = () => {
    axios
      .put(
        'http://localhost:6500/api/auth/update',
        { name: updatedInfo.name, email: updatedInfo.email },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      )
      .then((res) => {
        setUserInfo(res.data);
        setEditMode(false);
        alert('Profile updated successfully!');
      })
      .catch((err) => {
        console.error(err);
        alert('Failed to update profile');
      });
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account?')) {
      axios
        .delete('http://localhost:6500/api/auth/delete', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        })
        .then(() => {
          alert('Account deleted successfully');
          localStorage.removeItem('token');
          window.location.href = '/';
        })
        .catch((err) => {
          console.error(err);
          alert('Failed to delete account');
        });
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <div className="profile-card">
        <img
          src={userInfo.profilePicture || 'https://via.placeholder.com/150'}
          alt="Profile"
          className="profile-picture"
        />
        {editMode ? (
          <div className="edit-form">
            <input
              type="text"
              value={updatedInfo.name}
              onChange={(e) => setUpdatedInfo({ ...updatedInfo, name: e.target.value })}
              placeholder="Name"
            />
            <input
              type="email"
              value={updatedInfo.email}
              onChange={(e) => setUpdatedInfo({ ...updatedInfo, email: e.target.value })}
              placeholder="Email"
            />
            <button onClick={handleUpdate}>Save</button>
            <button onClick={() => setEditMode(false)}>Cancel</button>
          </div>
        ) : (
          <div className="profile-info">
            <p><strong>Name:</strong> {userInfo.name}</p>
            <p><strong>Email:</strong> {userInfo.email}</p>
            <p><strong>Role:</strong> {userInfo.role}</p>
            <button onClick={() => setEditMode(true)}>Edit Profile</button>
          </div>
        )}
      </div>

      <div className="profile-actions">
        <button className="delete-button" onClick={handleDeleteAccount}>
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Profile;