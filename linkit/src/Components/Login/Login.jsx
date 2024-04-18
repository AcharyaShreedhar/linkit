/*
-----------------------------------------------------------
Group Name   : Group 4
Project Name : Linkit
Student Name : HIT SANJAYBHAI SHAH 
Student Id   : 8872340
Github       : HitBhai
Date         : 13th April 2024
------------------------------------------------------------
*/

import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; 

function Login() {
  return (
    <main>
      <div className="login-page">
        <div className="form">
          <form className="login-form">
          <label htmlFor="username" className="label">Username</label>
            <input type="text" id="username" placeholder="Enter your username" className="form-control" required />
            <label htmlFor="password" className='label'>Password</label>
            <input type="password" id="password" placeholder=" Enter your password" className="form-control" required/>
            <button>Login</button>
            <p className="message">Not registered? <Link to="/register">Create an account</Link></p>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;
