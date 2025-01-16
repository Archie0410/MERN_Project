/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import './Login.css';

function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    userType: 'customer', // Default to customer
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', credentials);
      localStorage.setItem('token', response.data.token);
      alert('Logged in successfully!');
      navigate('/'); // Redirect to Home page after successful login
    } catch (error) {
      alert('Failed to login');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <label>
          User Type:
          <select name="userType" value={credentials.userType} onChange={handleChange}>
            <option value="customer">Customer</option>
            <option value="artist">Artist</option>
          </select>
        </label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
        <p>
          Don't have an account? <Link to="/register">Register here</Link>.
        </p>
      </form>
    </div>
  );
}

export default Login;