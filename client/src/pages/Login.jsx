import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const hc = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const hs = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:6500/api/auth/login', form);
      if (res.status === 200) {
        localStorage.setItem('token', res.data.token);
        alert('Your login successfully'); // Show success alert
        navigate('/dashboard'); // Redirect to the dashboard
      }
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/'); // Redirect to the register page
  };

  return (
    <div className="login-container">
      <form onSubmit={hs} className="login-form">
        <h1>Login</h1>
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
        <button className="login-button btn btn-danger" type="submit">
          Login
        </button>
        <div className="Login">
          <p>
            Don't have an account?{" "}
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleRegisterRedirect}
            >
              Register
            </button>
          </p>
        </div>
        <br />
      </form>
    </div>
  );
};

export default Login;