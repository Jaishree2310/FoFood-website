import React from 'react';
import './Testimonial.css';
// import profilePic from 'profilePic.jpg'; 
import { FaStar } from 'react-icons/fa'; 

const Testimonial = () => {
  return (
    <div className="testimonial-container">
    <h1> Testimonial</h1>
      <h2>What People Say</h2>
      <div className="testimonial-card">
        {/* <img src={profilePic} alt="Profile" className="profilePic" /> */}
        <img src={process.env.PUBLIC_URL + '/profilePic.jpg'} alt="Profile" className="profilePic" />

        <p className="testimonial-title">It's very delicious!</p>
        <div className="stars">
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
        </div>
        <p className="testimonial-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet venenatis a vel id tincidunt volutpat faucibus scelerisque.<br/> Morbi eget turpis aliquet nunc, varius aliquam ipsum.
        </p>
        <p className="testimonial-author">Trojan Fox</p>
      </div>
      {/* Add slider dots or other navigation if needed */}
      <div className="testimonial-navigation">
        <span className="nav-dot active"></span>
        <span className="nav-dot"></span>
      </div>
    </div>
  );
};

export default Testimonial;
