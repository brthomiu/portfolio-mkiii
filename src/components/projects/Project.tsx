import "./Project.css";
import { IProject } from "./projectList";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export interface IProjectProps {
  project: IProject;
}

const Project: React.FC<IProjectProps> = ({ project }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 5, type: "spring", stiffness: 55 }}
      className="Project"
    >
      <div ref={ref} className="Project-Top">
        <img src={project.image} alt={`${project.name} screenshot`}></img>
      </div>
      <div className="Project-Bottom">
        <div className="Project-Body">
          <h2>{project.name}</h2>
          <div className="Project-List">
            {project.list.map((listItem) => (
              <h3 key={listItem}>{listItem}</h3>
            ))}
          </div>
          <p className="Project-Body-Text">{project.body}</p>
          <div className="Project-Details">
            <p>{project.details}</p>
          </div>
        </div>
        <div className="Project-Links">
          <a href={project.repoLink} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={project.liveLink} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
