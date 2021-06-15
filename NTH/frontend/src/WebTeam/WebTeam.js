import TeamMemberCard from "./TeamMemberCard";
import Jay from "./Images/Jay.jpg";
import "./WebTeam.css";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";

const WebTeam = () => {
  return (
    <div className="web-team">
      <Link to="/" >
        <Button className='close-button' variant='light' size='lg' >X</Button>
      </Link>
      <br/><br/><br/>
      <Container>
        <Row>
          <TeamMemberCard image={Jay} />
          <TeamMemberCard image={Jay} />
        </Row>
      </Container>
    </div>
  );
};

export default WebTeam;
