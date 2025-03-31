import React from 'react';
import './Footer.css';  
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
     <div className='footer-content'>
     <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/aboutus"><li>About Us</li></Link> 
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Shop Now</h4>
          <ul>
          <Link to="/mensection"><li>Men</li></Link>
          <Link to="/women"><li>Women</li></Link>
          <Link to="/kid"><li>Kids</li></Link>
          </ul>
        </div><div className="footer-section">
          <h4>Reach Us</h4>
          <ul>
            <li>Home</li>
           <Link to="/aboutus"><li>About Us</li></Link> 
            <li>Contact Us</li>
          </ul>
        </div>
     </div>
    </footer>
  );
};

export default Footer;
