import Portrait from "../graphics/Portrait";
import "./About.css";
import { motion } from "framer-motion";
import resume from "../../assets/BradThompsonResume.pdf"


const About = () => {
  return (
    <div className="About">
      <div className="About-Container">
        <Portrait />
        <motion.div
          animate={{ scale: 1.2 }}
          transition={{ duration: 5, type: "spring", stiffness: 55 }}
          className="About-Body"
        >
          <h1>Brad Thompson</h1>
          <p>
            This is the about me section, it is going to have all of the about
            information contained on the page.
          </p>
          <div className="About-Buttons">
            <a
              href="https://github.com/brthomiu"
              target="_blank"
              rel="noreferrer"
            >
              <button>GitHub</button>
            </a>
            <a
              href="https://www.linkedin.com/in/brthomiu/"
              target="_blank"
              rel="noreferrer"
            >
              <button>LinkedIn</button>
            </a>
            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
            >
              <button>Resume</button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
