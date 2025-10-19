import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Welcome to <span className="highlight">Pizza Palace</span>
            </h1>
            <p className="hero-subtitle">
              Authentic Italian pizzas made with love, delivered with care. 
              Experience the taste of Italy in every bite.
            </p>
            <div className="hero-actions">
              <Link to="/menu" className="btn-primary">
                <span>Order Now</span>
                <span className="btn-icon">🍕</span>
              </Link>
              <Link to="/about" className="btn-secondary">
                <span>Learn More</span>
                <span className="btn-icon">📖</span>
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="floating-pizza">
              <img src="/public/pizza-1.jpg" alt="Delicious Pizza" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Pizza Palace?</h2>
            <p>We bring you the best pizza experience with premium ingredients and fast delivery</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Fast Delivery</h3>
              <p>Get your pizza delivered in 15-20 minutes with our express delivery service</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🍅</div>
              <h3>Fresh Ingredients</h3>
              <p>We use only the freshest ingredients sourced from local farms and trusted suppliers</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👨‍🍳</div>
              <h3>Expert Chefs</h3>
              <p>Our experienced chefs craft each pizza with traditional Italian techniques</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💯</div>
              <h3>Quality Guarantee</h3>
              <p>100% satisfaction guarantee or your money back. We stand behind our quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Items Section */}
      <section className="popular-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Most Popular Items</h2>
            <p>Customer favorites that keep them coming back for more</p>
          </div>
          <div className="popular-grid">
            <div className="popular-item">
              <img src="/public/pizza-1.jpg" alt="Pepperoni Supreme" />
              <div className="item-info">
                <h3>Pepperoni Supreme</h3>
                <p>Our signature pizza with premium pepperoni</p>
                <div className="item-rating">
                  <span className="stars">⭐⭐⭐⭐⭐</span>
                  <span className="rating">4.8</span>
                </div>
                <div className="item-price">₹450</div>
              </div>
            </div>
            <div className="popular-item">
              <img src="/public/pizza-2.jpg" alt="Margherita Classica" />
              <div className="item-info">
                <h3>Margherita Classica</h3>
                <p>Classic Italian pizza with fresh basil</p>
                <div className="item-rating">
                  <span className="stars">⭐⭐⭐⭐⭐</span>
                  <span className="rating">4.9</span>
                </div>
                <div className="item-price">₹380</div>
              </div>
            </div>
            <div className="popular-item">
              <img src="/public/burger-1.jpg" alt="Classic Beef Deluxe" />
              <div className="item-info">
                <h3>Classic Beef Deluxe</h3>
                <p>Premium Angus beef burger</p>
                <div className="item-rating">
                  <span className="stars">⭐⭐⭐⭐⭐</span>
                  <span className="rating">4.6</span>
                </div>
                <div className="item-price">₹320</div>
              </div>
            </div>
          </div>
          <div className="section-actions">
            <Link to="/menu" className="btn-primary">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">34+</div>
              <div className="stat-label">Menu Items</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15-20</div>
              <div className="stat-label">Min Delivery</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.8</div>
              <div className="stat-label">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>What Our Customers Say</h2>
            <p>Real reviews from real customers</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The best pizza in town! Fresh ingredients and amazing taste. Delivery was super fast too!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👨</div>
                <div className="author-info">
                  <h4>Rajesh Kumar</h4>
                  <span>Verified Customer</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Love the variety of options! The custom pizza builder is amazing. Highly recommended!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👩</div>
                <div className="author-info">
                  <h4>Priya Sharma</h4>
                  <span>Verified Customer</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Great quality food and excellent service. The Margherita pizza is absolutely perfect!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👨</div>
                <div className="author-info">
                  <h4>Amit Singh</h4>
                  <span>Verified Customer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Order?</h2>
            <p>Join thousands of satisfied customers and experience the best pizza in town</p>
            <div className="cta-actions">
              <Link to="/menu" className="btn-primary">
                <span>Order Now</span>
                <span className="btn-icon">🍕</span>
              </Link>
              <Link to="/contact" className="btn-secondary">
                <span>Contact Us</span>
                <span className="btn-icon">📞</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
