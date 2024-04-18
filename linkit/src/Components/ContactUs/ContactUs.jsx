/*
-----------------------------------------------------------
Group Name   : Group 4
Project Name : Linkit
Student Name : Viranshi Patel 
Student Id   : 8879482
Github       : viranshipatel238@gmail.com
Date         : 13th April 2024
------------------------------------------------------------
*/

import React from 'react';
import './ContactUs.css'; 

function ContactUs() {
  return (
    <main>
        <hr  className='m-0'/>
      <div className="contact">
        <h1>Contact Us</h1>
        <p>We are here to assist you with any questions or inquiries you may have. Feel free to contact us using
          the form below or visit our office in person.</p>
          <hr className='mb-2'/>
        <div className="contact-content">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93150.40037134346!2d-80.35646662635509!3d43.14757898517712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c65e278ea730f%3A0x353da5a5a466f9e0!2sBrantford%2C%20ON!5e0!3m2!1sen!2sca!4v1692095233021!5m2!1sen!2sca"
              width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="contact-form">
            <form>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="8" required></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ContactUs;
