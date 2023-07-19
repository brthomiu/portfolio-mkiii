import "./MainPage.css";
import About from "../components/about/About";
import ProjectContainer from "../components/projects/ProjectContainer";
import Spacer from "../components/Spacer";

const MainPage = () => {
  return (
    <div className="MainPage">
      <div className="Page-Container">
        <About />
        <Spacer />
        <ProjectContainer />
      </div>
    </div>
  );
};

export default MainPage;
