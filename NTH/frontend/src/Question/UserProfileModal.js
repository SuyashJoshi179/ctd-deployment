import { Modal, Button } from "react-bootstrap";
import {useState,useEffect} from 'react';
import axiosInstance from '../axios'

const UserProfileModal = (props) => {
  
  return (
    <div>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Profile
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Username : {props.data.username}</h4>
          <h5>Level : {props.data.level}</h5>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UserProfileModal;
