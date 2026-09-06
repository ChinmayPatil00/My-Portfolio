import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Automatically close mobile menu if screen expands beyond 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" }
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
      <motion.nav 
        className="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <a href="#home" className="nav-logo" onClick={handleLinkClick}>
          <h2>Chinmay<span style={{ color: 'var(--accent-color)' }}>.</span></h2>
        </a>

        {/* Desktop Nav Links */}
        <ul className="nav-links">
          {navItems.map((item, idx) => (
            <li key={idx}><a href={item.href}>{item.label}</a></li>
          ))}
        </ul>

        {/* Desktop Socials */}
        <div className="nav-socials desktop-socials">
          <a href="https://github.com/ChinmayPatil00" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/chinmay-patil-b6a597292/" rel="noopener noreferrer" target="_blank" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button 
          className="mobile-toggle-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
          >
            <ul className="mobile-nav-links">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} onClick={handleLinkClick}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mobile-socials">
              <a href="https://github.com/ChinmayPatil00" target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/chinmay-patil-b6a597292/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;