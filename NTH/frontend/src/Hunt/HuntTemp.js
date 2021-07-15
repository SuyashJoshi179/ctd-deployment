import "./Hunt.css";
import Login from "../Login/Login";
import Timer from "../Timer/Timer";
import nthlogo from '../Home/nth-logo.png'

const HuntTemp = ({eventDate}) => {
  
  return (
    <div>
      {eventDate - new Date().getTime() > 0 ? (
        <div className="huntTemp-page">
          {/* <h2>Network Tresure Hunt starts after</h2> */}
          <img src={nthlogo} width='300px' />
          {/* <h2>You can login from here after</h2> */}
          <Timer eventDate={eventDate}></Timer>
        </div>
      ) : (
        <div className="hunt-page">
          <Login />
        </div>
      )}
    </div>
  );
};

export default HuntTemp;

// <Container className='timer'>
//   <Row>
//     <Col sm={3}>{days}</Col>
//     <Col sm={3}>{hours}</Col>
//     <Col sm={3}>{minutes}</Col>
//     <Col sm={3}>{sec}</Col>
//   </Row>
// </Container>
