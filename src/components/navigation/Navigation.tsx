import "./Navigation.css";
import { AiOutlineHome, AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
const Navigation = () => {
  return (
    <div className="Navigation">
      <a href="" target="_blank" rel="noreferrer">
        <button>
          <AiOutlineHome />
        </button>
      </a>
      <a href="https://github.com/brthomiu" target="_blank" rel="noreferrer">
        <button>
          <FiGithub />
        </button>
      </a>
      <a href="https://www.linkedin.com/in/brthomiu/" target="_blank" rel="noreferrer">
        <button>
          <AiOutlineLinkedin />
        </button>
      </a>
    </div>
  );
};

export default Navigation;
