/*
-----------------------------------------------------------
Group Name   : Group 4
Project Name : Linkit
Student Name : Shree Dhar Acharya 
Student Id   : 8899288
Github User  : AcharyaShreedhar
Date         : 12th April 2024
------------------------------------------------------------
*/
import React from "react";
import MonitorImage1 from "../../Images/Computers/l1-1.jpg";
import MonitorImage2 from "../../Images/Computers/m1-1.jpg";
import MonitorImage3 from "../../Images/Computers/m2-1.jpg";
import MonitorImage4 from "../../Images/Computers/m3-1.jpg";
import MonitorImage5 from "../../Images/Computers/m4-1.jpg";
import MonitorImage6 from "../../Images/Computers/m5-1.jpg";
import TVImage from "../../Images/tv.jpeg";
import KindleImage from "../../Images/kindle.jpeg";
import GraphicsCardImage from "../../Images/graphics-card.jpg";
import "./Products.css";

function Products() {
  return (
    <main>
      <div className="banner-container">
        <div>
          <span>
            Summer Sale is on <br />
            UPTO 50% OFF
          </span>
        </div>
      </div>
      <div className="products-container">
        <h1>Our Products</h1>
        <div className="product-type">
          <h2>Explore</h2>
          <h2 className="active">Monitor</h2>
          <h2>Mobile</h2>
          <h2>Headphones</h2>
        </div>
        <hr />
        <div className="product-catalog">
          <div className="computer">
            <img
              src={MonitorImage1}
              alt="Victus 15 inch Gaming Laptop, FHD Display"
            />
            <div className="product-details">
              <div className="details-item">
                <h3>Victus 15 inch Gaming Laptop</h3>
                <p>FHD Display</p>
              </div>
              <div className="details-item">
                <div className="product-price">$1290</div>
                <div className="product-ratings">
                  <span className="stars">⭐⭐⭐⭐</span>
                  <span>4/5</span>
                </div>
              </div>
              <div className="details-item">
                <button className="btn btn-deal">Limited-time deal</button>
                <button className="btn btn-cart">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="computer">
            <img
              src={MonitorImage2}
              alt="SAMSUNG T350 Series 22-Inch FHD 1080p"
            />
            <div className="product-details">
              <div className="details-item">
                <h3>SAMSUNG T350 Series 22-Inch Monitor</h3>
                <p>FHD 1080p</p>
              </div>
              <div className="details-item">
                <div className="product-price">$128</div>
                <div className="product-ratings">
                  <span className="stars">⭐⭐⭐⭐</span>
                  <span>4/5</span>
                </div>
              </div>
              <div className="details-item">
                <button className="btn btn-deal">Up to 58% off</button>
                <button className="btn btn-cart">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="computer">
            <img src={MonitorImage3} alt="ASUS Eye Care 23.8-Inch FHD 1080p" />
            <div className="product-details">
              <div className="details-item">
                <h3>ASUS Eye Care 23.8-Inch Monitor</h3>
                <p>FHD 1080p</p>
              </div>
              <div className="details-item">
                <div className="product-price">$110</div>
                <div className="product-ratings">
                  <span className="stars">⭐⭐⭐⭐⭐</span>
                  <span>5/5</span>
                </div>
              </div>
              <div className="details-item">
                <button className="btn btn-deal">Limited-time deal</button>
                <button className="btn btn-cart">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="computer">
            <img
              src={MonitorImage4}
              alt="ViewSonic VA2447-MH 24 Inch Full HD 1080p"
            />
            <div className="product-details">
              <div className="details-item">
                <h3>ViewSonic VA2447-MH 24 Inch Monitor</h3>
                <p>Full HD 1080p</p>
              </div>
              <div className="details-item">
                <div className="product-price">$116</div>
                <div className="product-ratings">
                  <span className="stars">⭐⭐⭐⭐⭐</span>
                  <span>5/5</span>
                </div>
              </div>
              <div className="details-item">
                <button className="btn btn-deal">Limited-time deal</button>
                <button className="btn btn-cart">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="computer">
            <img src={MonitorImage5} alt="SANSUI 27 FHD 1080p" />
            <div className="product-details">
              <div className="details-item">
                <h3>SANSUI 27-Inch Monitor</h3>
                <p>FHD 1080p</p>
              </div>
              <div className="details-item">
                <div className="product-price">$99</div>
                <div className="product-ratings">
                  <span className="stars">⭐⭐⭐⭐</span>
                  <span>4/5</span>
                </div>
              </div>
              <div className="details-item">
                <button className="btn btn-deal">Limited-time deal</button>
                <button className="btn btn-cart">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="computer">
            <img src={MonitorImage6} alt="KOORUI 24 Inch Computer Monitor" />
            <div className="product-details">
              <div className="details-item">
                <h3>KOORUI 24 Inch Computer Monitor</h3>
                <p>Full HD Display</p>
              </div>
              <div className="details-item">
                <div className="product-price">$135</div>
                <div className="product-ratings">
                  <span className="stars">⭐⭐⭐⭐</span>
                  <span>4/5</span>
                </div>
              </div>
              <div className="details-item">
                <button className="btn btn-deal">Up to 35% off</button>
                <button className="btn btn-cart">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="computer">
            <img src={TVImage} alt="Samsung 65 inch 4K Smart TV" />
            <div className="product-details">
              <div className="details-item">
                <h3>Samsung 65" 4K Smart TV</h3>
                <p>Full Hd Display</p>
              </div>
              <div className="details-item">
                <div className="product-price">$999.99</div>
                <div className="product-ratings">
                  <span className="stars">⭐⭐⭐⭐</span>
                  <span>4/5</span>
                </div>
              </div>
              <div className="details-item">
                <button className="btn btn-deal">Limited-time deal</button>
                <button className="btn btn-cart">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="computer">
            <img src={KindleImage} alt="Amazon Kindle Paperwhite" />
            <div className="product-details">
              <div className="details-item">
                <h3>Amazon Kindle Paperwhite</h3>
                <p> HD, Waterproof Design.</p>
              </div>
              <div className="details-item">
                <div className="product-price">$129.99</div>
                <div className="product-ratings">
                  <span className="stars">⭐⭐⭐⭐⭐</span>
                  <span>5/5</span>
                </div>
              </div>
              <div className="details-item">
                <button className="btn btn-deal">Limited-time deal</button>
                <button className="btn btn-cart">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="computer">
            <img
              src={GraphicsCardImage}
              alt="ASUS ROG Strix GeForce RTX 3080 Graphics Card"
            />
            <div className="product-details">
              <div className="details-item">
                <h3>Graphics Card</h3>
                <p> ASUS ROG Strix GeForce RTX 3080</p>
              </div>
              <div className="details-item">
                <div className="product-price">$1,199.99</div>
                <div className="product-ratings">
                  <span className="stars">⭐⭐⭐⭐⭐</span>
                  <span>5/5</span>
                </div>
              </div>
              <div className="details-item">
                <button className="btn btn-deal">Limited-time deal</button>
                <button className="btn btn-cart">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Products;
