/* eslint-disable no-unused-vars */
import "./Events.css";
import Event from "./Event";
import Inquizitive from "./icons/inquizitive.png";
import NCC from "./icons/NCC.png";
import RC from "./icons/RC.png";
import NTH from "./icons/nth-logo.png";
import { Container, Row, Col } from "react-bootstrap";
import "../../assets/css/scrambleText.css";
import "../../styles.css";
import ScramblingText from "../../components/ScramblingText";

const Events = () => {
  const nccBasicInfo =
    "NCC is a platform where you can not only sharpen your problem solving ability but also showcase your programming skills.";
  const nthBasicInfo =
    "NTH is an online hunt played worldwide. Follow the trails of clues and piece them together to get to the puzzle.";

  const rc = {
    info: "Integer type questions which involve complex mathematical problems which are not easy to solve without coding. A 28-minute game for a person or a team of two people. Teams or players are allowed to use any IDE or software after the game has started. You will have 3 lifelines (description will be provided in the game itself). You will have two attempts to answer a particular question. In the first attempt, the marking scheme will be +4 0. In the second attempt, the marking scheme will be changed to +2  -1.",
  };

  return (
    <div className="container-fluid body-ContactUs events">
      {/* <Container>
        <Row className="mb-5 d-flex justify-content-start no-gutters">
          <p
            className="h1 heading-wrapper"
            style={{ color: "#fff", fontWeight: 500 }}
          >
            <TextScramble text="Events" />
          </p>
        </Row>
      </Container> */}
      {/* <div className='heading-aboutUs display-3 mb-5 text-center'>Events</div> */}
      <Container className="container-upper-Events">
        <Row className="ml-5 mb-5 d-flex justify-content-start">
          <p
            className="h1 heading-wrapper"
            style={{ color: "#fff", fontWeight: 500 }}
          >
            <ScramblingText
              scrambleText={"Events"}
              mainContainer={"heading-wrapper"}
            />
          </p>
        </Row>
      </Container>
      <Row className="no-gutters">
        <Col lg={3} md={6} sm={12}>
          <Event
            info={nccBasicInfo}
            icon={RC}
            eventname="Reverse Coding"
            id={1}
          />
        </Col>
        <Col lg={3} md={6} sm={12}>
          <Event
            info={nccBasicInfo}
            icon={NCC}
            eventname="National Coding Contest"
            id={2}
          />
        </Col>
        <Col lg={3} md={6} sm={12}>
          <Event
            info={nthBasicInfo}
            icon={Inquizitive}
            eventname="InQUIZitive"
            id={4}
          />
        </Col>
        <Col lg={3} md={6} sm={12}>
          <Event
            id={3}
            info={nccBasicInfo}
            icon={NTH}
            eventname="Network Treasure Hunt"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Events;
