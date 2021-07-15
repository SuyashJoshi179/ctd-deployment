import { Container, Row, Col } from 'react-bootstrap'


const Question2 = (props) => {
    return ( 
        <Container>
            <Row>
                <Col lg={6} sm={12}>
                    <img src={props.image_1} width='300px' />
                </Col>
                <Col lg={6} sm={12}>
                    <img src={props.image_2} width='300px' />
                </Col>
            </Row>
        </Container>
     );
}
 
export default Question2;