import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaFileDownload } from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="hero">
      <motion.div 
        className="hero-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>
          Hi, I'm <span>Chinmay Patil</span>
        </h1>
        <h2>Full Stack Developer</h2>
        <p>
          I specialize in building responsive, scalable, and dynamic web applications
          using the MERN stack. Passionate about problem-solving and modern design.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">
            <FaEnvelope /> Contact Me
          </a>
          <a href="/resume.pdf" download className="btn btn-secondary">
            <FaFileDownload /> Download Resume
          </a>
        </div>

        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="stat-item">🚀 10+ Projects Built</div>
          <div className="stat-item">🌐 Full-Stack MERN</div>
          <div className="stat-item">🤖 AI Applications</div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="hero-img-container"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img src="/profile.jpeg" alt="Chinmay Patil" className="hero-img" />
      </motion.div>
    </section>
  );
}

export default Hero;