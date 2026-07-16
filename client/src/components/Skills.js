import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaGithub, FaRobot } from "react-icons/fa";
import { SiCplusplus, SiJavascript, SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "React.js", icon: <FaReact color="#61DAFB" /> },
    { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
    { name: "Express.js", icon: <SiExpress color="#fff" /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
    { name: "JavaScript (ES6+)", icon: <SiJavascript color="#F7DF1E" /> },
    { name: "C++", icon: <SiCplusplus color="#00599C" /> },
    { name: "Python", icon: <FaPython color="#3776AB" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#38B2AC" /> },
    { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
    { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
    { name: "Git & GitHub", icon: <FaGithub color="#ffffff" /> },
    { name: "Generative AI", icon: <FaRobot color="#22c55e" /> },
  ];

  return (
    <section id="skills">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>

      <div className="skills-list">
        {skills.map((skill, i) => (
          <motion.div 
            className="skill-pill"
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.2)' }}
          >
            {skill.icon}
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        style={{ marginTop: '40px', textAlign: 'center', color: 'var(--text-secondary)' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p style={{ fontSize: '0.95rem' }}>
          <strong>Currently Exploring:</strong> TypeScript, Next.js, Docker, and Vector Databases (RAG)
        </p>
      </motion.div>
    </section>
  );
}

export default Skills;