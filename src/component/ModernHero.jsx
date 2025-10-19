import React from 'react';
import './ModernHero.css';

const ModernHero = () => {
  return (
    <section className="modern-hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Authentic Italian Pizza
            <span className="highlight"> Made Fresh Daily</span>
          </h1>
          <p className="hero-subtitle">
            Experience the taste of Italy with our handcrafted pizzas, made with the finest ingredients 
            and traditional recipes passed down through generations. From our wood-fired ovens to your table.
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">34+</span>
              <span className="stat-label">Delicious Items</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4.8</span>
              <span className="stat-label">Average Rating</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15-20</span>
              <span className="stat-label">Min Delivery</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
          </div>

          <div className="hero-features">
            <div className="feature-item">
              <span className="feature-icon">🔥</span>
              <span className="feature-text">Wood-Fired Ovens</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🌿</span>
              <span className="feature-text">Fresh Ingredients</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🚚</span>
              <span className="feature-text">Fast Delivery</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">⭐</span>
              <span className="feature-text">Premium Quality</span>
            </div>
          </div>

          <div className="hero-actions">
            <button className="btn-primary">
              <span>Order Now</span>
              <span className="btn-icon">🍕</span>
            </button>
            <button className="btn-secondary">
              <span>View Menu</span>
              <span className="btn-icon">📋</span>
            </button>
            <button className="btn-tertiary">
              <span>Build Custom Pizza</span>
              <span className="btn-icon">🛠️</span>
            </button>
          </div>
        </div>

        <div className="hero-image">
          <div className="pizza-showcase">
            <div className="pizza-card floating">
              <img src="/public/pizza-1.jpg" alt="Pepperoni Pizza" />
              <div className="pizza-info">
                <h3>Pepperoni Supreme</h3>
                <p>₹450</p>
                <div className="pizza-badge">🔥 Popular</div>
              </div>
            </div>
            <div className="pizza-card floating delay-1">
              <img src="/public/pizza-2.jpg" alt="Margherita Pizza" />
              <div className="pizza-info">
                <h3>Margherita</h3>
                <p>₹380</p>
                <div className="pizza-badge">⭐ Classic</div>
              </div>
            </div>
            <div className="pizza-card floating delay-2">
              <img src="/public/pizza-3.jpg" alt="Veggie Pizza" />
              <div className="pizza-info">
                <h3>Garden Fresh</h3>
                <p>₹420</p>
                <div className="pizza-badge">🌿 Healthy</div>
              </div>
            </div>
            <div className="pizza-card floating delay-3">
              <img src="/public/pizza-4.jpg" alt="Meat Lovers" />
              <div className="pizza-info">
                <h3>Meat Lovers</h3>
                <p>₹520</p>
                <div className="pizza-badge">🥩 Premium</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="floating-elements">
        <div className="floating-element element-1">🍕</div>
        <div className="floating-element element-2">🍅</div>
        <div className="floating-element element-3">🧀</div>
        <div className="floating-element element-4">🌿</div>
        <div className="floating-element element-5">🍄</div>
        <div className="floating-element element-6">🥓</div>
        <div className="floating-element element-7">🫒</div>
        <div className="floating-element element-8">🌶️</div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-arrow">
          <span>↓</span>
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
