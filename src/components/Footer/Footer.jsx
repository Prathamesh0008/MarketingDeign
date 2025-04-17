import React from 'react';
import './Footer.css';
import logo from '../../assets/logo1.svg'; // Your real estate project logo
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="real-estate-footer">
      <div className="footer-top">
        <div className="footer-logo-section">
          <img src={logo} alt="Project Logo" className="footer-logo" />
          <p>Your Dream Home Awaits at Godrej Horizon, Wadala.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Project</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#amenities">Amenities</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#location">Location</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>📞 +91 98765 43210</p>
          <p>✉️ sales@godrej-horizon.com</p>
          <p>📍 Wadala East, Mumbai, Maharashtra</p>
        </div>

        <div className="footer-socials">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Godrej Horizon Wadala. All Rights Reserved.</p>
        <p className="footer-disclaimer">
          Disclaimer: This website is for information purposes only. Prices, availability, and offers are subject to change without notice.
        </p>
        <p className="developer-credit">Developed by <strong>Prathamesh Shinde</strong></p>
      </div>
    </footer>
  );
};

export default Footer;
