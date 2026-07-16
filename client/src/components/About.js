import { motion } from "framer-motion";

function About() {
  return (
    <section id="about">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="solid-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p>
          I am a passionate Full Stack Developer currently pursuing my B.E. in Information Technology at JSPM BSIOTR, Pune. 
          With a strong foundation in Data Structures & Algorithms, I specialize in building responsive, high-performance 
          web applications using the MERN stack.
        </p>
        <br />
        <p>
          I thrive on solving complex technical challenges and am deeply interested in Web Development, 
          and Cloud Computing. I'm always eager to explore new technologies, continuously 
          improve my skills, and build real-world projects that make a tangible impact.
        </p>
      </motion.div>

      <motion.h2 
        style={{ marginTop: "60px" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Education
      </motion.h2>

      <motion.div 
        className="about-content solid-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h3 style={{color: '#fff', marginBottom: '5px'}}>JSPM BSIOTR, Pune</h3>
        <p style={{color: '#4facfe', fontWeight: '500'}}>
          Bachelor of Engineering (Information Technology)
        </p>
        <p style={{marginTop: '10px'}}>Batch of '27</p>
      </motion.div>
    </section>
  );
}

export default About;