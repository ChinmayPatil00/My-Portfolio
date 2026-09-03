import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

function Experience() {
  return (
    <section id="experience">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>

      <div className="grid-2">
        <motion.div 
          className="experience-item solid-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px'}}>
            <div style={{background: 'var(--accent-color)', padding: '15px', borderRadius: '12px', color: '#111', fontSize: '1.5rem'}}>
              <FaBriefcase />
            </div>
            <div>
              <h3 style={{color: '#fff'}}>Full Stack Developer Intern</h3>
              <p style={{color: '#4facfe', fontWeight: '500'}}>Codec Technologies Pvt. Ltd.</p>
            </div>
          </div>
          
          <p style={{marginBottom: '15px'}}>Feb 2026 – Mar 2026</p>

          <ul style={{paddingLeft: '20px', color: 'var(--text-secondary)', lineHeight: '1.7'}}>
            <li>Developed a full-stack portfolio website</li>
            <li>Implemented contact form with Nodemailer</li>
            <li>Designed responsive UI</li>
            <li>Worked with backend APIs</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;