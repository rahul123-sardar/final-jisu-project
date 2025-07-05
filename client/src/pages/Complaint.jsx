
import React from 'react';
import { Outlet } from 'react-router-dom';

const Complaint = ({ userId, categories }) => {
  return (
    <div>
      <h1>Complaint Page</h1>
      <p>User ID: {userId}</p>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default Complaint