/*
-----------------------------------------------------------
Group Name   : Group 4
Project Name : Linkit
Student Name : Mistry Mayuree Rakeshbhai 
Student Id   : 8873677
Github       : mistrymayuree72@gmail.com 
Date         : 10th April 2024
------------------------------------------------------------
*/

import React from 'react';
import BrandLogo from '../../../Images/brandlogo.png'
import SearchIcon from '../../../Images/search.svg'
import './Footer.css'

function Footer() {
  return (
    <footer>
      <div id="footer-container">
        <div className="footer-logo"><img src={BrandLogo} alt="Brand logo Image" /></div>
        <div id="footer-search">
          <input type="text" name="search" id="footer-search-bar" /><button><img src={SearchIcon} alt="search" /></button>
        </div>
        <div className="media-container">
          <div><i className="fab fa-facebook"></i></div>
          <div><i className="fab fa-instagram"></i></div>
          <div><i className="fab fa-twitter"></i></div>
        </div>

        <div id="footer-support">
          <div>
            <b>Customer Support</b><br />
            Contact Us <br />
            Report An Issue <br />
          </div>
          <div>
            <b>About Us</b><br />
            About LinkIt <br />
            Connect for Marketing <br />
            Become a Seller <br />
          </div>
          <div>
            <b>Account</b><br />
            Cart <br />
            Manage Account <br />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
