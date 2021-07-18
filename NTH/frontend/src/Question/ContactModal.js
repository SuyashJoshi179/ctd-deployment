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
          <p>Siddharth Bora : <span><a href="tel:+919403304652">+91 94033 04652 </a></span><br/> Shrikrushna Zirape : <span><a href="tel:+919834921293">+91 98349 21293</a></span></p>
        </Modal.Body>
      </Modal>
    );
  }


export default ContactModal;