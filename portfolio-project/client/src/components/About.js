import { motion } from "framer-motion";

function About() {
  return (
    <section id="about">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ color: "var(--accent-color)" }}
      >
        About Me
      </motion.h2>

      <div className="about-container">
        <motion.div
          className="about-card solid-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <p>
            I am a passionate Full Stack Developer currently pursuing my B.E. in Information Technology at JSPM BSIOTR, Pune. With a strong foundation in Data Structures & Algorithms, I specialize in building responsive, high-performance web applications using the MERN stack.
          </p>
          <p style={{ marginTop: "18px" }}>
            I thrive on solving complex technical challenges and am deeply interested in Web Development, and Cloud Computing. I'm always eager to explore new technologies, continuously improve my skills, and build real-world projects that make a tangible impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;