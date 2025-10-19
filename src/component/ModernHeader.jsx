import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './ModernHeader.css';

const ModernHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  return (
    <header className="modern-header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo-section">
          <NavLink to="/" className="logo-link">
            <div className="logo">
              <span className="logo-icon">🍕</span>
              <div className="logo-text">
                <h1>Pizza Palace</h1>
                <p>Authentic Italian Taste</p>
              </div>
            </div>
          </NavLink>
        </div>

        {/* Navigation Menu */}
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <NavLink to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Landing
          </NavLink>
          <NavLink to="/home" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/menu" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Menu
          </NavLink>
          <NavLink to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Contact
          </NavLink>
        </nav>

        {/* Action Buttons */}
        <div className="header-actions">
          <button className="search-btn">
            <span className="search-icon">🔍</span>
          </button>
          
          <NavLink to="/cart" className="cart-btn">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{cartCount}</span>
          </NavLink>

          <NavLink to="/login" className="login-btn">
            Login
          </NavLink>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setIsMenuOpen(false)}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <NavLink to="/" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              Landing
            </NavLink>
            <NavLink to="/home" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/menu" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              Menu
            </NavLink>
            <NavLink to="/about" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              About
            </NavLink>
            <NavLink to="/contact" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              Contact
            </NavLink>
            <NavLink to="/login" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              Login
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default ModernHeader;
