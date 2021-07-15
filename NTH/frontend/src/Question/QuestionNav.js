import {  Navbar } from "react-bootstrap";
import CTDlogo from "./ctd.png";
import "./Question.css";
import Logout from "../logout/logout";

const QuestionNav = () => {
  return (
    <Navbar className="nav-bar-question-page" expand="lg">
      <Navbar.Brand href="/">
        <img src={CTDlogo} width="110px" alt="PISB-logo" />
      </Navbar.Brand>
      <Logout />
    </Navbar>
  );
};

export default QuestionNav;

