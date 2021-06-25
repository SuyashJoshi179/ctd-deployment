import TeamMemberCard from "./TeamMemberCard";
// import Jay from "./Images/Jay.jpg";
import Karan from "./Images/karan.jpeg";
import Atharva from "./Images/naphade.jpeg";
import Neil from "./Images/neil.jpeg";
import Sanket from "./Images/sanket.jpeg";
import Pranav from "./Images/pranav.jpeg";
import Fateema from "./Images/fateema.jpeg";
import Omkar from "./Images/omkar.jpeg";
import Shreya from "./Images/shreya.jpeg";
import "./WebTeam.css";
import { Link } from "react-router-dom";
import { Button, Row, Col, Container } from "react-bootstrap";

const WebTeam = () => {
  return (
    <div className="web-team">
      <Link to="/">
        <Button className="close-button" variant="light">
          X
        </Button>
      </Link>
      <br />
      <br />
      <Container fluid>
        <Row>
          <Col
            className="d-flex justify-content-end align-items-end"
            lg={4}
            sm={12}
          >
            <TeamMemberCard
              linkedin="https://www.linkedin.com/in/fatema-katawala-2b99451a1/"
              name="Fatema Katawala"
              image={Fateema}
            />
          </Col>
          <Col
            className="d-flex justify-content-center align-items-center"
            lg={4}
            sm={12}
          >
            <TeamMemberCard
              linkedin="https://www.linkedin.com/in/rakmo33/"
              name="Omkar Dabir"
              image={Omkar}
            />
          </Col>
          <Col
            className="d-flex justify-content-start align-items-start"
            lg={4}
            sm={12}
          >
            <TeamMemberCard
              linkedin="https://www.linkedin.com/in/shreya-deshpande-420297191/"
              name="Shreya Deshpande"
              image={Shreya}
            />
          </Col>
        </Row>
        <Row>
          <Col
            className="d-flex justify-content-end align-items-end"
            lg={4}
            sm={12}
          >
            <TeamMemberCard
              linkedin="https://www.linkedin.com/in/atharva-naphade-540236148/"
              name="Atharva Naphade"
              image={Atharva}
            />
          </Col>
          <Col
            className="d-flex justify-content-center align-items-center"
            lg={4}
            md={6}
            sm={12}
          >
            <TeamMemberCard
              linkedin="https://www.linkedin.com/in/karan-lakhwani"
              name="Karan Lakhwani"
              image={Karan}
            />
          </Col>
          <Col
            className="d-flex justify-content-start align-items-start"
            lg={4}
            sm={12}
          >
            <TeamMemberCard
              linkedin="https://www.linkedin.com/in/neil-deshpande-908aa118b/"
              name="Neil Deshpande"
              image={Neil}
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col lg={2} sm={12}></Col>
          <Col
            className="d-flex justify-content-start align-items-start"
            lg={4}
            sm={12}
          >
            <TeamMemberCard
              linkedin="https://www.linkedin.com/in/pranav-mohril/"
              name="Pranav Mohril"
              image={Pranav}
            />
          </Col>
          <Col
            className="d-flex justify-content-end align-items-end"
            lg={4}
            sm={12}
          >
            <TeamMemberCard
              linkedin="https://www.linkedin.com/in/sanket-a-kulkarni/"
              name="Sanket Kulkarni"
              image={Sanket}
            />
          </Col>
          <Col lg={2} sm={12}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default WebTeam;
