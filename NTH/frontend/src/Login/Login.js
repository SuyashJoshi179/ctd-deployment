import { Col, Row, Container } from "react-bootstrap";
import "./Login.css";
import Instructions from "./Instructions";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col lg={6} sm={12}>
            <LoginForm></LoginForm>
            <div className="answer-1">
        <h6>We have nothing to give you for the fifth question.</h6>
      </div>
          </Col>
          <Col lg={6} sm={12}>
            <Instructions></Instructions>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
