import React from "react";
import { motion } from "framer-motion";

function Experience() {
  return (
    <section id="education">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{color: 'var(--accent-color)'}}>
        Education
      </motion.h2>

      <div className="grid-1">
        <motion.div className="experience-item solid-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
          <h3 style={{color: '#fff', fontSize: '1.3rem', marginBottom: '10px'}}>JSPM BSIOTR, Pune</h3>
          <p style={{color: '#4facfe', fontWeight: '500', marginBottom: '15px'}}>Bachelor of Engineering (Information Technology)</p>
          <p style={{color: '#aaa'}}>Aug 2023 - Present</p>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;