import { motion } from "framer-motion";

function Education() {
  return (
    <section id="education">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.h2>

      <motion.div 
        className="about-content solid-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 style={{color: '#fff', marginBottom: '5px'}}>JSPM BSIOTR, Pune</h3>
        <p style={{color: '#4facfe', fontWeight: '500'}}>
          Bachelor of Engineering (Information Technology)
        </p>
        <p style={{marginTop: '10px'}}>Aug 2022 - Present</p>
      </motion.div>
    </section>
  );
}

export default Education;
