import { Col } from "react-bootstrap";

const TeamMemberCard = (props) => {
  return (
    
      <Col lg={4} md={4} sm={12}>
        <div className="team-member">
          <img src={props.image} />
          <h2>
            {props.name}
            <br />
            <a href={props.linkedin} target='_blank'><i class="fab fa-linkedin-in"></i></a>
          </h2>
        </div>
      </Col>
  );
};

export default TeamMemberCard;
