import React from "react";

const TeamMemberCard = (props) => {
  return (
    <div className="team-member">
      <img alt="Team Member" src={props.image} />
      <h2>
        {props.name} <br />
        <a target="_blank" href={props.linkedin} rel="noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </h2>
    </div>
  );
};

export default TeamMemberCard;
