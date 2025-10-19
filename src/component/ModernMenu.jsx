import React, { useState, useEffect } from 'react';
import ModernProductCard from './ModernProductCard.jsx';
import pizzas from './pizzas.js';
import './ModernMenu.css';

const ModernMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(pizzas);

  const categories = [
    { id: 'all', name: 'All Items', icon: '🍽️', count: pizzas.length },
    { id: 'pizza', name: 'Pizzas', icon: '🍕', count: pizzas.filter(p => p.category === 'pizza').length },
    { id: 'burger', name: 'Burgers', icon: '🍔', count: pizzas.filter(p => p.category === 'burger').length },
    { id: 'pasta', name: 'Pasta', icon: '🍝', count: pizzas.filter(p => p.category === 'pasta').length },
    { id: 'appetizer', name: 'Appetizers', icon: '🥗', count: pizzas.filter(p => p.category === 'appetizer').length },
    { id: 'dessert', name: 'Desserts', icon: '🍰', count: pizzas.filter(p => p.category === 'dessert').length },
    { id: 'salad', name: 'Salads', icon: '🥙', count: pizzas.filter(p => p.category === 'salad').length },
    { id: 'drink', name: 'Drinks', icon: '🥤', count: pizzas.filter(p => p.category === 'drink').length }
  ];

  const sortOptions = [
    { id: 'popular', name: 'Most Popular' },
    { id: 'rating', name: 'Highest Rated' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'new', name: 'Newest First' }
  ];

  useEffect(() => {
    let filtered = pizzas;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.detail.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.ingredients.some(ing => ing.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Sort products
    switch (sortBy) {
      case 'popular':
        filtered = filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        break;
      case 'rating':
        filtered = filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-low':
        filtered = filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered = filtered.sort((a, b) => b.price - a.price);
        break;
      case 'new':
        filtered = filtered.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, sortBy, searchTerm]);

  return (
    <div className="modern-menu">
      {/* Header Section */}
      <div className="menu-header">
        <div className="header-content">
          <h1>Our Complete Menu</h1>
          <p>Discover our delicious range of authentic Italian pizzas, gourmet burgers, fresh pasta, and refreshing drinks</p>
          
          {/* Search Bar */}
          <div className="search-section">
            <div className="search-bar">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search for your favorite dish..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="filters-section">
        <div className="filters-container">
          {/* Category Filters */}
          <div className="category-filters">
            <h3>Categories</h3>
            <div className="category-grid">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <span className="category-icon">{category.icon}</span>
                  <span className="category-name">{category.name}</span>
                  <span className="category-count">({category.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Sort Options */}
          <div className="sort-section">
            <h3>Sort By</h3>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              {sortOptions.map(option => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="results-section">
        <div className="results-header">
          <h2>
            {selectedCategory === 'all' ? 'All Items' : categories.find(c => c.id === selectedCategory)?.name}
            <span className="results-count">({filteredProducts.length} items)</span>
          </h2>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {filteredProducts.map(item => (
            <ModernProductCard
              key={item.id}
              id={item.id}
              img={item.image}
              title={item.title}
              rating={item.rating}
              price={item.price}
              detail={item.detail}
              ingredients={item.ingredients}
              prepTime={item.prepTime}
              spiceLevel={item.spiceLevel}
              calories={item.calories}
              subcategory={item.subcategory}
              popular={item.popular}
              new={item.new}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>No items found</h3>
            <p>Try adjusting your search or filter criteria</p>
            <button 
              className="clear-filters-btn"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSortBy('popular');
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModernMenu;
