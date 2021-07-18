import { Container, Row, Col } from "react-bootstrap";

const QuestionFooter = () => {
  return (
    <div className='question-footer'>
      <a href="https://www.instagram.com/nth__live/?hl=en" target="_blank">
        <i className="fab fa-instagram  instagram"></i>
      </a>
      <a href="https://www.linkedin.com/company/pisbieee/" target="_blank">
        <i className="fab fa-linkedin-in  linkedin"></i>
      </a>
      <a href="https://www.facebook.com/NTHCredenz/" target="_blank">
        <i className="fab fa-facebook-f  facebook"></i>
      </a>
    </div>
  );
};

export default QuestionFooter;
