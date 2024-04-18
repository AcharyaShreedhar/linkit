/*
-----------------------------------------------------------
Group Name   : Group 4
Project Name : Linkit
Student Name : Shree Dhar Acharya 
Student Id   : 8899288
Github User  : AcharyaShreedhar
Date         : 11th April 2024
------------------------------------------------------------
*/

import React from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from '../../../Images/brandlogo.png'
import './Navbar.css'

function Navbar() {
  return (
    <nav>
      <div id="brand-logo">
        <Link to="/"><img src={BrandLogo} alt="brandLogo" /></Link>
      </div>
      <ul className="nav-items">
        <li><Link to="/" className="navLink">Home</Link></li>
        <li><Link to="/products" className="navLink">Products</Link></li>
        <li><Link to="/aboutus" className="navLink">About Us</Link></li>
        <li><Link to="/contactus" className="navLink">Contact Us</Link></li>
        <li><Link to="/login" className="navLink">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
