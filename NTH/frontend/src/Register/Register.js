import "./Register.css";
import { Col, Row, Container } from "react-bootstrap";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <div className="register">
      {/* <Container fluid>
        <Row>
          <Col className='register-form' lg={5} md={5} sm={10}>
          </Col>
          <Col>
          </Col>
        </Row>
      </Container> */}

      <h2>Registration Form</h2>
      <RegisterForm></RegisterForm>
    </div>
  );
};

export default Register;