/*
-----------------------------------------------------------
Group Name   : Group 4
Project Name : Linkit
Student Name : Viranshi Patel 
Student Id   : 8879482
Github       : viranshipatel238@gmail.com
Date         : 11th April 2024
------------------------------------------------------------
*/
import React from "react";
import { Link } from "react-router-dom";
import Arrow from "../../../Images/arrow.png";
import "./Hero.css";

function Hero() {
  return (
    <div className="intro-container">
      <div className="intro-text">
        <div>
          Your One Stop
          <br />
          Computer
          <br />
          Solutions
        </div>
        <Link to="/products" className="intro-button">
          <div>Shop Now</div>
          <div className="arrow-container animate">
            <img className="arrow-button" src={Arrow} alt="arrow image" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
