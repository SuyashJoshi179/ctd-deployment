import TeamMemberCard from "./TeamMemberCard";
import Jay from "./Images/Jay.jpg";
import "./WebTeam.css";
import {  useHistory } from "react-router-dom";
import { Button, Container, Row} from "react-bootstrap";
import Karan from './Images/Karan.jpg'
import More from './Images/more34.jpeg'
import Atharva from './Images/naphade.jpeg'
import Shreyas from './Images/Shreyas.jpeg'
import Shreyash from './Images/Shreyash.jpeg'

const WebTeam = () => {

  const history = useHistory();
  
  const goToPreviousPage = () => {
    history.goBack()  
  } 

  return (
    <div className="web-team">
      
        <Button onClick={goToPreviousPage} className='close-button' variant='light' size='lg' >X</Button>
      
      <Container className='team-members'>
        <Row>
          <TeamMemberCard github="https://atharvanaphade.me/" linkedin='https://www.linkedin.com/in/atharva-naphade-540236148/' name='Atharva Naphade' image={Atharva} />
          <TeamMemberCard github="https://github.com/karanlakhwani910" linkedin='https://www.linkedin.com/in/karan-lakhwani' name='Karan Lakhwani' image={Karan} />
          <TeamMemberCard github='https://github.com/suyash-more' linkedin='https://www.linkedin.com/in/suyashmore789/' name='Suyash More' image={More} />          
        </Row>
        <div className="m-r-3">
        <Row>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <TeamMemberCard github='https://github.com/noblecoder11' linkedin='https://www.linkedin.com/in/shreyash-halge-0a2877207/' name='Shreyash Halge' image={Shreyash} />
        <TeamMemberCard github='https://github.com/Chandolkar001' linkedin='https://www.linkedin.com/in/shreyas-chandolkar-056847214/' name='Shreyas Chandolkar' image={Shreyas} />
        </Row>
        </div>
      </Container>
    </div>
  );
};

export default WebTeam;
