import "./Portrait.css";
import { motion } from "framer-motion";
import portraitImage from "../../assets/portrait.png";

const Portrait = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ scale: 0.9, rotate: -2, opacity: 1 }}
        transition={{ duration: 7, type: "spring", stiffness: 55 }}
        className="Portrait"
      >
        <motion.div
          transition={{ duration: 7, type: "spring", stiffness: 55 }}
          className="Portrait-Frame"
        >
          <motion.h1
            className="Portrait-Text"
            animate={{ scale: 1.2 }}
            transition={{ duration: 7, type: "spring", stiffness: 55 }}
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, type: "spring", stiffness: 55 }}
              src={portraitImage}
              alt="Portrait of Brad"
            ></motion.img>
          </motion.h1>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Portrait;
