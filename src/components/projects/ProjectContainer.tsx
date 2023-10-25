import "./ProjectContainer.css";
import Project from "./Project";
import { projectList } from "./projectList";

const ProjectContainer = () => {
  return (
    <>
      <div className="ProjectContainer">
        {projectList.map((project) => (
          <Project project={project} key={project.name} />
        ))}
      </div>
    </>
  );
};

export default ProjectContainer;
