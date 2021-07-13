import "./Hunt.css";
import Login from "../Login/Login";
import Timer from "../Timer/Timer";

const HuntTemp = ({eventDate}) => {
  
  return (
    <div>
      {eventDate - new Date().getTime() > 0 ? (
        <div className="huntTemp-page">
          <h2>Network Tresure Hunt starts after</h2>
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
