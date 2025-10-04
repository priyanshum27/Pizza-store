import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
//import './Login.css'

export const Register = () => {
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
            <td colSpan={2}><center><h2>Registration</h2></center></td>
          </tr>
          
          <tr>
              <th><label htmlFor="username">Email or Phone Number:</label></th>
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

            <th><label htmlFor="password">RePassword:</label></th>
            <td>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button type="submit" className='loginbtn'>Register</button>
              {error && <p className="error">{error}</p>}

            </td>
          </tr>
          <br></br>
          <tr>
            <td colSpan={2}>
              <p>Don't have an account? <NavLink to="/login" className='Register'>Login</NavLink></p>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};
export default Register;
