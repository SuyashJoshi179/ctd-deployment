import {Modal} from 'react-bootstrap';


function ContactModal(props) {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Contact Us
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Siddharth Bora : +91-9403304652 <br/> Shrikrushna Zirape : +91-9834921293</p>
        </Modal.Body>
      </Modal>
    );
  }


export default ContactModal;