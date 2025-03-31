import React, { useState } from 'react';
import './NavbarStyle.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ShopyLogo from '../Assests/ShopyLogo.png'

const NavBar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility

  // Function to navigate to the home page
  const handleHomeClick = () => {
    navigate('/');
  };

  // Function to navigate to the login page
  const handleLoginClick = () => {
    navigate('/login');
  };

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='NavBaritems'>
     <div className='logo' onClick={handleHomeClick}>
        <img src={ShopyLogo} alt="Shopy Logo"  />
      </div>

      {/* Hamburger Icon (Mobile View) */}
      <div className='hamburger' onClick={toggleMenu}>
        <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
      </div>

      {/* Mobile or Desktop Navigation Menu */}
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/mensection">Men</Link></li>
        <li><Link to="/women">Women</Link></li>
        <li><Link to="/kids">Kids</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
      </ul>

      {/* The Login button is only visible when the menu is open on mobile */}
      <div className={`login-btn-container ${isMenuOpen ? 'show' : ''}`}>
        <button onClick={handleLoginClick}>Login</button>
      </div>
    </div>
  );
};

export default NavBar;
