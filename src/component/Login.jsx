import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import './Login.css'
import Register from './Register.jsx'

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
    <div className="login-form">
      
      <form onSubmit={handleSubmit}>
        <table>
          <tr>
            <td colSpan={2}><center><h2>Login</h2></center></td>
          </tr>
          <tr>
              <th><label htmlFor="username">Username:</label></th>
              <td>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
              </td>
          </tr>
          <tr>

            <th><label htmlFor="password">Password:</label></th>
            <td>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button type="submit" className='loginbtn'>Login</button>
              {error && <p className="error">{error}</p>}

            </td>
          </tr>
          <br></br>
          <tr>
            <td colSpan={2}>
              <p>Don't have an account? <NavLink to="/Register" className='Register'>Register Now</NavLink></p>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};
export default Login;
