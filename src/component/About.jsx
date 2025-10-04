import React from 'react';
import './About.css';

const About = () => {
  return (
    <>
      <div className="container">
        <h1>About Us</h1>

        <div className="about-section">
            <h2>Who We Are</h2>
            <p>We are a passionate team of pizza enthusiasts dedicated to providing the best pizza experience to our customers. Since our founding in 2023, we have been committed to using only the freshest ingredients, maintaining traditional cooking methods, and innovating with new recipes that delight the taste buds.</p>
        </div>

        <div class="mission-section">
            <h2>Our Mission</h2>
            <p>Our mission is to serve delicious and high-quality pizza that brings people together. Whether you’re enjoying a meal with family or having a quick bite with friends, we strive to make each experience memorable with our tasty pizzas and excellent customer service.</p>
        </div>

        <div class="team-section">
            <h2>Meet Our Team</h2>
            <div class="team-members">
                <div class="team-member">
                    <img src="/public/gallery-3.jpg" alt="Team Member 1" />
                    <h3>John Doe</h3>
                    <p>Founder & Head Chef</p>
                </div>
                <div class="team-member">
                    <img src="/public/person_1.jpg" alt="Team Member 2" />
                    <h3>Jane Smith</h3>
                    <p>Marketing Director</p>
                </div>
                <div class="team-member">
                    <img src="/public/person_2.jpg" alt="Team Member 3" />
                    <h3>Sarah Johnson</h3>
                    <p>Operations Manager</p>
                </div>
                <div class="team-member">
                    <img src="/public/person_3.jpg" alt="Team Member 3" />
                    <h3>Sarah Johnson</h3>
                    <p>Operations Manager</p>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default About;