import { Modal } from "react-bootstrap";
import '../assets/css/ErrorModal.css'

const ErrorModal = ({show, handleClose, signupError}) => {
    return ( 
        <div>
        <Modal className='error-modal' show={show} onHide={handleClose}>
          <Modal.Header>
          </Modal.Header>
          <Modal.Body>
            <h4>{
              signupError
              }</h4>
          </Modal.Body>
          <button onClick={handleClose}>
              Ok
            </button>
        </Modal>
        </div>
     );
}
 
export default ErrorModal;