import {Container, Row, Col} from 'react-bootstrap'

const Question4 = (props) => {
    return ( 
        <div>
            <Container>
            <Row>
                <Col lg={6} sm={12}>
                    <img src={props.image_1} width='220px'/>
                </Col>
                <Col lg={6} sm={12}>
                    <img src={props.image_2} width='220px' />
                </Col>
            </Row>
            <Row>
                <Col lg={6} sm={12}>
                    <img src={props.image_3} width='220px'/>
                </Col>
                <Col lg={6} sm={12}>
                    <img src={props.image_4} width='220px'/>
                </Col>
            </Row>
        </Container>
        </div>
     );
}
 
export default Question4;