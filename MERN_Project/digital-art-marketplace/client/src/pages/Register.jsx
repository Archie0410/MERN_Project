/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

function Register() {
  const [user, setUser] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    password: '',
    userType: 'customer', // Default to customer
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.name || !user.mobile || !user.email || !user.address || !user.password) {
      alert('Please fill out all fields');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', user);
      if (response.data.message) {
        alert('Registered successfully!');
        navigate('/login'); // Redirect to Login page after successful registration
      }
    } catch (error) {
      console.error('Registration error:', error.response ? error.response.data : error.message);
      alert('Failed to register: ' + (error.response ? error.response.data.message : error.message));
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Register</h2>
        <label>
          User Type:
          <select name="userType" value={user.userType} onChange={handleChange}>
            <option value="customer">Customer</option>
            <option value="artist">Artist</option>
          </select>
        </label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile"
          value={user.mobile}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={user.address}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
        />
        <button type="submit">Register</button>
        <p>
          Already have an account? <Link to="/login">Login here</Link>.
        </p>
      </form>
    </div>
  );
}

export default Register;