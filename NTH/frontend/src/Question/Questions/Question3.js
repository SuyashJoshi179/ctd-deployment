import { Container, Row, Col } from 'react-bootstrap'

const Question3 = (props) => {

    return ( <div>
        <Container>
            <Row>
                <Col lg={6} sm={12}>
                    <img src={props.image_1} width='225px'/>
                </Col>
                <Col lg={6} sm={12}>
                    <img src={props.image_2} width='225px'/>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <img src={props.image_3} width='225px'/>
                </Col>
            </Row>
        </Container>
    </div> );
}
 
export default Question3;