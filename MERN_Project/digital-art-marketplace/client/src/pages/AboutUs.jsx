/* eslint-disable no-unused-vars */
import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <h2>About Us</h2>
      <div className="about-us-content">
        <section className="about-section">
          <h3>About the Website</h3>
          <p>
            Welcome to the Digital Art Marketplace, your one-stop destination for discovering and purchasing unique digital art pieces. Our platform connects talented artists with art enthusiasts from around the world. Whether you are looking for stunning visuals, creative designs, or exclusive collections, we have got you covered.
          </p>
        </section>

        <section className="contact-section">
          <h3>Contact Details</h3>
          <p>If you have any questions or need assistance, feel free to reach out to us:</p>
          <ul>
            <li>Email: <a href="mailto:support@digitalartmarketplace.com">support@digitalartmarketplace.com</a></li>
            <li>Phone: +1 (123) 456-7890</li>
            <li>Address: 123 Art Street, Creative City, CA 90210</li>
          </ul>
        </section>

        <section className="contributors-section">
          <h3>Our Contributors</h3>
          <p>We are proud to collaborate with some of the most talented artists and developers:</p>
          <ul>
            <li>Mrunalini Kulkarni - Main Engineer</li>
            <li>Archana Ba Parmar - UI/UX Designer </li>
            <li>Prathama Mehta - Backend Developer </li>
            <li>Devangini Parmar - Frontend Developer</li>
          </ul>
        </section>

        <section className="social-media-section">
          <h3>Follow Us</h3>
          <p>Stay connected with us on social media:</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;