import React from 'react';
import './Popular.css'; 
import { FaHeart } from 'react-icons/fa';

const Popular = () => {
  const items = [
    { name: 'Chococcheese Cake', price: 2.5, imageUrl: 'cake.jpg' },
    { name: 'Pink Donuts', price: 2.8, imageUrl: 'cake2.jpg' },
    { name: 'Choco Cake', price: 2.9, imageUrl: 'cake.jpg' },
    { name: 'Sweet Cake', price: 2.3, imageUrl: 'cake2.jpg' },
    { name: 'Pink Cake', price: 2.1, imageUrl: 'cake2.jpg' },
    { name: 'Choco Cookies', price: 2.8, imageUrl: 'cake.jpg' },
    { name: 'Sweet Donuts', price: 1.8, imageUrl: 'cake2.jpg' },
    { name: 'Sweet Choco', price: 3.6, imageUrl: 'cake.jpg' },
  ];

return (
  <div className="popular">
    <h1>Popular Menu</h1>
    <h2>Most Popular Food</h2>
    <div className="popular-items">
      {items.map((item, index) => (
        <div className="popular-item" key={index}>
          <img src={item.imageUrl} alt={item.name} />
          <h3>{item.name}</h3>
          <p>${item.price.toFixed(2)}</p>
          <button className="add-to-cart-button">Add to cart</button>
          {/* <FaHeart color="#ff7f7f" size={20}/> */}
        
        </div>
        
      ))}
    </div>
    <button className="See-all-menu-button">See All Menu</button>
  </div>
);
};

export default Popular;

