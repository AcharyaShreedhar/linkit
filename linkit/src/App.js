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

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import AboutUs from "./Components/About Us/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Core/Footer/Footer";
import Header from "./Components/Core/Header/Header";
import Hero from "./Components/Core/Hero/Hero";
import Navbar from "./Components/Core/Navbar/Navbar";
import HomePage from "./Components/HomePage/HomePage";
import Login from "./Components/Login/Login";
import Products from "./Components/Products/Products";
import Register from "./Components/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="app-style">
        <Header />
        <Navbar />
        <Hero />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
