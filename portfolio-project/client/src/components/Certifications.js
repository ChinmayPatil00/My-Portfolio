import React from "react";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

function Certifications() {
  const certs = [
    { title: "Generative AI Content Creation", issuer: "Coursera / Adobe", date: "March 2026", link: "#" },
    { title: "Gen AI 101", issuer: "IT-ITeS SSC Nasscom", date: "March 2026", link: "#" },
    { title: "Digital Edge 101", issuer: "IT-ITeS SSC Nasscom", date: "March 2026", link: "#" },
    { title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional", issuer: "Oracle", date: "September 2025", link: "#" },
    { title: "Cybersecurity Analyst Job Simulation", issuer: "Forage", date: "August 2025", link: "#" },
    { title: "Data Visualisation: Empowering Business with Effective Insights", issuer: "Forage", date: "August 2025", link: "#" }
  ];

  return (
    <section id="certifications">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{color: 'var(--accent-color)'}}>
        Achievements
      </motion.h2>

      <div className="grid-3">
        {certs.map((cert, index) => (
          <motion.div key={index} className="certification-item solid-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
            <div style={{display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '15px'}}>
              <div style={{background: 'var(--accent-color)', padding: '15px', borderRadius: '12px', color: '#111', fontSize: '1.5rem'}}>
                <FaCertificate />
              </div>
              <div>
                <h3 style={{color: '#fff', fontSize: '1.1rem', marginBottom: '5px'}}>{cert.title}</h3>
                <p style={{color: 'var(--accent-color)', fontWeight: '500', fontSize: '0.9rem'}}>{cert.issuer}</p>
              </div>
            </div>
            <p style={{marginBottom: '15px', color: '#aaa', fontSize: '0.9rem'}}>{cert.date}</p>
            <a href={cert.link} onClick={(e) => { if(cert.link === "#") { e.preventDefault(); alert("Credential link coming soon!"); } }} target="_blank" rel="noopener noreferrer" className="card-link" style={{color: 'var(--accent-color)', fontWeight: 'bold', textDecoration: 'none'}}>
              View Credential
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
