// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Faranchies from './components/Faranchies';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Product from './components/Product';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/Faranchies" element={<Faranchies />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/product" element={<Product />} />
        <Route path="/menu" element={<Menu />} />

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
