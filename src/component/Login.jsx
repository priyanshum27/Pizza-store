import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import './Login.css'

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault(); 
    if (username === 'admin' && password === 'password') {
      console.log('Login successful');
    } else {
      setError('Invalid username or password');
    }
  };
  
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <div className="logo">
              <span className="logo-icon">🍕</span>
              <h1>Pizza Palace</h1>
            </div>
            <h2>Welcome Back!</h2>
            <p>Sign in to your account</p>
          </div>
          
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input 
                type="text" 
                id="username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Enter your username"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Enter your password"
                required
              />
            </div>
            
            {error && <div className="error-message">{error}</div>}
            
            <button type="submit" className="login-btn">
              Sign In
            </button>
            
            <div className="login-footer">
              <p>Don't have an account? 
                <NavLink to="/register" className="register-link">Register Now</NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
