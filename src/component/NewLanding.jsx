import React from 'react';
import Testimonials from './Testimonials.jsx';
import Footer from './Footer.jsx';
import './NewLanding.css';

const NewLanding = () => {
  return (
    <div className="new-landing">
      {/* Hero Section */}
      <section className="landing-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Welcome to <span className="highlight">Pizza Palace</span>
            </h1>
            <p className="hero-subtitle">
              Experience the finest Italian cuisine with our handcrafted pizzas, 
              made fresh daily with premium ingredients and traditional recipes.
            </p>
            <div className="hero-actions">
              <button className="btn-primary">
                <span>Order Now</span>
                <span className="btn-icon">🍕</span>
              </button>
              <button className="btn-secondary">
                <span>View Menu</span>
                <span className="btn-icon">📋</span>
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="pizza-showcase">
              <div className="pizza-card">
                <img src="/public/pizza-1.jpg" alt="Pepperoni Pizza" />
                <div className="pizza-info">
                  <h3>Pepperoni Supreme</h3>
                  <p>₹450</p>
                </div>
              </div>
              <div className="pizza-card">
                <img src="/public/pizza-2.jpg" alt="Margherita Pizza" />
                <div className="pizza-info">
                  <h3>Margherita Classic</h3>
                  <p>₹380</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Pizza Palace?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔥</div>
              <h3>Fresh Ingredients</h3>
              <p>We use only the freshest, highest quality ingredients sourced daily</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast Delivery</h3>
              <p>Get your pizza delivered hot and fresh in under 30 minutes</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👨‍🍳</div>
              <h3>Expert Chefs</h3>
              <p>Our master chefs bring authentic Italian flavors to every pizza</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💯</div>
              <h3>Quality Guarantee</h3>
              <p>100% satisfaction guaranteed or your money back</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">34+</span>
              <span className="stat-label">Delicious Items</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5⭐</span>
              <span className="stat-label">Average Rating</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Order?</h2>
            <p>Join thousands of satisfied customers and experience the best pizza in town!</p>
            <button className="btn-cta">
              <span>Start Ordering</span>
              <span className="btn-icon">🚀</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NewLanding;
