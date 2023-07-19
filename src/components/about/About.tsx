import Portrait from "../graphics/Portrait";
import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="About" className="About">
      <div className="About-Container">
        <Portrait />
        <motion.div
          animate={{ scale: 1.2 }}
          transition={{ duration: 5, type: "spring", stiffness: 55 }}
          className="About-Body"
        >
          <h1>Brad Thompson</h1>
          <p>
            Whether writing code, building applications, or designing content,
            I'm passionate about using technology to turn dreams into reality.
          </p>
          <div className="About-Buttons">
            <a
              href="https://github.com/brthomiu"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/brthomiu/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
