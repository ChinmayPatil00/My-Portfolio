import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Codec Technologies Pvt. Ltd.",
      period: "Feb 2026 – Mar 2026",
      points: [
        "Developed a full-stack portfolio website",
        "Implemented contact form with Nodemailer",
        "Designed responsive UI",
        "Worked with backend APIs",
      ],
    },
  ];

  return (
    <section id="experience">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ color: "var(--accent-color)" }}
      >
        Experience
      </motion.h2>

      <div className="experience-container">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-card solid-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="experience-header">
              <div className="experience-icon-badge">
                <FaBriefcase className="experience-icon" />
              </div>
              <div className="experience-title-group">
                <h3 className="experience-role">{exp.role}</h3>
                <span className="experience-company">{exp.company}</span>
              </div>
            </div>

            <p className="experience-period">{exp.period}</p>

            <ul className="experience-points">
              {exp.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;