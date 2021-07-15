import { Navbar, Nav } from "react-bootstrap";
import pisblogo from "./pisb-logo.png";
import ctdlogo from "./ctd.png";
import Logout from "../logout/logout";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { isLogin } from "../utils/index";
import "../App.css";

const NavbarComp = ({ eventDate }) => {
  const history = useHistory();
  const location = useLocation();

  if (!location.pathname.match("/question")) {
    if (isLogin() || eventDate - new Date().getTime() < 0) {
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
              <NavLink
                exact
                activeClassName="active"
                className="mr-3 ml-3 mt-2 mb-2 na-link"
                id="home"
                to="/"
              >
                Home
              </NavLink>

              <NavLink
                activeClassName="active"
                className="mr-3 ml-3 mt-2 mb-2 na-link"
                id="about"
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                activeClassName="active"
                className="mr-3 ml-3 mt-2 mb-2 na-link"
                id="contact"
                to="/contact"
              >
                Contact
              </NavLink>
              <NavLink
                activeClassName="active"
                to="/leaderboard"
                className="mr-3 ml-3 mt-2 mb-2 na-link"
              >
                Leaderboard
              </NavLink>
            </Nav>
            {true ? (
              <NavLink
                to={isLogin() ? "question/put_your_answer_here" : "hunt/"}
              >
                <button className="mr-3 ml-2 mt-2 mb-2 hunt-button">
                  Hunt
                </button>
              </NavLink>
            ) : null}
            <Navbar.Brand className="pisb-logo" href="https://www.pictieee.in/">
              <img src={pisblogo} width="110px" alt="PISB-logo" />
            </Navbar.Brand>
          </Navbar.Collapse>
        </Navbar>
      );
    }
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
            <NavLink
              exact
              activeClassName="active"
              className="mr-3 ml-3 mt-2 mb-2 na-link"
              id="home"
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              activeClassName="active"
              className="mr-3 ml-3 mt-2 mb-2 na-link"
              id="register"
              to="/register"
            >
              Register
            </NavLink>
            <NavLink
              activeClassName="active"
              className="mr-3 ml-3 mt-2 mb-2 na-link"
              id="about"
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              activeClassName="active"
              className="mr-3 ml-3 mt-2 mb-2 na-link"
              id="contact"
              to="/contact"
            >
              Contact
            </NavLink>
          </Nav>
          {/* <NavLink to=
          {
            isLogin()?"question/put_your_answer_here":"hunt/"
          }
          >
            <button className="mr-3 ml-2 mt-2 mb-2 hunt-button">Hunt</button>
          </NavLink> */}
          <Navbar.Brand className="pisb-logo" href="https://www.pictieee.in/">
            <img src={pisblogo} width="110px" alt="PISB-logo" />
          </Navbar.Brand>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  return null;
};

export default NavbarComp;
