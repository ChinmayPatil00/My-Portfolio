import React from "react";
import { motion } from "framer-motion";

function Education() {
  return (
    <section id="education">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ color: "var(--accent-color)" }}
      >
        Education
      </motion.h2>

      <div className="education-container">
        <motion.div
          className="education-card solid-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="education-institute">JSPM BSIOTR, Pune</h3>
          <p className="education-degree">
            Bachelor of Engineering (Information Technology)
          </p>
          <p className="education-period">August 2023 – August 2027</p>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
