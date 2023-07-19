import ston1 from "../../assets/ston1.png"
import taskList1 from "../../assets/taskList1.png"
import movie1 from "../../assets/movie1.png"
import calculon1 from "../../assets/calculon1.png"



export interface IProject {
  name: string;
  list: string[];
  body: string;
  image: string;
  liveLink: string;
  repoLink: string;
}

export const projectList: IProject[] = [
  {
    name: "Stön Recipe Notes",
    list: ["TypeScript", "React", "Redux", "NodeJS", "MongoDB"],
    body:       "A platform to help cooks and chefs develop better recipes. Stön is a full stack web application built with TypeScript, React, and NodeJS.",
    image: ston1,
    repoLink: "https://github.com/brthomiu/Ston-Pizza-Notes",
    liveLink: "https://recipes2023.herokuapp.com/",
  },

  {
    name: "Full Stack Task List",
    list: ["JavaScript", "React", "Redux", "NodeJS", "MongoDB"],
    body: "Full stack task list webapp using NodeJS, React, Express, and MongoDB. Uses Redux for state management and JSON Web Tokens for authentication.",
    image: taskList1,
    repoLink: "https://github.com/brthomiu/Full-Stack-Task-List",
    liveLink: "https://restfulmern2022.herokuapp.com/login",
  },

  {
    name: "Movie Lookup",
    list: ["JavaScript", "React", "CSS"],
    body: "Movie lookup app made with React. Fetches movies from a remote API and renders component cards. Includes search and tag features.",
    image: movie1,
    repoLink: "https://github.com/brthomiu/Movie-Lookup",
    liveLink: "https://brthomiu.github.io/movie-app/",
  },

  {
    name: "Calculon",
    list: ["JavaScript", "React", "CSS"],
    body: "Earth's Greatest Calculating Unit - Made with React and JavaScript.",
    image: calculon1,
    repoLink: "https://github.com/brthomiu/calculon",
    liveLink: "https://brthomiu.github.io/calculon/",
  },
];
