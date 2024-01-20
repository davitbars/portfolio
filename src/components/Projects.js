import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import plus from "../assets/img/plus.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// Project pics
import weatherImage from "../projects/projectPics/weather.png";
import tictactoePic from "../projects/projectPics/tictactoe.png";
import ULyfePic from "../projects/projectPics/ULyfe.png";
import drumkitpic from "../projects/projectPics/drumkit.png";

export const Projects = () => {

  const fullStack = [
    {
      title: "Weather App",
      description: "Open WeatherMapAPI",
      imgUrl: weatherImage,
      link: "/weather"
    },
    {
      title: "ULyfe",
      description: "Social Media Platform",
      imgUrl: ULyfePic,
      link: "/ulyfe"
    },
    {
      tile: "More Projects",
      description: "Web Projects",
      imgUrl: plus,
      link: "/projects/full-stack"
    }
  ];

  const forFun = [
    {
      title: "Tic Tac Toe",
      description: "Minimax Algorithm",
      imgUrl: tictactoePic,
      link: "/tictactoe"
    },
    {
      title: "Drum Kit",
      description: "Simple Drum Set",
      imgUrl: drumkitpic,
      link: "/drumkit"
    },
    {
      tile: "More Projects",
      description: "Projects for Fun",
      imgUrl: plus,
      link: "/projects/fun"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Explore my diverse portfolio, featuring projects that showcase my proficiency in Data Science,
                    Software Development, and a collection of passion-driven creations. Each project reflects my
                    commitment to innovation and practical application in different realms.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Data Science</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Full Stack</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">For Fun</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">

                      </Tab.Pane>
                      {/* Full Stack Projects */}
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            fullStack.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>

                      {/* for fun projects */}
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            forFun.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}