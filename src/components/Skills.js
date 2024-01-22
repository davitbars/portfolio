import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { useEffect, useRef } from "react";


// icon imports
import ML from "../assets/img/ML.png";
import java from "../assets/img/java.png";
import firebase from "../assets/img/firebase.png";
import flutter from "../assets/img/flutter.png";
import excel from "../assets/img/excel.png";
import mongo from "../assets/img/mongodb.png";
import pandas from "../assets/img/pandas.png";
import python from "../assets/img/python.png";
import SQL from "../assets/img/sql.png";
import tensor from "../assets/img/tensorflow.png";
import postgres from "../assets/img/postegres.png";
import react from "../assets/img/react.png";
import pytorch from "../assets/img/pytorch.png";

export const Skills = () => {
    const carouselRef = useRef(null);
  
    useEffect(() => {
      const interval = setInterval(() => {
        // Trigger the next slide every 3 seconds
        carouselRef.current.next();
      }, 3000);
  
      return () => {
        clearInterval(interval);
      };
    }, []); 
  
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
  
    return (
      <section className="skill" id="skills">
        <Container>
          <Row>
            <Col>
              <div className="skill-bx">
                <h2>Skills</h2>
                <p>
                  Hands-on experience has honed my skills across various domains,
                  empowering me to navigate diverse technological challenges
                  with ease.
                </p>
                <Carousel
                  ref={carouselRef}
                  responsive={responsive}
                  infinite={true}
                  className="skill-slider"
                  customTransition="transform 500ms ease-in-out"
                >
                            <div className="item">
                                <img src={python} alt="skill1" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="skill2" />
                                <h5>react</h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="machine learning meter" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={SQL} alt="SQL meter" />
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={excel} alt="SQL meter" />
                                <h5>MS Excel</h5>
                            </div>
                            <div className="item">
                                <img src={firebase} alt="SQL meter" />
                                <h5>Firebase</h5>
                            </div>
                            <div className="item">
                                <img src={flutter} alt="SQL meter" />
                                <h5>Flutter</h5>
                            </div>
                            <div className="item">
                                <img src={ML} alt="SQL meter" />
                                <h5>Machine Learning</h5>
                            </div>
                            <div className="item">
                                <img src={mongo} alt="SQL meter" />
                                <h5>Mongo DB</h5>
                            </div>
                            <div className="item">
                                <img src={pandas} alt="SQL meter" />
                                <h5>Pandas</h5>
                            </div>
                            <div className="item">
                                <img src={tensor} alt="SQL meter" />
                                <h5>Tensor Flow</h5>
                            </div>
                            <div className="item">
                                <img src={postgres} alt="SQL meter" />
                                <h5>Postegres SQL</h5>
                            </div>
                            <div className="item">
                                <img src={pytorch} alt="SQL meter" />
                                <h5>Pytorch</h5>
                            </div>
                            
                            
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt=""/>
        </section>
    )
    
}