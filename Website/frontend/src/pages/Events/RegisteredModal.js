// import Styles
import { Modal } from "react-bootstrap";

const RegisteredModal = ({show, onHide}) => {
    return ( 
        <div>
            <Modal  className='registration-modal' show={show} onHide={onHide}>
                <Modal.Header closeButton>
                </Modal.Header>
                <h4>You've registered successfully!</h4>
                <button onClick={onHide}>
                    Ok
                </button>
            </Modal>
        </div>
     );
}
 
export default RegisteredModal;