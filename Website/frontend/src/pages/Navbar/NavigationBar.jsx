/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Navbar, Nav, Button, Dropdown } from "react-bootstrap";
import CTDlogo from "../../assets/img/ctd.png";
import { NavLink as Link } from "react-router-dom";
import "./Nav.css";
import { isLogin, logout } from "../../components/utils/index";
import { HashLink } from "react-router-hash-link";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const NavigationBar = () => {
  const history = useHistory();
  const [visible, setVisible] = useState(false);

  const changeBackground = () => {
    if (window.scrollY < 80) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const handleLogout = () => {
    logout();
    history.push("/");
    window.location.reload();
  };

  if (isLogin()) {
    return (
      <Navbar
        className={
          visible ? "active-nav nav-bar sticky-top" : "nav-bar sticky-top"
        }
        collapseOnSelect
        expand="xl"
      >
        <Navbar.Brand>
          <Link to="/">
            <img alt="CTDLOGO" src={CTDlogo} className="logo" width="100px" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Link className="na-link" activeClassName="nav-selected" to="/">
              Home
            </Link>
            <HashLink className="na-link" to="/About/#section-aboutCTD">
              About
            </HashLink>
            <Link className="na-link" to="/events">
              Events
            </Link>
            <Link className="na-link" to="ContactUs">
              Contact
            </Link>
          </Nav>
          <Dropdown className="na-dropdown">
            <Dropdown.Toggle id="dropdown-basic">My Profile</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/my-profile">My Profile</Dropdown.Item>
              <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Navbar>
    );
  }

  return (
    <Navbar
      className={
        visible ? "active-nav nav-bar sticky-top" : "nav-bar sticky-top"
      }
      collapseOnSelect
      expand="xl"
    >
      <Navbar.Brand>
        <Link to="/">
          <img alt="CTDLOGO" src={CTDlogo} className="logo" width="100px" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto">
          <Link exact className="na-link" to="/" activeClassName="nav-selected">
            Home
          </Link>
          <HashLink exacr className="na-link" to="/About/#section-aboutCTD">
            About
          </HashLink>
          <Link
            exact
            className="na-link"
            to="/events"
            activeClassName="nav-selected"
          >
            Events
          </Link>
          <Link
            exact
            className="na-link"
            to="/ContactUs"
            activeClassName="nav-selected"
          >
            Contact
          </Link>
        </Nav>
        <Nav className="margin-auto">
          <Link exact className="na-link login" to="/login">
            <Button size="lg" variant="link">
              Login
            </Button>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
