/*
-----------------------------------------------------------
Group Name   : Group 4
Project Name : Linkit
Student Name : HIT SANJAYBHAI SHAH 
Student Id   : 8872340
Github       : HitBhai
Date         : 14th April 2024
------------------------------------------------------------
*/

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Register.css'; 

function Register() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if passwords match
    if (password === confirmPassword) {
      // Handle registration logic
      console.log('Passwords match');
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <main>
      <div className="register-page">
        <div className="form">
          <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" id="username" className="form-control" placeholder="Enter your username" required />
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" className="form-control" placeholder="Enter your email" required />
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" id="password" className="form-control" placeholder="Enter your password" value={password} onChange={handlePasswordChange} required />
            <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
            <input type="password" id="confirm-password" className="form-control" placeholder="Confirm your password" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
            <button type="submit" className="btn btn-primary">Register</button>
            <p className="message">Already registered? <Link to="/login">Login</Link></p>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Register;
