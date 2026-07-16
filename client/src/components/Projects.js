import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      name: "Portfolio Website",
      desc: "Full-stack MERN portfolio with dynamic content and email integration.",
      github: "https://github.com/ChinmayPatil00/My-Portfolio-Website"
    },
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
      name: "Music Player",
      desc: "Web-based music player with controls.",
      github: "https://github.com/ChinmayPatil00/Music-Palyer"
    },
    {
      name: "Currency Converter",
      desc: "Real-time currency converter using API.",
      github: "https://github.com/ChinmayPatil00/Currency-Converter"
    },
    {
      name: "Rock Paper Scissors Game",
      desc: "Interactive game with scoring logic.",
      github: "https://github.com/ChinmayPatil00/RPS-Game"
    },
  ];

  return (
    <section id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <div className="grid-3">
        {projects.map((p, i) => (
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
            <p style={{flexGrow: 1}}>{p.desc}</p>
            <div style={{marginTop: '20px'}}>
              <a href={p.github} target="_blank" rel="noreferrer" className="card-link">
                <FaGithub /> View Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;