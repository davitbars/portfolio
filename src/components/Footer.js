import { Col, Container, Row } from "react-bootstrap"
import logo from "../assets/img/logo.png";
import linkedin from "../assets/img/linkedin.png";
import github from "../assets/img/github.png";
import resume from "../assets/img/resume.png";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/davit-barseghyan/" target="_blank" rel="noopener noreferrer">
                                <img src={linkedin} alt="linkedin" />
                            </a>

                            <a href="https://github.com/davitbars" target="_blank" rel="noopener noreferrer">
                                <img src={github} alt="projects" />
                            </a>

                            <a href="/#" target="_blank" rel="noopener noreferrer">
                                <img src={resume} alt="skills" />
                            </a>
                        </div>
                        <p>CopyRight 2023. All Right Reserved Davit Barseghyan</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}