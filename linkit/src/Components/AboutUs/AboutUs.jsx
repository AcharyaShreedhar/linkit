/*
-----------------------------------------------------------
Group Name   : Group 4
Project Name : Linkit
Student Name : Mistry Mayuree Rakeshbhai 
Student Id   : 8873677
Github       : mistrymayuree72@gmail.com 
Date         : 14th April 2024
------------------------------------------------------------
*/

import React from "react";
import AboutImage from "../../Images/aboutus.jpeg";
import MissionImage from "../../Images/mission.jpeg";
import BrandImage from "../../Images/brandlogo.png";
import "./AboutUs.css";

function AboutUs() {
  return (
    <main>
      <hr />
      <div className="about-content">
        <div className="about-image">
          <img src={AboutImage} alt="About Us Image" />
        </div>
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Welcome to LinkIt, your premier destination for cutting-edge
            computer solutions. Founded in 2023, we have been at the forefront
            of delivering high-quality technology products to customers
            worldwide. Our passion for innovation and commitment to excellence
            drive everything we do.
          </p>
        </div>
      </div>
      <hr />
      <div className="about-content">
        <div  className="about-text">
          <h2>Our Mission</h2>
          <p>
            At LinkIt, we believe that technology should be accessible to
            everyone. Our mission is to provide a seamless and enjoyable
            shopping experience for tech enthusiasts of all levels. We're
            dedicated to offering a diverse range of products that cater to the
            unique needs and preferences of our customers.
          </p>
        </div>
        <div className="about-image">
          <img src={MissionImage} alt="Mission Image" />
        </div>
      </div>
      <hr />
      <div className="about-content">
        <div  className="about-image">
          <img src={BrandImage} alt="Image of linkit" />
        </div>
        <div className="about-text">
          <h2>Why Choose Us?</h2>
          <p>
            Here at LinkIt, we stand out from the crowd for several reasons:
          </p>
          <ul>
            <li>
              Curated Selection: Our team of experts meticulously selects each
              product in our inventory, ensuring only the best quality and
              performance.
            </li>
            <li>
              Customer-Centric Approach: We prioritize your satisfaction. Our
              responsive customer support is always ready to assist you with any
              inquiries or concerns.
            </li>
            <li>
              Innovation and Trends: We stay up-to-date with the latest tech
              trends and innovations, offering you products that reflect the
              cutting edge of technology.
            </li>
            <li>
              Competitive Pricing: We believe that technology should be
              affordable. Our competitive pricing ensures you get great value
              for your money.
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="misc-content">
        <h2>Our Team</h2>
        <div className="misc-content">
          Our team is composed of passionate tech enthusiasts who share a common
          goal: to provide an exceptional shopping experience. From product
          sourcing to customer support, our team works tirelessly to make your
          journey with LinkIt smooth and enjoyable.
        </div>
      </div>
      <hr />
      <div className="misc-content">
        <h2>Connect with Us</h2>
        <p>
          Stay connected with LinkIt on social media for the latest updates,
          tech tips, and special offers:
        </p>
      </div>
      <hr />
      <div className="misc-content">
        <div className="social-media">
        <a>
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a>
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a>
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a>
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a>
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a>
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
        <p>Thank you for choosing LinkIt as your tech destination.</p>
        <p>
          We look forward to serving you and helping you make the most of your
          technology journey.
        </p>
      </div>
    </main>
  );
}

export default AboutUs;
