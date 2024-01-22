import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useRef } from "react";
import colorSharp from "../assets/img/color-sharp.png";

const Timeline = () => {
    const carouselRef = useRef(null);


    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <section className="skill job-section" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx job-bx">
                            <h2>Work Experience</h2>
                            <Carousel
                                ref={carouselRef}
                                responsive={responsive}
                                infinite={true}
                                className="skill-slider"
                                customTransition="transform 500ms ease-in-out"
                            >
                                <div className="job">
                                    <h5>Computer Science Teacher</h5>
                                    <h6>Tinker Club</h6>
                                    <p>January 2020 - December 2022</p>
                                    <ul>
                                        <li>Developed and delivered engaging lessons in Python, Scratch, science, and math for groups of 5-12 students.</li>
                                        <li>Proficiently translated complex concepts into easily understandable terms.</li>
                                        <li>Set clear objectives and communicate with parents to report student progress.</li>
                                    </ul>
                                </div>
                                <div className="job">
                                    <h5>Database Administrator</h5>
                                    <h6>YWCA Glendale</h6>
                                    <p>February 2022 - Present</p>
                                    <ul>
                                        <li>Design and optimize complex database queries and schemas to enhance data retrieval and storage efficiency.</li>
                                        <li>Create documentation for database architecture, ensuring the availability of essential reference materials for the team.</li>
                                        <li>Develop and maintain automated reporting systems, improving data accessibility and streamlining grant reporting</li>
                                    </ul>
                                </div>
                                <div className="job">
                                    <h5>Open To New Roles</h5>
                                    <h6>Tech & Finance</h6>
                                    <p>January 2020 - December 2022</p>
                                    <ul>
                                        <li>Willing to take on new challenges and master new skills in technology, finance, and analytics</li>
                                        <li>Open to roles such as Software Engineer, Data Analyst, Financial Analyst, Data Scientist</li>
                                        <li>Reach out with and openings</li>
                                    </ul>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt=""/>

        </section>
    );
}

export default Timeline;