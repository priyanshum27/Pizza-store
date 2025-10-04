import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const NavBar = () => {
  return (
    <>
      <div className='NavBar'>
        <div className='icon-parent'>
          <img src="/public/logo1.ico" alt="icon" className='iconlogo' />
          <span>Pizza_Store</span>
        </div>
        <div className='Nav-div'>
          <nav>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/store">Store</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li><NavLink to="/login">Login</NavLink></li>
              <li><NavLink to="/privacy">Privacy</NavLink></li>
              <li> <div className="parent-search">
                <span>Search :-</span>
                <input type="search" className='search' placeholder='Search.....' />
              </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
