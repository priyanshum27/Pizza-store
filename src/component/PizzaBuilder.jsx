import React, { useState } from 'react';
import './PizzaBuilder.css';

const PizzaBuilder = ({ onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState('medium');
  const [selectedCrust, setSelectedCrust] = useState('thin');
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [selectedSauce, setSelectedSauce] = useState('tomato');

  const sizes = [
    { id: 'small', name: 'Small (10")', price: 0 },
    { id: 'medium', name: 'Medium (12")', price: 50 },
    { id: 'large', name: 'Large (14")', price: 100 },
    { id: 'xlarge', name: 'Extra Large (16")', price: 150 }
  ];

  const crusts = [
    { id: 'thin', name: 'Thin Crust', price: 0 },
    { id: 'thick', name: 'Thick Crust', price: 30 },
    { id: 'stuffed', name: 'Stuffed Crust', price: 50 },
    { id: 'gluten-free', name: 'Gluten-Free', price: 40 }
  ];

  const sauces = [
    { id: 'tomato', name: 'Tomato Sauce', price: 0 },
    { id: 'bbq', name: 'BBQ Sauce', price: 20 },
    { id: 'alfredo', name: 'Alfredo Sauce', price: 30 },
    { id: 'pesto', name: 'Pesto Sauce', price: 25 }
  ];

  const toppings = [
    { id: 'pepperoni', name: 'Pepperoni', price: 30, category: 'meat' },
    { id: 'mushrooms', name: 'Mushrooms', price: 20, category: 'vegetable' },
    { id: 'onions', name: 'Onions', price: 15, category: 'vegetable' },
    { id: 'peppers', name: 'Bell Peppers', price: 20, category: 'vegetable' },
    { id: 'olives', name: 'Black Olives', price: 25, category: 'vegetable' },
    { id: 'cheese', name: 'Extra Cheese', price: 35, category: 'cheese' },
    { id: 'sausage', name: 'Italian Sausage', price: 40, category: 'meat' },
    { id: 'bacon', name: 'Bacon', price: 45, category: 'meat' },
    { id: 'pineapple', name: 'Pineapple', price: 25, category: 'fruit' },
    { id: 'jalapenos', name: 'Jalapeños', price: 20, category: 'vegetable' }
  ];

  const toggleTopping = (topping) => {
    setSelectedToppings(prev => 
      prev.find(t => t.id === topping.id)
        ? prev.filter(t => t.id !== topping.id)
        : [...prev, topping]
    );
  };

  const calculatePrice = () => {
    const sizePrice = sizes.find(s => s.id === selectedSize)?.price || 0;
    const crustPrice = crusts.find(c => c.id === selectedCrust)?.price || 0;
    const saucePrice = sauces.find(s => s.id === selectedSauce)?.price || 0;
    const toppingsPrice = selectedToppings.reduce((total, topping) => total + topping.price, 0);
    
    return 200 + sizePrice + crustPrice + saucePrice + toppingsPrice;
  };

  const handleAddToCart = () => {
    const customPizza = {
      id: `custom-${Date.now()}`,
      title: 'Custom Pizza',
      image: '../../public/pizza-1.jpg',
      rating: 4.5,
      price: calculatePrice(),
      category: 'pizza',
      subcategory: 'custom',
      detail: `Custom ${sizes.find(s => s.id === selectedSize)?.name} pizza with ${selectedCrust} crust, ${selectedSauce} sauce, and ${selectedToppings.length} toppings.`,
      ingredients: [
        sizes.find(s => s.id === selectedSize)?.name,
        crusts.find(c => c.id === selectedCrust)?.name,
        sauces.find(s => s.id === selectedSauce)?.name,
        ...selectedToppings.map(t => t.name)
      ],
      prepTime: '20-25 minutes',
      spiceLevel: 'Mild',
      calories: 300 + (selectedToppings.length * 50),
      popular: false,
      new: true,
      custom: true
    };

    onAddToCart(customPizza);
  };

  return (
    <div className="pizza-builder">
      <div className="builder-header">
        <h2>🍕 Build Your Perfect Pizza</h2>
        <p>Customize every detail to create your ideal pizza</p>
      </div>

      <div className="builder-content">
        {/* Size Selection */}
        <div className="builder-section">
          <h3>Choose Size</h3>
          <div className="size-grid">
            {sizes.map(size => (
              <button
                key={size.id}
                className={`size-btn ${selectedSize === size.id ? 'active' : ''}`}
                onClick={() => setSelectedSize(size.id)}
              >
                <span className="size-name">{size.name}</span>
                <span className="size-price">+₹{size.price}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Crust Selection */}
        <div className="builder-section">
          <h3>Choose Crust</h3>
          <div className="crust-grid">
            {crusts.map(crust => (
              <button
                key={crust.id}
                className={`crust-btn ${selectedCrust === crust.id ? 'active' : ''}`}
                onClick={() => setSelectedCrust(crust.id)}
              >
                <span className="crust-name">{crust.name}</span>
                <span className="crust-price">+₹{crust.price}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Sauce Selection */}
        <div className="builder-section">
          <h3>Choose Sauce</h3>
          <div className="sauce-grid">
            {sauces.map(sauce => (
              <button
                key={sauce.id}
                className={`sauce-btn ${selectedSauce === sauce.id ? 'active' : ''}`}
                onClick={() => setSelectedSauce(sauce.id)}
              >
                <span className="sauce-name">{sauce.name}</span>
                <span className="sauce-price">+₹{sauce.price}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Toppings Selection */}
        <div className="builder-section">
          <h3>Choose Toppings</h3>
          <div className="toppings-grid">
            {toppings.map(topping => (
              <button
                key={topping.id}
                className={`topping-btn ${selectedToppings.find(t => t.id === topping.id) ? 'selected' : ''}`}
                onClick={() => toggleTopping(topping)}
              >
                <span className="topping-name">{topping.name}</span>
                <span className="topping-price">+₹{topping.price}</span>
                <span className="topping-category">{topping.category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Price Summary */}
        <div className="price-summary">
          <div className="price-breakdown">
            <div className="price-item">
              <span>Base Price:</span>
              <span>₹200</span>
            </div>
            <div className="price-item">
              <span>Size ({sizes.find(s => s.id === selectedSize)?.name}):</span>
              <span>+₹{sizes.find(s => s.id === selectedSize)?.price || 0}</span>
            </div>
            <div className="price-item">
              <span>Crust ({crusts.find(c => c.id === selectedCrust)?.name}):</span>
              <span>+₹{crusts.find(c => c.id === selectedCrust)?.price || 0}</span>
            </div>
            <div className="price-item">
              <span>Sauce ({sauces.find(s => s.id === selectedSauce)?.name}):</span>
              <span>+₹{sauces.find(s => s.id === selectedSauce)?.price || 0}</span>
            </div>
            {selectedToppings.map(topping => (
              <div key={topping.id} className="price-item">
                <span>{topping.name}:</span>
                <span>+₹{topping.price}</span>
              </div>
            ))}
            <div className="price-total">
              <span>Total:</span>
              <span>₹{calculatePrice()}</span>
            </div>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          🛒 Add Custom Pizza to Cart - ₹{calculatePrice()}
        </button>
      </div>
    </div>
  );
};

export default PizzaBuilder;
