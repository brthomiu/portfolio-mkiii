import Portrait from "../graphics/Portrait";
import "./About.css";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BiSolidDownArrow } from "react-icons/bi";

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

          <div className="About-Typewriter-Container">
            <div className="About-Typewriter-Screenreader">
              <p>Full Stack Web Developer</p>
            </div>
            <div className="About-Typewriter" aria-hidden="true">
              <Typewriter
                options={{
                  loop: true,
                  cursor: " ",
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Full Stack Web")
                    .pauseFor(3500)
                    .deleteAll()
                    .pauseFor(150)
                    .typeString("TypeScript")
                    .pauseFor(2500)
                    .deleteAll()
                    .pauseFor(150)
                    .typeString("React")
                    .pauseFor(2500)
                    .deleteAll()
                    .pauseFor(150)
                    .typeString("NodeJS")
                    .pauseFor(2500)
                    .deleteAll()
                    .pauseFor(150)
                    .typeString("WordPress")
                    .pauseFor(2500)
                    .deleteAll()
                    .pauseFor(150)
                    .typeString("HTML")
                    .pauseFor(2500)
                    .deleteAll()
                    .pauseFor(150)
                    .typeString("CSS")
                    .pauseFor(2500)
                    .deleteAll()
                    .pauseFor(150)
                    .typeString("UI/UX")
                    .pauseFor(2500)
                    .deleteAll()
                    .pauseFor(150)
                    .typeString("Front End")
                    .pauseFor(2500)
                    .deleteAll()
                    .pauseFor(150)
                    .typeString("Back End")
                    .pauseFor(2500)
                    .deleteAll()
                    .pauseFor(150)
                    .start();
                }}
              />
            </div>
            <div className="About-Typewriter" aria-hidden="true">
              <Typewriter
                options={{
                  loop: false,
                  cursor: " ",
                }}
                onInit={(typewriter) => {
                  typewriter.pauseFor(2100).typeString("Developer").start();
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: .8 }}
        transition={{ delay: 2.5, duration: 5 }}
        className="About-Scrolldown"
      >
        <h2>See Portfolio</h2>
        <BiSolidDownArrow className="About-Scrolldown-Arrow" />
      </motion.div>
    </section>
  );
};

export default About;
