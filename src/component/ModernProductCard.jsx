import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ModernProductCard.css';

function ModernProductCard({ 
  img, 
  title, 
  rating, 
  price, 
  id, 
  detail, 
  ingredients, 
  prepTime, 
  spiceLevel, 
  calories, 
  subcategory,
  popular,
  new: isNew 
}) {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleOrderClick = () => {
    navigate(`/order/${id}`, {
      state: { 
        img, title, rating, price, detail, ingredients, 
        prepTime, spiceLevel, calories, subcategory 
      }, 
    });
  };

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsAddingToCart(false);
    // Add to cart logic here
  };

  const getSpiceIcon = (level) => {
    switch(level) {
      case 'None': return '';
      case 'Mild': return '🌶️';
      case 'Medium': return '🌶️🌶️';
      case 'Hot': return '🌶️🌶️🌶️';
      case 'Medium-Hot': return '🌶️🌶️🌶️';
      default: return '';
    }
  };

  return (
    <div className="modern-product-card">
      {/* Badges */}
      <div className="card-badges">
        {popular && <span className="badge popular">🔥 Popular</span>}
        {isNew && <span className="badge new">✨ New</span>}
      </div>

      {/* Product Image */}
      <div className="product-image-container">
        <img src={img} alt={title} className="product-image" />
        <div className="image-overlay">
          <button className="quick-view-btn" onClick={handleOrderClick}>
            👁️ Quick View
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="product-info">
        <div className="product-header">
          <h3 className="product-title">{title}</h3>
          {subcategory && <span className="product-category">{subcategory}</span>}
        </div>

        <div className="product-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`star ${i < Math.floor(rating) ? 'filled' : ''}`}>
                ⭐
              </span>
            ))}
          </div>
          <span className="rating-text">{rating}</span>
        </div>

        <p className="product-description">{detail}</p>

        <div className="product-details">
          <div className="detail-item">
            <span className="detail-icon">⏱️</span>
            <span className="detail-text">{prepTime}</span>
          </div>
          <div className="detail-item">
            <span className="detail-icon">{getSpiceIcon(spiceLevel)}</span>
            <span className="detail-text">{spiceLevel}</span>
          </div>
          <div className="detail-item">
            <span className="detail-icon">🔥</span>
            <span className="detail-text">{calories} cal</span>
          </div>
        </div>

        {ingredients && ingredients.length > 0 && (
          <div className="ingredients-section">
            <h4>Key Ingredients:</h4>
            <div className="ingredients-list">
              {ingredients.slice(0, 3).map((ingredient, index) => (
                <span key={index} className="ingredient-tag">{ingredient}</span>
              ))}
              {ingredients.length > 3 && (
                <span className="ingredient-tag more">+{ingredients.length - 3}</span>
              )}
            </div>
          </div>
        )}

        <div className="product-footer">
          <div className="price-section">
            <span className="price">₹{price}</span>
            <span className="price-label">per serving</span>
          </div>

          <div className="quantity-controls">
            <button 
              className="qty-btn" 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              −
            </button>
            <span className="quantity">{quantity}</span>
            <button 
              className="qty-btn" 
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
        </div>

        <div className="action-buttons">
          <button 
            className="add-to-cart-btn"
            onClick={handleAddToCart}
            disabled={isAddingToCart}
          >
            {isAddingToCart ? (
              <>
                <span className="spinner"></span>
                Adding...
              </>
            ) : (
              <>
                🛒 Add to Cart
              </>
            )}
          </button>
          <button className="order-now-btn" onClick={handleOrderClick}>
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModernProductCard;
