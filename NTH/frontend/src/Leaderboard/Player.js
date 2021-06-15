import {Row, Col} from 'react-bootstrap'

const Player = (props) => {
  return (
    <div>
      <Row>
        <Col sm={2}>
          <h4>&nbsp;{props.position}</h4>
        </Col>
        <Col sm={6}>
          <h4>{props.player}</h4>
        </Col>
        <Col sm={4}>
          <h4>&nbsp;&nbsp;{props.level}</h4>
        </Col>
      </Row>
    </div>
  );
};

export default Player;
