import "./Register.css";
import { Col, Row, Container } from "react-bootstrap";
import RegisterForm from "./RegisterForm";
import Vector from './vector.png'

const Register = () => {
  return (
    <div className="register">
      <Container fluid>
        <Row>
          <Col lg={6}>
            <img src={Vector} width='370px' />
          </Col>
          <Col lg={6} sm={12}>
          <RegisterForm></RegisterForm>
          </Col>
        </Row>
      </Container>
      
      
    </div>
  );
};

export default Register;