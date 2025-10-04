import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';  // Fix the imports
import NavBar from './component/Navbar1.jsx';
import './App.css';
import Home from './component/Home.jsx';
import About from './component/About.jsx';
import Contact from './component/Contact.jsx';
import Store from './component/Store.jsx';
import Login from './component/Login.jsx';
import Privacy from './component/Privacy.jsx';
import Register from './component/Register.jsx';
import Order from './component/Order.jsx';
import OrderComponent from './component/Ordernow.jsx';
const App = () => {
  return (
    <BrowserRouter>
      <div className='Mainpage'>
        <div className='Nav'>
          <NavBar />
        </div>
        <div className='store'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/store" element={<Store />} />
            <Route path="/login" element={<Login />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/register" element={<Register />} />
            <Route path="/store" element={<OrderComponent />}  />
            <Route path="/order/:id" element={<Order />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
