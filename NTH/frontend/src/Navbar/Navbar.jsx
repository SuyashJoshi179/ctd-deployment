import { Navbar, Nav } from "react-bootstrap";
import pisblogo from "./pisb-logo.png";
import ctdlogo from "./ctd.png";
import Logout from "../logout/logout"
import { Link, useLocation, useHistory } from "react-router-dom";
import {isLogin} from '../utils/index';
import "../App.css";

const NavbarComp = () => {
  const history = useHistory();
  const location = useLocation();

  if (!location.pathname.match("/question")) {
    return (
      <Navbar
        className="nav-bar pt-2 pb-2 pl-4 pr-2"
        variant="dark"
        expand="lg"
      >
        <Navbar.Brand href="/">
          <img src={ctdlogo} width="110px" alt="PISB-logo" />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <a className="mr-3 ml-3 mt-2 mb-2 na-link" id="home" href="/">
              Home
            </a>

            <a
              className="mr-3 ml-3 mt-2 mb-2 na-link"
              id="register"
              href="/register"
            >
              Register
            </a>
            <a className="mr-3 ml-3 mt-2 mb-2 na-link" id="about" href="/about">
              About
            </a>
            <a
              className="mr-3 ml-3 mt-2 mb-2 na-link"
              id="contact"
              href="/contact"
            >
              Contact
            </a>
            <a href="/leaderboard" className="mr-3 ml-3 mt-2 mb-2 na-link">
              Leaderboard
            </a>
          </Nav>
          <Link to=
          {
            isLogin()?"question/put_your_answer_here":"hunt/"
          }
          >
            <button className="mr-3 ml-2 mt-2 mb-2 hunt-button">Hunt</button>
          </Link>
          <Navbar.Brand className='pisb-logo' href="https://www.pictieee.in/">
            <img src={pisblogo} width="110px" alt="PISB-logo" />
          </Navbar.Brand>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  return null;
};

export default NavbarComp;
