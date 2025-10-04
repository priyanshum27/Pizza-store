import React from 'react';
import './contact.css'

const Contact = () => {
  return (
    <>
      <div className="container">
        <h2>Contact Us</h2>
        <form action="/submit" method="post">
          <label htmlFor="name">Your Name</label> 
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Your Email</label> 
          <input type="email" id="email" name="email" required />

          <label htmlFor="phone">Your Phone Number</label> 
          <input type="tel" id="phone" name="phone" required />

          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button type="submit" className='btn'>Send Message</button>
        </form>

        <div className="contact-info"> 
          <p>You can also reach us at:</p>
          <p>Email: info@pizzastore.com</p>
          <p>Phone: +91 9532539689</p>
          <p>Address: 63A,Subhash chauraha civil lines Prayagraj,Uttar Pradesh,India</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
