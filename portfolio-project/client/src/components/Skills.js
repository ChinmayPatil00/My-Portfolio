import { motion } from "framer-motion";
import { FaCode, FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaHtml5, FaPython } from "react-icons/fa";
import { SiCplusplus, SiJavascript } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "C++", icon: <SiCplusplus color="#00599C" /> },
    { name: "Python", icon: <FaPython color="#3776AB" /> },
    { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
    { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
    { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
    { name: "React", icon: <FaReact color="#61DAFB" /> },
    { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
    { name: "MongoDB", icon: <FaDatabase color="#47A248" /> },
    { name: "DSA", icon: <FaCode color="#22c55e" /> },
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
    </section>
  );
}

export default Skills;