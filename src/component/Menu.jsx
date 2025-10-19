import React, { useState } from 'react';
import PizzaCard from './PizzaCard.jsx';
import pizzas from './pizzas.js';
import ProductStats from './ProductStats.jsx';
import './Menu.css';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Items', icon: '🍽️' },
    { id: 'pizza', name: 'Pizzas', icon: '🍕' },
    { id: 'burger', name: 'Burgers', icon: '🍔' },
    { id: 'pasta', name: 'Pasta', icon: '🍝' },
    { id: 'appetizer', name: 'Appetizers', icon: '🥗' },
    { id: 'dessert', name: 'Desserts', icon: '🍰' },
    { id: 'salad', name: 'Salads', icon: '🥙' },
    { id: 'drink', name: 'Drinks', icon: '🥤' }
  ];

  const filteredPizzas = selectedCategory === 'all' 
    ? pizzas 
    : pizzas.filter(item => item.category === selectedCategory);

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h1>Our Complete Menu</h1>
        <p>Explore our delicious range of pizzas, burgers, pasta, and refreshing drinks</p>
      </div>

      <div className="category-filters">
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            <span className="category-icon">{category.icon}</span>
            <span className="category-name">{category.name}</span>
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {filteredPizzas.map(item => (
          <PizzaCard
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
          />
        ))}
      </div>

      {filteredPizzas.length === 0 && (
        <div className="no-items">
          <h3>No items found in this category</h3>
          <p>Please try selecting a different category</p>
        </div>
      )}
      
      <ProductStats />
    </div>
  );
};

export default Menu;
