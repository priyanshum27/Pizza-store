import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar1.css';
export const Navbar1 = () => {
    return (
        <>
            <nav className="maincontainer">
                <div className="icon-container">
                    <img src="/public/logo1.ico" alt="logo-of-store" className="logo-of-page" /><h3>Pizza_Store</h3>       
                </div>
                <div className="navitem">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/store">Store</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink to="/privacy">Privacy</NavLink></li>
                    </ul>
                </div>
                <div className="searchicon">
                    <span>Search:</span>
                    <input type="search" id="search" name="search" placeholder="Search......"/>
                </div>
            </nav>
        </>
    );

}
export default Navbar1;