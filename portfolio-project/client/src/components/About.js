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
        className="glass-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p>
          I am a passionate Full Stack Developer currently pursuing B.E. in Information Technology.
          I have strong knowledge of Data Structures & Algorithms and experience in building
          responsive web applications using the MERN stack.
        </p>
        <br />
        <p>
          I enjoy solving problems, learning new technologies, and building real-world projects.
          My interests include Web Development, Cloud Computing, and Cybersecurity.
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
        <p style={{marginTop: '10px'}}>Aug 2022 – Present</p>
      </motion.div>
    </section>
  );
}

export default About;