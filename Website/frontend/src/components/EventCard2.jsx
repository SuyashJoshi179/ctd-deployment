import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import "../assets/css/eventcard2.css";
import ProfileModal from "./ProfileModal";
import "../pages/Events/Events.css";

const EventCard2 = (props) => {
  //   const handleView = (e) => {
  //     alert(e);
  //   };
  console.log(props.eventCode);
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState("");
  return (
    <div
      className="container1 d-flex justify-content-center mt-res"
      onMouseEnter={() => {
        setHover("hover");
      }}
      onMouseLeave={() => {
        setHover("");
      }}
    >
      <div className={`card1 ${hover}`}>
        <div className="imgBx">
          <img alt="Event LOGO" src={props.icon} className="event-img-border" />
        </div>
        <div className="contentBx contentBx-profile">
          <h3>{props.eventname}</h3>
          <div className="mt-3 mb-4">
            <Button
              className="details-btn-profile"
              onClick={() => setVisible(true)}
            >
              View
            </Button>
            <ProfileModal
              code={props.eventCode}
              show={visible}
              onHide={() => setVisible(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard2;
