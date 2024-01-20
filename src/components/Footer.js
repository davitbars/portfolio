import { Col, Container, Row } from "react-bootstrap"
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

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
                            <a href="https://www.linkedin.com/in/davit-barseghyan/"><img src={navIcon1} alt="linkedin" /></a>
                            <a href="/projects"><img src={navIcon2} alt="projects" /></a>
                            <a href="skills"><img src={navIcon3} alt="skills" /></a>
                        </div>
                        <p>CopyRight 2023. All Right Reserved Davit Barseghyan</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}