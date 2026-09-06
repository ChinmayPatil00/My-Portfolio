import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      name: "SpaceForge 3D",
      desc: "A browser-based 3D spatial CAD platform featuring 2D-to-3D architectural drafting, PBR material rendering, 3D printing slicing verification, and automated BOM cost estimation.",
      github: "https://github.com/ChinmayPatil00/SpaceForge-3D",
      demo: "https://space-forge-3-d.vercel.app/"
    },
    {
      name: "Auction Engine",
      desc: "Real-time MERN marketplace for creators featuring zero-latency WebSockets, AI automation, and a secure transaction ledger.",
      github: "https://github.com/ChinmayPatil00/CreatorFlow",
      demo: "https://auction-engine-pi.vercel.app/"
    },
    {
      name: "HoneyBot",
      desc: "A decoupled, cloud-based threat intelligence system that uses a decoy SSH server to intercept cyberattacks, capture malicious credentials, and visualize hacker origins in real-time on a global map.",
      github: "#",
      demo: "https://honey-bot.vercel.app/"
    },
    {
      name: "WanderX",
      desc: "An intelligent adventure discovery and precision trip-planning platform featuring AI budget matching, interactive Leaflet route maps, elevation profiles, and customizable day-by-day itineraries.",
      github: "https://github.com/ChinmayPatil00/CyberDash",
      demo: "https://cyber-dash-omega.vercel.app/"
    },
    {
      name: "NexusATS",
      desc: "A job aggregator and Applicant Tracking System (ATS) designed to streamline the hiring and application process.",
      github: "#",
      demo: "https://nexus-ats-web.vercel.app/"
    },
    {
      name: "TalentMatrix AI",
      desc: "An AI-powered app that parses PDF resumes using the Gemini API to instantly generate skill gaps and a 3-month career roadmap.",
      github: "#",
      demo: "https://talentmatrix-ai.vercel.app/"
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
              <a 
                href={p.github} 
                onClick={(e) => { if(p.github === "#") { e.preventDefault(); alert("GitHub code repository coming soon!"); } }} 
                target="_blank" 
                rel="noreferrer" 
                className="card-link" 
                style={{color: 'var(--accent-color)', display: 'flex', alignItems: 'center', gap: '5px', textDecoration: 'none'}}
              >
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
