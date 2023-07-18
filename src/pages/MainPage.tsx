import "./MainPage.css";
import About from "../components/about/About";
import ProjectContainer from "../components/projects/ProjectContainer";

const MainPage = () => {
  return (
    <div className="MainPage">
      <About />
      <ProjectContainer />
    </div>
  );
};

export default MainPage;
