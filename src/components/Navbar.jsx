import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">HAFIZH PORTOFOLIO</h1>
        
        <div 
          className={`navbar-toggle ${isMenuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>About</Link></li>
          <li><Link to="/experience" onClick={() => setIsMenuOpen(false)}>Experiences</Link></li>
          <li><Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
          <li><Link to="/certificates" onClick={() => setIsMenuOpen(false)}>Certificates</Link></li>
          <li><Link to="/skills" onClick={() => setIsMenuOpen(false)}>Skills</Link></li>
          <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
