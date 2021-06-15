import { Col } from "react-bootstrap";

const TeamMemberCard = (props) => {
  return (
    
      <Col lg={6} md={6} sm={12}>
        <div className="team-member">
          <img src={props.image} />
          <h2>
            Ray Jameson
            <br />
            <i class="fab fa-linkedin-in"></i>
          </h2>
        </div>
      </Col>
  );
};

export default TeamMemberCard;
