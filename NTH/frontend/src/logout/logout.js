import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import {useHistory} from 'react-router-dom';
import './logout.css'
import {logout} from '../utils/index';

const Logout = () => {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleYes = () => {
    logout();
    handleClose();
    history.push("/");
  };
    return (
  <div>
        <button className='logout-button' onClick={handleShow}>
          Logout
        </button>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
          <Modal.Title>Log out</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           Are you sure you want to Log out?
          </Modal.Body>
            <Modal.Footer>
            <Button variant="default" onClick={handleYes} className="mybtn">Yes</Button>
            <Button variant="default" className="mybtn" onClick={handleClose}>
              No
            </Button>
            
          </Modal.Footer>
        </Modal>
        </div>
     );
}
 
export default Logout;