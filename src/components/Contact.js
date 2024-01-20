import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="contact us" />
          </Col>
          <Col md={6}>
            <h2>Contact Information</h2>
            <div className="contact-info">
              <p>Email: davitbarseg@gmail.com</p>
              <p>Phone: +1 (203) 434-9672</p>
              <p>Location: Glendale, California</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
