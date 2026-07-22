import React from "react";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

function Certifications() {
  const certs = [
    {
      title: "Generative AI Content Creation",
      issuer: "Coursera / Adobe",
      date: "March 2026",
      link: "https://coursera.org/verify/YYP7OY59HPN5"
    },
    {
      title: "Gen AI 101",
      issuer: "IT-ITeS SSC Nasscom",
      date: "March 2026",
      link: "/certificates/gen-ai-101.pdf"
    },
    {
      title: "Digital Edge 101",
      issuer: "IT-ITeS SSC Nasscom",
      date: "March 2026",
      link: "/certificates/digital-edge-101.pdf"
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      issuer: "Oracle",
      date: "September 2025",
      link: "/certificates/oracle-cloud-infrastructure.pdf"
    },
    {
      title: "Cybersecurity Analyst Job Simulation",
      issuer: "Forage",
      date: "August 2025",
      link: "/certificates/cybersecurity-analyst.pdf"
    },
    {
      title: "Data Visualisation: Empowering Business with Effective Insights",
      issuer: "Forage",
      date: "August 2025",
      link: "/certificates/data-visualisation.jpeg"
    }
  ];

  return (
    <section id="certifications">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Achievements
      </motion.h2>

      <div className="grid-2">
        {certs.map((cert, index) => (
          <motion.div
            key={index}
            className="certification-item solid-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div style={{display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px'}}>
              <div style={{background: 'var(--accent-color)', padding: '15px', borderRadius: '12px', color: '#111', fontSize: '1.5rem'}}>
                <FaCertificate />
              </div>
              <div>
                <h3 style={{color: '#fff'}}>{cert.title}</h3>
                <p style={{color: 'var(--accent-color)', fontWeight: '500'}}>{cert.issuer}</p>
              </div>
            </div>
            
            <p style={{marginBottom: '15px'}}>{cert.date}</p>
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="card-link" style={{color: 'var(--accent-color)'}}>
              View Credential
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;