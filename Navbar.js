import React, { useState } from 'react';
import './navbar.css'; // Make sure to link the correct CSS file

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="/" className="logo">Fofood</a>
        <nav className="navbar-navigation">
          <a href="/" className="nav-link">Home</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/menu" className="nav-link">Menu</a>
          <a href="/blog" className="nav-link">Blog</a>
          <div className="navbar-dropdown">
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="navbar-dropbtn">Pages</button>
            {dropdownOpen && (
              <div className="dropdown-content">
                <a href="/detail-menu" className="dropdown-item">Detail Menu</a>
                <a href="/detail-blog" className="dropdown-item">Detail Blog</a>
                <a href="/empty-state" className="dropdown-item">Empty State</a>
              </div>
            )}
          </div>
          <a href="/favorites" className="nav-link">My Favorites</a>
          <a href="/cart" className="nav-link">My Cart</a>
          <a href="/contact" className="nav-link contact-us">Contact us</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
