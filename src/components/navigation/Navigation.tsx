import "./Navigation.css";
import { AiOutlineHome, AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";

const Navigation = () => {
  return (
    <div className="Navigation">
      <a href="#About" rel="noreferrer" title="Home" className="Navigation-Home">
        <AiOutlineHome />
      </a>

      <a
        href="https://github.com/brthomiu"
        target="_blank"
        rel="noreferrer"
        title="GitHub"
      >
        <FiGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/brthomiu/"
        target="_blank"
        rel="noreferrer"
        title="LinkedIn"
      >
        <AiOutlineLinkedin />
      </a>
    </div>
  );
};

export default Navigation;
