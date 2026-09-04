import React from "react";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

function Certifications() {
  const certs = [
    { 
      title: "Generative AI Content Creation", 
      issuer: "Coursera / Adobe", 
      date: "March 2026", 
      link: "/certificates/gen-ai-content-creation.pdf" 
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
      link: "/certificates/oracle-gen-ai.pdf" 
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
      link: "/certificates/data-visualisation.pdf" 
    }
  ];

  return (
    <section id="certifications">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, amount: 0.3 }} 
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} 
        style={{ color: 'var(--accent-color)' }}
      >
        Achievements
      </motion.h2>

      <div className="grid-3">
        {certs.map((cert, index) => (
          <motion.div 
            key={index} 
            className="certification-item solid-card" 
            initial={{ opacity: 0, y: 25 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, amount: 0.2 }} 
            transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="certification-header">
              <div className="certification-badge">
                <FaCertificate />
              </div>
              <div className="certification-info">
                <h3 className="certification-title">{cert.title}</h3>
                <p className="certification-issuer">{cert.issuer}</p>
              </div>
            </div>
            <div className="certification-bottom">
              <p className="certification-date">{cert.date}</p>
              <a 
                href={cert.link} 
                onClick={(e) => { 
                  if(cert.link === "#") { 
                    e.preventDefault(); 
                    alert("Credential link coming soon!"); 
                  } 
                }} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="card-link"
              >
                View Credential
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
