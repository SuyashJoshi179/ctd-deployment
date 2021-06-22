import React from "react";

const TeamMemberCard = (props) => {
  return (
    <div className="team-member">
        <img alt="Team Member" src={props.image} />
        <h2>
          {props.name} <br />
          <a href={props.linkedin}><i className="fab fa-linkedin-in"></i></a>
        </h2>
      </div>
  );
};

export default TeamMemberCard;
