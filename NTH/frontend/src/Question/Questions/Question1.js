import { Container, Row, Col, Modal } from "react-bootstrap";

const Question1 = (props) => {
  return (
    <div>
        <Container className='question-1'>
            <Row>
                <Col>
                    <img src={props.image} />
                </Col>
            </Row>
        </Container>
    </div>
  );
};

export default Question1;
