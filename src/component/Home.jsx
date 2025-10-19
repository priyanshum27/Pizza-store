import React from 'react';
import ModernHero from './ModernHero.jsx';
import ModernProductCard from './ModernProductCard.jsx';
import Testimonials from './Testimonials.jsx';
import Footer from './Footer.jsx';
import './Home.css';
import './Store.css';

const Home = () => {
  return (
    <div className="home-page">
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

      {/* Featured Products Section */}
      <Store1 />

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

export const Restorent=()=>{
  return (
    <>
      <div className='main-container'>
        <img src="/public/about.jpg" alt="tables" />
        <img src="/public/gallery-1.jpg" alt="customer" />
        <img src="/public/gallery-4.jpg" alt="business" />
      </div>
    </>
  );
}

const Store1 = () => {
  const pizzas1 = [
    {
      id: 1,
      image: "../../public/pizza1.jpeg",
      title: "Pepperoni Supreme",
      rating: 4.8,
      price: 450,
      category: "pizza",
      subcategory: "premium",
      detail: "Our signature Pepperoni Supreme features hand-tossed dough, San Marzano tomato sauce, premium mozzarella, and authentic Italian pepperoni.",
      ingredients: ["Hand-tossed dough", "San Marzano tomatoes", "Premium mozzarella", "Italian pepperoni"],
      prepTime: "15-20 minutes",
      spiceLevel: "Medium",
      calories: 320,
      popular: true,
      new: false
    },
    {
      id: 2,
      image: "../../public/drink-7.jpg",
      title: "Sparkling Lemonade",
      rating: 4.3,
      price: 140,
      category: "drink",
      subcategory: "soda",
      detail: "Refreshing sparkling lemonade made with fresh lemon juice, sparkling water, and natural sweetener.",
      ingredients: ["Fresh lemon juice", "Sparkling water", "Natural sweetener"],
      prepTime: "2-3 minutes",
      spiceLevel: "None",
      calories: 80,
      popular: false,
      new: true
    },
    {
      id: 3,
      image: "../../public/burger-1.jpg",
      title: "Classic Beef Deluxe",
      rating: 4.6,
      price: 320,
      category: "burger",
      subcategory: "beef",
      detail: "Premium Angus beef patty grilled to perfection, topped with aged cheddar, crispy bacon, and fresh vegetables.",
      ingredients: ["Angus beef patty", "Aged cheddar", "Crispy bacon", "Fresh vegetables"],
      prepTime: "12-15 minutes",
      spiceLevel: "Mild",
      calories: 680,
      popular: true,
      new: false
    },
    {
      id: 4,
      image: "../../public/pasta-1.jpg",
      title: "Spaghetti Carbonara",
      rating: 4.8,
      price: 420,
      category: "pasta",
      subcategory: "classic",
      detail: "Authentic Roman pasta with eggs, pancetta, aged pecorino cheese, and black pepper.",
      ingredients: ["Fresh spaghetti", "Eggs", "Pancetta", "Pecorino cheese"],
      prepTime: "12-15 minutes",
      spiceLevel: "Mild",
      calories: 580,
      popular: true,
      new: false
    },
    {
      id: 5,
      image: "../../public/pizza-2.jpg",
      title: "Margherita Classica",
      rating: 4.9,
      price: 380,
      category: "pizza",
      subcategory: "classic",
      detail: "The timeless Margherita celebrates simplicity with fresh San Marzano tomatoes and buffalo mozzarella.",
      ingredients: ["San Marzano tomatoes", "Buffalo mozzarella", "Fresh basil"],
      prepTime: "12-15 minutes",
      spiceLevel: "Mild",
      calories: 280,
      popular: true,
      new: false
    },
    {
      id: 6,
      image: "../../public/drink-2.jpg",
      title: "Tropical Mango Smoothie",
      rating: 4.6,
      price: 200,
      category: "drink",
      subcategory: "smoothie",
      detail: "Creamy mango smoothie blended with Greek yogurt, honey, and a hint of vanilla.",
      ingredients: ["Fresh mango", "Greek yogurt", "Honey", "Vanilla"],
      prepTime: "3-5 minutes",
      spiceLevel: "None",
      calories: 180,
      popular: false,
      new: true
    },
    {
      id: 7,
      image: "../../public/burger-2.jpg",
      title: "Chicken Deluxe Supreme",
      rating: 4.5,
      price: 360,
      category: "burger",
      subcategory: "chicken",
      detail: "Crispy chicken breast marinated in buttermilk, topped with Swiss cheese and avocado.",
      ingredients: ["Crispy chicken breast", "Swiss cheese", "Avocado", "Chipotle mayo"],
      prepTime: "15-18 minutes",
      spiceLevel: "Medium",
      calories: 720,
      popular: false,
      new: true
    },
    {
      id: 8,
      image: "../../public/pasta-2.jpg",
      title: "Penne Arrabbiata",
      rating: 4.6,
      price: 380,
      category: "pasta",
      subcategory: "spicy",
      detail: "Spicy penne pasta with garlic, red chili peppers, and San Marzano tomatoes.",
      ingredients: ["Penne pasta", "Garlic", "Red chili peppers", "San Marzano tomatoes"],
      prepTime: "10-12 minutes",
      spiceLevel: "Hot",
      calories: 450,
      popular: false,
      new: true
    }
  ];
  
  return (
    <div className="featured-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Featured Items</h2>
          <p>Discover our most popular dishes</p>
        </div>
        <div className="featured-grid">
          {pizzas1.map((pizzaItem,index)=>{
            return <ModernProductCard 
              key={pizzaItem.id} 
              id={pizzaItem.id} 
              img={pizzaItem.image} 
              title={pizzaItem.title} 
              rating={pizzaItem.rating} 
              price={pizzaItem.price}
              detail={pizzaItem.detail}
              ingredients={pizzaItem.ingredients}
              prepTime={pizzaItem.prepTime}
              spiceLevel={pizzaItem.spiceLevel}
              calories={pizzaItem.calories}
              subcategory={pizzaItem.subcategory}
              popular={pizzaItem.popular}
              new={pizzaItem.new}
            />
          })}
        </div>
      </div>
    </div>
  );
};
export default Home;
