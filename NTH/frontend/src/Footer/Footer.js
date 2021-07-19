import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import {useLocation } from 'react-router-dom'

const Footer = () => {

  const location = useLocation();

  if (!location.pathname.match("/question")){
    return (
      <div className="footer">
        <Container fluid>
          <Row>
            <Col lg={4} md={12} sm={12}>
              <p>© PICT IEEE Student Branch</p>
            </Col>
            <Col lg={4} md={12} sm={12}>
              <p className="web-team-link">
                Developed with ♥ by PISB <a href="/team">Web Team</a>
              </p>
            </Col>
            <Col lg={4} md={12} sm={12}>
              <a href="https://instagram.com/nth__live?utm_medium=copy_link" target="_blank">
                <i className="fab fa-instagram  instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/pisbieee/"
                target="_blank"
              >
                <i className="fab fa-linkedin-in  linkedin"></i>
              </a>
              <a href="https://www.facebook.com/NTHCredenz/" target="_blank">
                <i className="fab fa-facebook-f  facebook"></i>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  return null;


  
};

export default Footer;
