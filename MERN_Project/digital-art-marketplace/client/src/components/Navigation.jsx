/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav>
      <div className="nav-left">
        <Link to="/">Home</Link>
        <Link to="/collectionpage">Art Pieces</Link>
        <Link to="/cartpage">Cart</Link>
        <Link to="/about-us">About Us</Link>
      </div>
      <div className="nav-right">
        <Link to="/login" className="auth-button">
          Login/Signup
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;