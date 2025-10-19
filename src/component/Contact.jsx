import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="hero-content">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Your Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  <span>Send Message</span>
                  <span className="btn-icon">📧</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-section">
              <h2>Contact Information</h2>
              
              <div className="contact-cards">
                <div className="contact-card">
                  <div className="card-icon">📧</div>
                  <div className="card-content">
                    <h3>Email Us</h3>
                    <p>info@pizzapalace.com</p>
                    <p>orders@pizzapalace.com</p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="card-icon">📞</div>
                  <div className="card-content">
                    <h3>Call Us</h3>
                    <p>+91 9532539689</p>
                    <p>+91 9876543210</p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="card-icon">📍</div>
                  <div className="card-content">
                    <h3>Visit Us</h3>
                    <p>63A, Subhash Chauraha</p>
                    <p>Civil Lines, Prayagraj</p>
                    <p>Uttar Pradesh, India</p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="card-icon">🕒</div>
                  <div className="card-content">
                    <h3>Opening Hours</h3>
                    <p>Mon - Fri: 10:00 AM - 11:00 PM</p>
                    <p>Sat - Sun: 11:00 AM - 12:00 AM</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="social-section">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="#" className="social-link facebook">📘 Facebook</a>
                  <a href="#" className="social-link instagram">📷 Instagram</a>
                  <a href="#" className="social-link twitter">🐦 Twitter</a>
                  <a href="#" className="social-link whatsapp">💬 WhatsApp</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section">
        <div className="container">
          <h2>Find Us on Map</h2>
          <div className="map-placeholder">
            <div className="map-content">
              <span className="map-icon">🗺️</span>
              <h3>Interactive Map</h3>
              <p>63A, Subhash Chauraha, Civil Lines, Prayagraj, Uttar Pradesh, India</p>
              <button className="map-btn">Open in Google Maps</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
