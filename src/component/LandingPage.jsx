import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';
import './LandingPage.css';

const LandingPage = () => {
  const threeRef = useRef();
  const animationRef = useRef();

  useEffect(() => {
    // Three.js Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    threeRef.current.appendChild(renderer.domElement);

    // Create floating pizza slices
    const pizzaSlices = [];
    const pizzaGeometry = new THREE.ConeGeometry(1, 0.5, 8);
    
    for (let i = 0; i < 15; i++) {
      const pizzaMaterial = new THREE.MeshLambertMaterial({ 
        color: new THREE.Color().setHSL(0.1, 0.8, 0.6 + Math.random() * 0.3)
      });
      const pizzaSlice = new THREE.Mesh(pizzaGeometry, pizzaMaterial);
      
      pizzaSlice.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
      
      pizzaSlice.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      pizzaSlice.scale.setScalar(0.5 + Math.random() * 0.5);
      scene.add(pizzaSlice);
      pizzaSlices.push(pizzaSlice);
    }

    // Create floating ingredients
    const ingredients = [];
    const ingredientGeometry = new THREE.SphereGeometry(0.3, 8, 8);
    
    for (let i = 0; i < 20; i++) {
      const ingredientMaterial = new THREE.MeshLambertMaterial({ 
        color: new THREE.Color().setHSL(Math.random(), 0.7, 0.5)
      });
      const ingredient = new THREE.Mesh(ingredientGeometry, ingredientMaterial);
      
      ingredient.position.set(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30
      );
      
      scene.add(ingredient);
      ingredients.push(ingredient);
    }

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    scene.add(directionalLight);

    camera.position.z = 15;

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      
      // Rotate pizza slices
      pizzaSlices.forEach((slice, index) => {
        slice.rotation.x += 0.01;
        slice.rotation.y += 0.01;
        slice.position.y += Math.sin(Date.now() * 0.001 + index) * 0.01;
      });
      
      // Rotate ingredients
      ingredients.forEach((ingredient, index) => {
        ingredient.rotation.x += 0.02;
        ingredient.rotation.y += 0.02;
        ingredient.position.y += Math.sin(Date.now() * 0.001 + index * 0.5) * 0.005;
      });
      
      renderer.render(scene, camera);
    };
    
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (threeRef.current && renderer.domElement) {
        threeRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="landing-page">
      {/* Three.js Background */}
      <div className="three-background" ref={threeRef}></div>
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Welcome to <span className="highlight">Pizza Palace</span>
            </h1>
            <p className="hero-subtitle">
              Authentic Italian pizzas made with love, delivered with care. 
              Experience the taste of Italy in every bite. Premium ingredients, 
              expert chefs, and lightning-fast delivery.
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
              <Link to="/home" className="btn-tertiary">
                <span>Explore Store</span>
                <span className="btn-icon">🏪</span>
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="floating-pizza">
              <img src="/public/pizza-1.jpg" alt="Delicious Pizza" />
            </div>
            <div className="floating-pizza secondary">
              <img src="/public/pizza-2.jpg" alt="Margherita Pizza" />
            </div>
            <div className="floating-pizza tertiary">
              <img src="/public/pizza-3.jpg" alt="Veggie Pizza" />
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
              <h3>Lightning Fast Delivery</h3>
              <p>Get your pizza delivered in 15-20 minutes with our express delivery service. Hot, fresh, and on time every time.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🍅</div>
              <h3>Farm Fresh Ingredients</h3>
              <p>We use only the freshest ingredients sourced from local farms and trusted suppliers. Quality you can taste.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👨‍🍳</div>
              <h3>Master Chefs</h3>
              <p>Our experienced chefs craft each pizza with traditional Italian techniques passed down through generations.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💯</div>
              <h3>100% Satisfaction</h3>
              <p>Complete satisfaction guarantee or your money back. We stand behind our quality and taste.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Award Winning</h3>
              <p>Recognized as the best pizza place in the city for 3 consecutive years by Food Critics Association.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3>Eco Friendly</h3>
              <p>Committed to sustainability with biodegradable packaging and locally sourced organic ingredients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2>How We Make Perfect Pizza</h2>
            <p>Our step-by-step process ensures every pizza is crafted to perfection</p>
          </div>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Fresh Dough</h3>
                <p>Hand-kneaded dough made fresh daily with premium flour and natural yeast</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Quality Toppings</h3>
                <p>Finest ingredients selected and prepared fresh every morning</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Expert Crafting</h3>
                <p>Master chefs assemble each pizza with precision and care</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Wood-Fired Oven</h3>
                <p>Cooked to perfection in our traditional Italian wood-fired oven</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Fast Delivery</h3>
                <p>Hot and fresh delivery to your doorstep in record time</p>
              </div>
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
                <p>Our signature pizza with premium pepperoni and mozzarella</p>
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
                <p>Classic Italian pizza with fresh basil and buffalo mozzarella</p>
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
                <p>Premium Angus beef burger with crispy bacon</p>
                <div className="item-rating">
                  <span className="stars">⭐⭐⭐⭐⭐</span>
                  <span className="rating">4.6</span>
                </div>
                <div className="item-price">₹320</div>
              </div>
            </div>
            <div className="popular-item">
              <img src="/public/pasta-1.jpg" alt="Spaghetti Carbonara" />
              <div className="item-info">
                <h3>Spaghetti Carbonara</h3>
                <p>Authentic Roman pasta with eggs and pancetta</p>
                <div className="item-rating">
                  <span className="stars">⭐⭐⭐⭐⭐</span>
                  <span className="rating">4.8</span>
                </div>
                <div className="item-price">₹420</div>
              </div>
            </div>
            <div className="popular-item">
              <img src="/public/pizza-3.jpg" alt="Garden Fresh Veggie" />
              <div className="item-info">
                <h3>Garden Fresh Veggie</h3>
                <p>Loaded with farm-fresh vegetables and herbs</p>
                <div className="item-rating">
                  <span className="stars">⭐⭐⭐⭐⭐</span>
                  <span className="rating">4.6</span>
                </div>
                <div className="item-price">₹420</div>
              </div>
            </div>
            <div className="popular-item">
              <img src="/public/drink-2.jpg" alt="Mango Smoothie" />
              <div className="item-info">
                <h3>Tropical Mango Smoothie</h3>
                <p>Refreshing smoothie with Greek yogurt and honey</p>
                <div className="item-rating">
                  <span className="stars">⭐⭐⭐⭐⭐</span>
                  <span className="rating">4.6</span>
                </div>
                <div className="item-price">₹200</div>
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
