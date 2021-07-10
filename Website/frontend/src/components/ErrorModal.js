import { Modal } from "react-bootstrap";
import '../assets/css/ErrorModal.css'

const ErrorModal = ({show, handleClose}) => {
    return ( 
        <div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose}>
            Ok
          </button>
        </Modal.Footer>
      </Modal>
        </div>
     );
}
 
export default ErrorModal;