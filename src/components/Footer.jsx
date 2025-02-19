import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-socials">
          <a href="https://github.com/hafizharp" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/maulanahafizh/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/hfzh_arp/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="mailto:maulanahafizh234@gmail.com" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Maulana Hafizh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
