import React from 'react';
import pizzas from './pizzas.js';
import './ProductStats.css';

const ProductStats = () => {
  const stats = pizzas.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = 0;
    }
    acc[product.category]++;
    return acc;
  }, {});

  const totalProducts = pizzas.length;
  const averageRating = (pizzas.reduce((sum, product) => sum + product.rating, 0) / totalProducts).toFixed(1);
  const priceRange = {
    min: Math.min(...pizzas.map(p => p.price)),
    max: Math.max(...pizzas.map(p => p.price))
  };

  return (
    <div className="product-stats">
      <div className="stats-header">
        <h2>Our Menu Statistics</h2>
        <p>Discover the variety and quality of our offerings</p>
      </div>
      
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">🍽️</div>
          <div className="stat-number">{totalProducts}</div>
          <div className="stat-label">Total Items</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">⭐</div>
          <div className="stat-number">{averageRating}</div>
          <div className="stat-label">Average Rating</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">💰</div>
          <div className="stat-number">₹{priceRange.min}-₹{priceRange.max}</div>
          <div className="stat-label">Price Range</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">🏷️</div>
          <div className="stat-number">{Object.keys(stats).length}</div>
          <div className="stat-label">Categories</div>
        </div>
      </div>

      <div className="category-breakdown">
        <h3>Category Breakdown</h3>
        <div className="category-stats">
          {Object.entries(stats).map(([category, count]) => (
            <div key={category} className="category-stat">
              <span className="category-name">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
              <div className="category-bar">
                <div 
                  className="category-fill" 
                  style={{ width: `${(count / totalProducts) * 100}%` }}
                ></div>
              </div>
              <span className="category-count">{count} items</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductStats;
