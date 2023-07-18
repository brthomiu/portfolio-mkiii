import "./Project.css";
import { IProject } from "./projectList";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export interface IProjectProps {
  project: IProject;
}

const Project: React.FC<IProjectProps> = ({ project }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [1, 0.9, 0.7, 0]
  );

  return (
    <motion.div style={{ opacity }} className="Project">
      <div className="Project-Top">
        <img src={project.image}></img>
      </div>
      <div className="Project-Bottom">
        <div className="Project-Body">
          <h2 ref={targetRef}>{project.name}</h2>
          <div className="Project-List">
            {project.list.map((listItem) => (
              <h3>{listItem}</h3>
            ))}
          </div>
          <p>{project.body}</p>
        </div>
        <div className="Project-Links">
        <a href={project.repoLink} target="_blank" rel="noreferrer">
            <button>GitHub</button>
          </a>

          <a href={project.liveLink} target="_blank" rel="noreferrer">
            <button>Live Demo</button>
          </a>

        </div>
      </div>
    </motion.div>
  );
};

export default Project;
