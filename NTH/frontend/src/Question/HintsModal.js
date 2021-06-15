import {Modal} from 'react-bootstrap'


const HintsModal = (props) => {
    return (
        <Modal
          {...props}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Hints
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              {props.data.tips}
            </p>
          </Modal.Body>
        </Modal>
      );
}
 
export default HintsModal;