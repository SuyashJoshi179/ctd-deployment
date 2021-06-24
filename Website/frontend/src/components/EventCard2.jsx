import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import "../assets/css/eventcard.css";
import ProfileModal from "./ProfileModal";

const EventCard2 = (props) => {
  //   const handleView = (e) => {
  //     alert(e);
  //   };
  console.log(props.eventCode);
  const [visible, setVisible] = useState(false);
  return (
    <div className="container1">
      <div className="card1">
        <div className="imgBx">
          <img alt="Event LOGO" src={props.icon} />
        </div>
        <div className="contentBx">
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
