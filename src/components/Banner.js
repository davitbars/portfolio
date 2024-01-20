import { useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100 - Math.random() * 100);
    // eslint-disable-next-line
    const [index, setIndex] = useState(1);
    const toRotate = ["Data Analyst", "Full Stack Developer", "Data Scientist", "Entreperneur", "Financial Analyst"];
    const period = 1500;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
        // eslint-disable-next-line
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            //   setDelta(prevDelta => prevDelta / 2);

            setDelta(100 - Math.random() * 100);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(100 - Math.random() * 100);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }



    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7} >
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{'Hi! I\'m Davit '}</h1>
                        <h1><span className="wrap">{text}</span></h1>
                        <p>Recent Computer Science graduate with a minor in Data Science, 
                            excelling as a Database Administrator. Actively seeking 
                            opportunities in Data Analytics, Software Engineering, and
                            other tech domains. Enthusiastic about leveraging data to 
                            drive innovation and create impactful solutions.</p>
                        <a href="#connect"><button>Let's Connect <ArrowRightCircle size={25} /></button></a>
                    </Col>
                    <Col xs={12} md={6} xl={5} >
                        <img src={headerImg} alt="header img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};