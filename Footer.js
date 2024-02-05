import React from 'react';
import './Footer.css'; // Ensure you have a Footer.css file in your src directory
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa'; // Install react-icons if not already installed
import { FaGooglePlay, FaApple } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer">
        <div className="newsletter-container">
        <h2 className="newsletter-title">Newsletter Subscribe</h2>
        <form className="newsletter-form">
          <input type="email" placeholder="Email Address" aria-label="Email Address" />
          <button type="submit" className="subscribe-btn">Subscribe Now</button>
        </form>

      </div>
      <hr class="footer-divider"/>
      <div className="footer-content">
        {/* ... other footer content ... */}
      </div>
      <div className="footer-bottom">
        {/* <p>Download Our App</p> */}
        {/* Placeholder for app store links */}
       
      </div>

      <div className="footer-content">
        <div className="contact-info">
          <h3 className="footer-title">Fofood</h3>
          <p>Email us: example@gmail.com</p>
          <p>Call: 123 45678910</p>
          <p>Working Hours: Monday - Friday, 08 am - 05 pm</p>
          <div className="social-links">
            <FaFacebook className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaPinterest className="social-icon" />
          </div>
        </div>
        <div className="footer-links">
          <div className="links-group">
            <strong>Quick Links 1</strong>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="links-group">
            <strong>Quick Links 2</strong>
            <ul>
              <li>My Favorites</li>
              <li>My Cart</li>
              <li>Empty State</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="footer-app">
          <strong>Download Our App</strong>
          <div className="app-buttons">
            <button className="btn app"><FaGooglePlay /> Google Play</button>
            <button className="btn app"><FaApple /> App Store</button>
          </div>
          </div>
        </div>
      
      </div>
      <div className="footer-bottom">
      <hr class="footer-divider"/>
        <p>Copyright 2024 All Right Reserved</p>
      </div>

    </footer>
  );
};

export default Footer;

