import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaHtml5, FaPython, FaGithub } from "react-icons/fa";
import { SiCplusplus, SiJavascript, SiExpress, SiTailwindcss } from "react-icons/si";
import { BsRobot } from "react-icons/bs";

function Skills() {
  const skills = [
    { name: "React.js", icon: <FaReact color="#61DAFB" /> },
    { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
    { name: "Express.js", icon: <SiExpress color="#fff" /> },
    { name: "MongoDB", icon: <FaDatabase color="#47A248" /> },
    { name: "JavaScript (ES6+)", icon: <SiJavascript color="#F7DF1E" /> },
    { name: "C++", icon: <SiCplusplus color="#00599C" /> },
    { name: "Python", icon: <FaPython color="#3776AB" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
    { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
    { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
    { name: "Git & GitHub", icon: <FaGithub color="#fff" /> },
    { name: "Generative AI", icon: <BsRobot color="#22c55e" /> },
  ];

  return (
    <section id="skills">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{color: 'var(--accent-color)'}}>
        Skills
      </motion.h2>

      <div className="skills-list" style={{display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center', marginBottom: '30px'}}>
        {skills.map((skill, i) => (
          <motion.div className="skill-pill" key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }} whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.2)' }} style={{display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 20px', borderRadius: '30px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)'}}>
            {skill.icon}
            <span style={{color: '#fff'}}>{skill.name}</span>
          </motion.div>
        ))}
      </div>
      
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }} style={{textAlign: 'center', color: '#aaa', marginTop: '20px'}}>
        <p><strong style={{color: '#fff'}}>Currently Exploring:</strong> TypeScript, Next.js, Docker, and Vector Databases (RAG)</p>
      </motion.div>
    </section>
  );
}

export default Skills;