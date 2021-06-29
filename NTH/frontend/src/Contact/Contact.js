import "./Contact.css";
import ContactCard from "./ContactCard";
import { Row, Container, Col } from "react-bootstrap";
import Bora from './bora.jpeg';
import Suyash from './more11.jpeg';

const Contact = () => {
  return (
    <div className="contact-page">
      <Container>
        <Row>
          <Col lg={4} sm={12}>
            <ContactCard name="Siddharth Bora" image={Bora} email='karan.lakhwani23@gmail.com' />
          </Col>
          <Col lg={4} sm={12}>
            <ContactCard name="Suyash More" image={Suyash} />
          </Col>
          <Col lg={4} sm={12}>
            <ContactCard name="Shrikrushna Zirape" image={Bora} email='karan.lakhwani23@gmail.com' />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
