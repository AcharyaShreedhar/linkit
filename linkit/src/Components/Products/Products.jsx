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
          <div className="computer1">
            <img
              src={MonitorImage1}
              alt="Victus 15 inch Gaming Laptop, FHD Display"
            />
            <div className="product-details">
              <div className="product-name">
                Victus 15 inch Gaming Laptop, FHD Display
              </div>
              <div className="product-price">$1290</div>
              <div className="product-ratings">
                <div className="pstar">⭐⭐⭐⭐</div>
                <div>4/5</div>
              </div>
            </div>
          </div>
          <div className="computer2">
            <img
              src={MonitorImage2}
              alt="SAMSUNG T350 Series 22-Inch FHD 1080p"
            />
            <div className="product-details">
              <div className="product-name">
                SAMSUNG T350 Series 22-Inch FHD 1080p
              </div>
              <div className="product-price">$128</div>
              <div className="product-tatings">
                <div className="pstar">⭐⭐⭐⭐</div>
                <div>4/5</div>
              </div>
            </div>
          </div>
          <div className="computer3">
            <img src={MonitorImage3} alt="ASUS Eye Care 23.8-Inch FHD 1080p" />
            <div className="product-details">
              <div className="product-name">
                ASUS Eye Care 23.8-Inch FHD 1080p
              </div>
              <div className="product-price">$110</div>
              <div className="product-ratings">
                <div className="pstar">⭐⭐⭐⭐</div>
                <div>4/5</div>
              </div>
            </div>
          </div>
          <div className="computer4">
            <img
              src={MonitorImage4}
              alt="ViewSonic VA2447-MH 24 Inch Full HD 1080p"
            />
            <div className="product-details">
              <div className="product-name">
                ViewSonic VA2447-MH 24 Inch Full HD 1080p
              </div>
              <div className="product-price">$116</div>
              <div className="product-ratings">
                <div className="pstar">⭐⭐⭐⭐</div>
                <div>4/5</div>
              </div>
            </div>
          </div>
          <div className="computer5">
            <img src={MonitorImage5} alt="SANSUI 27 FHD 1080p" />
            <div className="product-details">
              <div className="product-name">SANSUI 27 FHD 1080p</div>
              <div className="product-price">$99</div>
              <div className="product-ratings">
                <div className="pstar">⭐⭐⭐⭐</div>
                <div>4/5</div>
              </div>
            </div>
          </div>
          <div className="computer6">
            <img src={MonitorImage6} alt="KOORUI 24 Inch Computer Monitor" />
            <div className="product-details">
              <div className="product-name">
                KOORUI 24 Inch Computer Monitor
              </div>
              <div className="product-price">$135</div>
              <div className="product-ratings">
                <div className="pstar">⭐⭐⭐⭐</div>
                <div>4/5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Products;
