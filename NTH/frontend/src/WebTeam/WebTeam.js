import TeamMemberCard from "./TeamMemberCard";
import Jay from "./Images/Jay.jpg";
import "./WebTeam.css";
import { Link } from "react-router-dom";
import { Button, Container, Row} from "react-bootstrap";
import Karan from './Images/Karan.jpg'
import More from './Images/more34.jpeg'
import Atharva from './Images/naphade.jpeg'

const WebTeam = () => {
  return (
    <div className="web-team">
      <Link to="/" >
        <Button className='close-button' variant='light' size='lg' >X</Button>
      </Link>
      <Container>
        <Row>
          <TeamMemberCard linkedin='https://www.linkedin.com/in/atharva-naphade-540236148/' name='Atharva Naphade' image={Atharva} />
          <TeamMemberCard linkedin='https://www.linkedin.com/in/karan-lakhwani' name='Karan Lakhwani' image={Karan} />
          <TeamMemberCard linkedin='https://www.linkedin.com/in/suyashmore789/' name='Suyash More' image={More} />
        </Row>
      </Container>
    </div>
  );
};

export default WebTeam;
