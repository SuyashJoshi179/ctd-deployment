import "./Register.css";
import { Col, Row, Container } from "react-bootstrap";
import RegisterForm from "./RegisterForm";
import Vector from './vector.png'
import Vectorsvg from './vec.svg'

const Register = () => {
  return (
    <div className="register">
      <Container fluid>
        <Row>
          <Col lg={5}>
            <img src={Vectorsvg} width='370px' />
          </Col>
          <Col lg={7} sm={12}>
          <RegisterForm></RegisterForm>
          </Col>
        </Row>
      </Container>
      
      
    </div>
  );
};

export default Register;