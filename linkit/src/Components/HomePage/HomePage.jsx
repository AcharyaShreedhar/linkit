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

import React from "react";
import FlipFiveImage from "../../Images/flipfive.png";
import KeyboardImage from "../../Images/keyboard.png";
import HeadphoneImage from "../../Images/headphone.png";
import LaptopImage from "../../Images/laptop.png";
import SpeakerImage from "../../Images/speaker.png";
import MonitorImage from "../../Images/monitor.png";
import "./HomePage.css";

function HomePage() {
  return (
    <div>
      <div className="carousel-container">
        <div className="carousel">
          <div className="carousel-text">
            <div>
              <b>Bundle and save 15%</b>
            </div>
            <div>
              When you buy it with an Eligible
              <br />
              Laptop or CPU.
            </div>
            <h1>Shop Now</h1>
          </div>
          <img
            className="carousel-image"
            src={MonitorImage}
            alt="monitor Image"
          />
        </div>
      </div>

      <div className="home-products">
        <h1>Newest Offers and Innovations</h1>
        <div className="tabs">
          <h2>
            <u>Recommended</u>
          </h2>
          <h2>Mobile</h2>
          <h2>TV & AV</h2>
          <h2>Appliances</h2>
          <h2>Computing</h2>
          <h2>Memory</h2>
        </div>
        <div className="display-images">
          <div className="item1">
            <img src={FlipFiveImage} alt="Flip Five Image" />
            <div className="product-info">
              <h3>Flip Five Phone</h3>
              <p>
                Revolutionary smartphone with dual-camera setup, long-lasting
                battery, and edge-to-edge display.
              </p>
              <a className="btn btn-sm btn-primary">View Details</a>
            </div>
          </div>
          <div className="item2">
            <img src={KeyboardImage} alt="Keyboard Image" />
            <div className="product-info">
              <h3>Wireless Mechanical Keyboard</h3>
              <p>
                Ergonomic keyboard with customizable RGB lighting and tactile
                switches.
              </p>
              <a className="btn btn-sm btn-primary">View Details</a>
            </div>
          </div>
          <div className="item3">
            <img src={HeadphoneImage} alt="Headphone Image" />
            <div className="product-info">
              <h3>Noise-Canceling Headphones</h3>
              <p>
                Premium headphones with active noise cancellation and
                studio-quality sound.
              </p>
              <a className="btn btn-sm btn-primary">View Details</a>
            </div>
          </div>
          <div className="item4">
            <img src={LaptopImage} alt="Laptop Image" />
            <div className="product-info">
              <h3>Ultra-Slim Laptop</h3>
              <p>
                Powerful laptop with a sleek design, high-resolution display,
                and long battery life.
              </p>
              <a className="btn btn-sm btn-primary">View Details</a>
            </div>
          </div>
          <div className="item5">
            <img src={SpeakerImage} alt="Speaker Images" />
            <div className="product-info">
              <h3>Smart Home Speaker</h3>
              <p>
                Voice-controlled speaker with smart home integration and
                immersive sound experience.
              </p>
              <a className="btn btn-sm btn-primary">View Details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
