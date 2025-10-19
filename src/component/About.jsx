import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About Pizza Palace</h1>
          <p>Discover our story, passion, and commitment to delivering the finest Italian cuisine</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2023 in the heart of Prayagraj, Pizza Palace began as a dream to bring authentic 
                Italian flavors to our community. What started as a small family business has grown into 
                a beloved local institution, serving thousands of satisfied customers.
              </p>
              <p>
                Our journey began when our founder, inspired by a trip to Italy, decided to recreate the 
                authentic taste of traditional Italian pizza using locally sourced ingredients and 
                time-honored recipes passed down through generations.
              </p>
            </div>
            <div className="story-image">
              <img src="/public/gallery-3.jpg" alt="Our Story" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="card-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To serve delicious, high-quality pizza that brings people together. We strive to make 
                each dining experience memorable with our authentic flavors, fresh ingredients, and 
                exceptional customer service.
              </p>
            </div>
            <div className="vision-card">
              <div className="card-icon">👁️</div>
              <h3>Our Vision</h3>
              <p>
                To become the most trusted and loved pizza destination in Prayagraj, known for our 
                commitment to quality, innovation, and creating lasting memories for our customers 
                and their families.
              </p>
            </div>
            <div className="values-card">
              <div className="card-icon">❤️</div>
              <h3>Our Values</h3>
              <p>
                Quality, authenticity, customer satisfaction, and community service are the core 
                values that guide everything we do. We believe in supporting local suppliers and 
                giving back to our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="team-header">
            <h2>Meet Our Amazing Team</h2>
            <p>The passionate people behind Pizza Palace's success</p>
          </div>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src="/public/gallery-3.jpg" alt="Rajesh Kumar" />
              </div>
              <div className="member-info">
                <h3>Rajesh Kumar</h3>
                <p className="member-role">Founder & Head Chef</p>
                <p className="member-bio">
                  With 15+ years of culinary experience, Rajesh brings authentic Italian techniques 
                  to every pizza we create.
                </p>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="/public/person_1.jpg" alt="Priya Sharma" />
              </div>
              <div className="member-info">
                <h3>Priya Sharma</h3>
                <p className="member-role">Operations Manager</p>
                <p className="member-bio">
                  Priya ensures smooth operations and maintains our high standards of quality 
                  and customer service.
                </p>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="/public/person_2.jpg" alt="Amit Verma" />
              </div>
              <div className="member-info">
                <h3>Amit Verma</h3>
                <p className="member-role">Marketing Director</p>
                <p className="member-bio">
                  Amit connects Pizza Palace with our community through innovative marketing 
                  and customer engagement strategies.
                </p>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="/public/person_3.jpg" alt="Sneha Gupta" />
              </div>
              <div className="member-info">
                <h3>Sneha Gupta</h3>
                <p className="member-role">Customer Relations</p>
                <p className="member-bio">
                  Sneha ensures every customer feels valued and leaves with a smile, making 
                  Pizza Palace a welcoming place for all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">34+</span>
              <span className="stat-label">Menu Items</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Available</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;