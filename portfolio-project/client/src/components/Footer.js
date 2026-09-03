import React from "react";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <p style={{color: 'var(--text-secondary)'}}>
        &copy; {year} Chinmay Patil. Designed with <FaHeart style={{color: '#ef4444', margin: '0 5px'}} />
      </p>
      <div className="footer-socials">
        <a href="https://github.com/ChinmayPatil00" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/chinmay-patil-b6a597292/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
