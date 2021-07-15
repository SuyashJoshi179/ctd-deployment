import {Container, Row, Col} from 'react-bootstrap'

const Player = (props) => {
  return (
    <div>
      {/* <Container className='player'>
        <Row>
          <Col >
            <h4 className='position'>{props.position}</h4>
          </Col>
          <Col className='name'>{props.player}</Col>
          <Col className='level' >Level {props.level}</Col>
        </Row>
      </Container> */}
      <table className='player'>
          <tr>
            <td className='position'>
            {props.position}
            </td>
            <td >
            {props.player}
            </td>
            <td >
            Level {props.level}
            </td>
          </tr>
      </table>
    </div>
  );
};

export default Player;

