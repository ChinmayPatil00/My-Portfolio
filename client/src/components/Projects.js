import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const featuredProjects = [
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
    },
    {
      name: "Music Player",
      desc: "A modern, responsive web music player with a premium Neumorphic design and fully interactive playlist.",
      github: "https://github.com/ChinmayPatil00/Music-Palyer",
      live: "https://music-palyer-woad.vercel.app"
    },
    {
      name: "Portfolio Website",
      desc: "Full-stack MERN portfolio with dynamic content and email integration.",
      github: "https://github.com/ChinmayPatil00/My-Portfolio-Website",
      live: "https://my-portfolio-theta-sooty-14.vercel.app"
    }
  ];

  const liteProjects = [
    {
      name: "Taskify",
      desc: "Task management app with CRUD operations using MERN stack.",
      github: "https://github.com/ChinmayPatil00/Taskify"
    },
    {
      name: "Zerodha Clone",
      desc: "Responsive frontend clone with clean UI.",
      github: "https://github.com/ChinmayPatil00/Zerodha-Clone"
    },
    {
      name: "Amazon Clone",
      desc: "E-commerce UI clone with product layout.",
      github: "https://github.com/ChinmayPatil00/Amazon--Clone"
    },
    {
      name: "Currency Converter",
      desc: "Real-time currency converter using API.",
      github: "https://github.com/ChinmayPatil00/Currency-Converter"
    },
    {
      name: "Rock Paper Scissors",
      desc: "Interactive game with scoring logic.",
      github: "https://github.com/ChinmayPatil00/RPS-Game"
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

      <motion.h2
        style={{ marginTop: '60px' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Lite Projects
      </motion.h2>

      <div className="grid-3">
        {liteProjects.map((p, i) => (
          <motion.div 
            className="project-card solid-card" 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{display: 'flex', flexDirection: 'column'}}
          >
            <h4 style={{color: '#fff', marginBottom: '10px', fontSize: '1.1rem'}}>{p.name}</h4>
            <p style={{flexGrow: 1, fontSize: '0.9rem'}}>{p.desc}</p>
            <div style={{marginTop: '15px'}}>
              <a href={p.github} target="_blank" rel="noreferrer" className="card-link" style={{fontSize: '0.9rem'}}>
                <FaGithub /> Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;