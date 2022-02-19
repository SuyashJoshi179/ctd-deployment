import "./Contact.css";
import ContactCard from "./ContactCard";
import { Row, Container, Col } from "react-bootstrap";
import Bora from "./bora.jpeg";
import Suyash from "./more11.jpeg";
import Zirape from "./zirape.jpeg";

const Contact = () => {
  return (
    <div className="contact-page">
      <Container>
        <Row>
          <Col lg={6} sm={12}>
            <ContactCard
              name="Siddharth Bora"
              image={Bora}
              phone="+91 94033 04652"
              linkedin="https://www.linkedin.com/in/siddharth-bora-a7a174132/"
            />
          </Col>
          <Col lg={6} sm={12}>
            <ContactCard
              name="Shrikrushna Zirape"
              image={Zirape}
              phone="+91 98349 21293"
              linkedin="https://www.linkedin.com/in/shrikrushnazirape/"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
