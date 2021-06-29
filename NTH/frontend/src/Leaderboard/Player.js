import {Container, Row, Col} from 'react-bootstrap'

const Player = (props) => {
  return (
    <div>
      <Container className='player'>
        <Row>
          <Col sm={2} >
            <h4>{props.position}</h4>
          </Col>
          <Col sm={6}>{props.player}</Col>
          <Col sm={4}>Level {props.level}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Player;


{/* <Row>
        <Col sm={2}>
          <h4>&nbsp;{props.position}</h4>
        </Col>
        <Col sm={6}>
          <h4></h4>
        </Col>
        <Col sm={4}>
          <h4>&nbsp;&nbsp;{props.level}</h4>
        </Col>
      </Row> */}