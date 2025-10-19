import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Prayagraj",
      rating: 5,
      comment: "The best pizza I've ever had! The crust is perfectly crispy and the toppings are fresh. Pizza Palace never disappoints!",
      avatar: "👩‍💼"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Allahabad",
      rating: 5,
      comment: "Amazing service and delicious food. The delivery was super fast and the pizza was still hot when it arrived. Highly recommended!",
      avatar: "👨‍💻"
    },
    {
      id: 3,
      name: "Anita Singh",
      location: "Prayagraj",
      rating: 5,
      comment: "I've been ordering from Pizza Palace for months now. Their Margherita pizza is absolutely divine. The quality is consistent every time!",
      avatar: "👩‍🎓"
    },
    {
      id: 4,
      name: "Vikram Patel",
      location: "Allahabad",
      rating: 5,
      comment: "The custom pizza builder is fantastic! I can create exactly what I want. The staff is friendly and the food quality is top-notch.",
      avatar: "👨‍🍳"
    },
    {
      id: 5,
      name: "Sneha Gupta",
      location: "Prayagraj",
      rating: 5,
      comment: "Perfect for family dinners! Kids love their pizza and we adults enjoy the variety. Great value for money and excellent taste.",
      avatar: "👩‍👧‍👦"
    },
    {
      id: 6,
      name: "Amit Verma",
      location: "Allahabad",
      rating: 5,
      comment: "The Pepperoni Supreme is my go-to order. Always fresh, always delicious. Pizza Palace has become our weekend tradition!",
      avatar: "👨‍💼"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it - hear from our satisfied customers!
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-content">
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <span key={index} className="star">⭐</span>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.comment}"</p>
              </div>
              
              <div className="testimonial-author">
                <div className="author-avatar">
                  <span className="avatar-icon">{testimonial.avatar}</span>
                </div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-location">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-stats">
          <div className="stat-item">
            <span className="stat-number">4.9</span>
            <span className="stat-label">Average Rating</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">1000+</span>
            <span className="stat-label">Happy Customers</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">98%</span>
            <span className="stat-label">Satisfaction Rate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
