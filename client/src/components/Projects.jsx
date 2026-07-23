import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const featuredProjects = [
    {
      name: "CreatorFlow",
      desc: "An operational dashboard for digital creators featuring a Kanban scheduling board and an AI-integrated Rich Text Editor to automate content pipelines.",
      github: "https://github.com/ChinmayPatil00/CreatorFlow",
      live: "https://creator-flow-xi.vercel.app"
    },
    {
      name: "TalentMatrix AI",
      desc: "An AI-powered app that parses PDF resumes using the Gemini API to instantly generate skill gaps and a 3-month career roadmap.",
      github: "https://github.com/ChinmayPatil00/TalentMatrix-AI",
      live: "https://talentmatrix-ai.vercel.app"
    },
    {
      name: "HoneyBot",
      desc: "A decoupled, cloud-based threat intelligence system that uses a decoy SSH server to intercept cyberattacks, capture malicious credentials, and visualize hacker origins in real-time on a global map.",
      github: "https://github.com/ChinmayPatil00/HoneyBot",
      live: "https://honey-pot-taupe.vercel.app"
    }
  ];



  return (
    <section id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Featured Projects
      </motion.h2>

      <div className="grid-2">
        {featuredProjects.map((p, i) => (
          <motion.div 
            className="project-card solid-card" 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{display: 'flex', flexDirection: 'column'}}
          >
            <h3 style={{color: '#fff', marginBottom: '10px'}}>{p.name}</h3>
            <p style={{flexGrow: 1, lineHeight: '1.6'}}>{p.desc}</p>
            <div style={{marginTop: '20px', display: 'flex', gap: '15px'}}>
              <a href={p.github} target="_blank" rel="noreferrer" className="card-link">
                <FaGithub /> Code
              </a>
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" className="card-link" style={{color: 'var(--accent-color)'}}>
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