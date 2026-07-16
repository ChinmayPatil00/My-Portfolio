import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p style={{color: 'var(--text-secondary)'}}>
        Built and designed by Chinmay Patil. All rights reserved.
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
