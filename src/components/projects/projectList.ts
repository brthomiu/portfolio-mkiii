import ston1 from "../../assets/ston1.png";
import taskList1 from "../../assets/taskList1.png";
import movie1 from "../../assets/movie1.png";
import calculon1 from "../../assets/calculon1.png";
import vinyl from "../../assets/vinyl.png";
import jimmy from "../../assets/jimmy.png";

export interface IProject {
  name: string;
  list: string[];
  body: string;
  details: string;
  image: string;
  liveLink: string;
  repoLink: string;
}

export const projectList: IProject[] = [
  {
    name: "Stön Recipe Notes",
    list: ["TypeScript", "React", "Redux", "NodeJS", "MongoDB"],
    body: "An interactive recipe hub that enables cooks to develop, find, and share recipes.",
    details:
      "Stön employs a tech stack that includes TypeScript, React, Node, Express, and MongoDB. React and Redux are used on to create a dynamic and responsive frontend, while the backend is built with Node and Express. In addition to the ability to create and browse recipes, Stön features an advanced search form, and the ability for users to like their favorite recipes.",
    image: ston1,
    repoLink: "https://github.com/brthomiu/Ston-Pizza-Notes",
    liveLink: "https://recipes2023.herokuapp.com/",
  },

  {
    name: "Vintage Vinyl",
    list: ["PHP", "HTML", "CSS", "WordPress", "SQL"],
    body: "An eCommerce storefront that uses WordPress for content management.",
    details:
      "Vintage Vinyl is an online storefront built with WordPress, PHP, HTML, CSS, and MySQL. It utilizes WooCommerce as a payment platform, and WordPress as a content management system, enabling users without web development knowledge to update the page and manage the store.",
    image: vinyl,
    repoLink: "https://github.com/brthomiu/Vintage_Vinyl",
    liveLink: "https://shop.bradthompsonweb.dev/",
  },

  {
    name: "Movie Lookup",
    list: ["JavaScript", "React", "CSS"],
    body: "A page where users can browse and search a database of movies.",
    details:
      "Built with JavaScript and React. Utilizes the Fetch API to retrieve movie data, and features search and tag functionality enabling users to easily navigate the movie database.",
    image: movie1,
    repoLink: "https://github.com/brthomiu/Movie-Lookup",
    liveLink: "https://brthomiu.github.io/movie-app/",
  },

  {
    name: "Full Stack Task List",
    list: ["JavaScript", "React", "Redux", "NodeJS", "MongoDB"],
    body: "A web application that enables users to privately keep track of their daily tasks.",
    details:
      "Task List boasts a tech stack that uses JavaScript, React, Node, Express, and MongoDB. The app features an authentication system that utilizes JSON Web Tokens to tokenize user data, which is securely stored in a MongoDB cluster.",
    image: taskList1,
    repoLink: "https://github.com/brthomiu/Full-Stack-Task-List",
    liveLink: "https://restfulmern2022.herokuapp.com/login",
  },

  {
    name: "Calculon",
    list: ["JavaScript", "React", "CSS"],
    body: "Earth's greatest calculating unit.",
    details:
      "Calculon is a scientific calculator designed to evaluate basic mathematical expressions, it utilizes component based design patterns and features a clean and readable codebase.",
    image: calculon1,
    repoLink: "https://github.com/brthomiu/calculon",
    liveLink: "https://brthomiu.github.io/calculon/",
  },

  {
    name: "Wedding DJ",
    list: ["React", "Tailwind CSS", "NextJS", "Framer Motion"],
    body: "Landing page for DJ Jimmy Goose featuring a responsive design with animations.",
    details:
      "Built with TypeScript, React, and NextJS. Utilizes Tailwind CSS to enforce consistent styling, and Framer Motion to add animation to various elements.",
    image: jimmy,
    repoLink: "https://github.com/brthomiu/DJ-Jimmy-Goose",
    liveLink: "https://weddings.bradthompsonweb.dev/",
  },
];
