import React from 'react';
import './HeroSection.css'; // Make sure the CSS file is named HeroSection.css and is in the same directory
import cupcakeImage from './cupcake.jpg'; // Replace with your actual image path
import { FaGooglePlay, FaApple } from 'react-icons/fa'; // Make sure react-icons is installed

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Fofood</h1>
        <h2>Super Delicious Food <br/> Special for You</h2>
        <p>Order your favorites food from anywhere <br/> and get delivery at your door.</p>
        <div className="hero-buttons">
          <button className="btn primary">Order Now</button>
          <button className="btn">Learn More</button>
        </div>
        <div className="hero-app">
          <p>For Better Service Download Our Mobile App Now</p>
          <div className="app-buttons">
            <button className="btn app"><FaGooglePlay /> Google Play</button>
            <button className="btn app"><FaApple /> App Store</button>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src={cupcakeImage} alt="Delicious Cupcake" />
      </div>
    </section>
  );
};

export default HeroSection;
