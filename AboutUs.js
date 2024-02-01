import React from 'react';
import './AboutUs.css'; // Ensure you have an AboutUs.css file for styles

const AboutUs = () => {
  return (
    <div className="about-us-section">
      <div className="images-container">
        {/* Assuming you have these images in your public folder or assets */}
        <img src="chef.jpg" alt="Chef" className="about-image"/>
        <img src="girl.jpg" alt="Child with Donuts" className="about-image"/>
      </div>
      <div className="about-content">
        <h2>About us</h2>
        <h1>Welcome to Fofood</h1>
        <p>Welcome to Fofood, where we’re committed to combating food deserts. Our goal is to ensure everyone has access to fresh, healthy, and affordable food, regardless of their location. Join us in creating a brighter future for all.</p>
        <button className="read-more-button">Read More</button>
      </div>
    </div>
  );
}

export default AboutUs;
