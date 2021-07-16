import { Container, Row, Col } from 'react-bootstrap'


const Question2 = (props) => {
    return ( 
        <Container className='question-2'>
            <Row>
                <Col lg={6} sm={12}>
                    <img src={props.image_1} />
                </Col>
                <Col lg={6} sm={12}>
                    <img src={props.image_2}/>
                </Col>
            </Row>
        </Container>
     );
}
 
export default Question2;