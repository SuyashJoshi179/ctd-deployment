import "./Contact.css";
import ContactCard from "./ContactCard";
import { Row, Container, Col } from "react-bootstrap";
import rach from './rach.jpg';

const Contact = () => {
  return (
    <div className="contact-page">
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <ContactCard name="Rachael Meghan" image={rach} email='karan.lakhwani23@gmail.com' />
          </Col>
          <Col lg={6} md={6} sm={12}>
            <ContactCard name="Rachael Meghan" image={rach} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
