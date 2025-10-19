import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Footer Top */}
        <div className="footer-top">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">🍕</span>
              <div className="logo-text">
                <h3>Pizza Palace</h3>
                <p>Authentic Italian Taste</p>
              </div>
            </div>
            <p className="footer-description">
              Experience the finest Italian cuisine with our handcrafted pizzas, 
              made fresh daily with premium ingredients and traditional recipes.
            </p>
            <div className="social-links">
              <a href="#" className="social-link facebook">📘</a>
              <a href="#" className="social-link instagram">📷</a>
              <a href="#" className="social-link twitter">🐦</a>
              <a href="#" className="social-link whatsapp">💬</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><NavLink to="/">Landing</NavLink></li>
              <li><NavLink to="/home">Home</NavLink></li>
              <li><NavLink to="/menu">Menu</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Categories</h4>
            <ul className="footer-links">
              <li><a href="#pizza">Pizza</a></li>
              <li><a href="#burgers">Burgers</a></li>
              <li><a href="#pasta">Pasta</a></li>
              <li><a href="#appetizers">Appetizers</a></li>
              <li><a href="#desserts">Desserts</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>63A, Subhash Chauraha, Civil Lines, Prayagraj, UP</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+91 9532539689</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>info@pizzapalace.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕒</span>
                <span>Mon-Sun: 10:00 AM - 12:00 AM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Pizza Palace. All rights reserved.</p>
            <div className="footer-bottom-links">
              <NavLink to="/privacy">Privacy Policy</NavLink>
              <NavLink to="/terms">Terms of Service</NavLink>
              <NavLink to="/login">Login</NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
