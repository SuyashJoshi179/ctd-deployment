import { Container, Row, Col, Modal } from "react-bootstrap";

const Question1 = (props) => {
  return (
    <div>
        <Container>
            <Row>
                <Col>
                    <img src={props.image} width='400px'/>
                </Col>
            </Row>
        </Container>
    </div>
  );
};

export default Question1;
