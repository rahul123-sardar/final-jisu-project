import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const hc = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const hs = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:6500/api/auth/register', form);
      if (res.status === 401) {
        alert('Your registration successfully'); // Show success alert
      }
    } catch (error) {
      console.error('Registration failed:', error.response?.data || error.message);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={hs} className="register-form">
        <b><h1>Register</h1></b>
        <br />
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          onChange={hc}
          required
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={hc}
          required
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={hc}
          required
        />
        <br />
        <button className="btn btn-danger">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;