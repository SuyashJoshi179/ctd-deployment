import { Modal } from "react-bootstrap";
import React from "react";

const ProfileModal = (props) => {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header
        style={{
          backgroundColor: "#29a19c",
          display: "flex",
          justifyContent: "center",
          color: "#fff",
        }}
        closeButton
      >
        <Modal.Title id="contained-modal-title-vcenter">Event Code</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 style={{ color: "#fff", textAlign: "center" }}>{props.code}</h4>
      </Modal.Body>
    </Modal>
  );
};

export default ProfileModal;
