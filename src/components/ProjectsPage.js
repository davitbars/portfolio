import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import "./ProjectsPage.css";


// Project Images
import weatherImage from "../projects/projectPics/weather.png";
import tictactoePic from "../projects/projectPics/tictactoe.png";
import ULyfePic from "../projects/projectPics/ULyfe.png";
import adventurePic from "../projects/projectPics/adventure.png";
import drumkitpic from "../projects/projectPics/drumkit.png";
import calculatorpic from "../projects/projectPics/calculator.png";
import facialclassifierPic from "../projects/projectPics/facialClassifier.png";
import linearRegPic from "../projects/projectPics/linearRegression.png";


const ProjectsPage = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  const [selectedOption, setSelectedOption] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (category) {
      setSelectedOption(category);
    }
  }, [category]);

  const allProjectsData = [
    {
      title: "Weather App",
      description: "Open WeatherMapAPI",
      imgUrl: weatherImage,
      link: "/weather",
      category: "full-stack",
    },
    {
      title: "ULyfe",
      description: "Social Media Platform",
      imgUrl: ULyfePic,
      link: "/ulyfe",
      category: "full-stack",
    },
    {
      title: "Adventure Site",
      description: "Vanilla js, html, css site",
      imgUrl: adventurePic,
      link: "/adventure",
      category: "full-stack",
    },
    // Projects for fun
    {
      title: "Tic Tac Toe",
      description: "Minimax Algorithm",
      imgUrl: tictactoePic,
      link: "/tictactoe",
      category: "fun"
    },
    {
      title: "Drum Kit",
      description: "Simple Drum Set",
      imgUrl: drumkitpic,
      link: "/drumkit",
      category: "fun"
    },
    {
      title: "Calculator",
      description: "Simple Calculator",
      imgUrl: calculatorpic,
      link: "/calculator",
      category: "fun"
    },
    //Projects for data
    {
      title: "Facial Expression",
      description: "CNN Classifier",
      imgUrl: facialclassifierPic,
      link: "/facial-expression-classifier",
      category: "data"
    },
    {
      title: "Linear Regression",
      description: "Housing Data",
      imgUrl: linearRegPic,
      link: "/linear-regression",
      category: "data"
    },
  ];
  
  // Filter projects based on the selected category
  const filteredProjectsData = selectedOption === "all"
    ? allProjectsData
    : allProjectsData.filter(project => project.category === selectedOption);

  // Handle dropdown change
  const handleSelectChange = (e) => {
    navigate(`/projects/${e.target.value}`);
    setSelectedOption(e.target.value);
  };

  return (
    <div className="projects-page-container">
      <div className="pp-title">
        <h1>All Projects</h1>
        <p>
          Check out
          <select
            className="pp-select"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option value="all">All</option>
            <option value="full-stack">Full Stack</option>
            <option value="data">Data Science</option>
            <option value="fun">For Fun</option>
          </select>
          Projects I have completed
        </p>
      </div>
      <Container>
        <Row>
          {filteredProjectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProjectsPage;
