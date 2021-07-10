// import Styles
import { Modal } from "react-bootstrap";

const RegisteredModal = ({show, onHide, registerMessage}) => {
    return ( 
        <div>
            <Modal  className='registration-modal' show={show} onHide={onHide}>
                <Modal.Header >
                </Modal.Header>
                <h4>{registerMessage}</h4>
                <button onClick={onHide}>
                    Ok
                </button>
            </Modal>
        </div>
     );
}
 
export default RegisteredModal;