import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      name: "Auction Engine",
      desc: "Real-time MERN marketplace for creators featuring zero-latency WebSockets, AI automation, and a secure transaction ledger.",
      github: "https://github.com/ChinmayPatil00/CreatorFlow"
    },
    {
      name: "NexusATS",
      desc: "A job aggregator and Applicant Tracking System (ATS) designed to streamline the hiring and application process.",
      github: "#",
      demo: "#"
    },
    {
      name: "HoneyBot",
      desc: "A decoupled, cloud-based threat intelligence system that uses a decoy SSH server to intercept cyberattacks, capture malicious credentials, and visualize hacker origins in real-time on a global map.",
      github: "#",
      demo: "#"
    },
    {
      name: "TalentMatrix AI",
      desc: "An AI-powered app that parses PDF resumes using the Gemini API to instantly generate skill gaps and a 3-month career roadmap.",
      github: "#",
      demo: "#"
    },
    {
      name: "CyberDash",
      desc: "A comprehensive cybersecurity dashboard showcasing network analytics, threat intelligence feeds, and real-time security alerts.",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        Projects
      </motion.h2>

      <div className="grid-3">
        {projects.map((p, i) => (
          <motion.div 
            className="project-card solid-card" 
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            style={{display: 'flex', flexDirection: 'column'}}
          >
            <h3 style={{color: '#fff', marginBottom: '10px'}}>{p.name}</h3>
            <p style={{flexGrow: 1}}>{p.desc}</p>
            <div style={{marginTop: 'auto', paddingTop: '20px', display: 'flex', gap: '15px'}}>
              <a href={p.github} target="_blank" rel="noreferrer" className="card-link" style={{color: 'var(--accent-color)', display: 'flex', alignItems: 'center', gap: '5px', textDecoration: 'none'}}>
                <FaGithub /> Code
              </a>
              {p.demo && (
                <a href={p.demo} onClick={(e) => { if(p.demo === "#") { e.preventDefault(); alert("Live Demo link coming soon!"); } }} target="_blank" rel="noreferrer" className="card-link" style={{color: 'var(--accent-color)', display: 'flex', alignItems: 'center', gap: '5px', textDecoration: 'none'}}>
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
