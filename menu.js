import React from 'react';
import './Menu.css'; // Make sure to link the correct CSS file

const menuItems = [
  { name: 'Cakes', count: 3, imageUrl: '/cake.jpg' },
  { name: 'Cupcakes', count: 3, imageUrl: '/cupcake.jpg' },
  { name: 'Donuts', count: 2, imageUrl: '/delicious.jpg' },
  { name: 'Cookies', count: 1, imageUrl: '/cookie.jpg' },
  { name: 'Macarons', count: 0, imageUrl: '/colorful-macarons.jpg' },
  { name: 'Drinks', count: 0, imageUrl: '/juice.jpg' },
];

const Menu = () => {
  return (
    <div className="menu-section">
        <h1>Explore</h1>
      <h2>Our Delicious Menu</h2>
      <div className="menu-items">
        {menuItems.map(item => (
          <div className="menu-item" key={item.name}>
            <img src={item.imageUrl} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.count} Menu</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
