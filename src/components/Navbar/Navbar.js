import React from "react";
import { Link } from "react-router-dom";
import { CardImg } from "reactstrap";
import MiniLogo from "../../assets/img/minilogo.png";
import "./Navbar.css";
const Navbar = props => {
  return (
    <nav
      style={{
        height: "100%",
        width: "80px",
        position: "absolute",
        zIndex: "100",
        backgroundColor: "#181818",
        top: "0",
        left: "0"
      }}
      className="d-flex flex-column align-items-center"
    >
      <div className="mt-2">
        <Link to="/">
          <CardImg
            style={{ width: "50px", height: "50px" }}
            src={MiniLogo}
            alt="logo"
          />
        </Link>
      </div>
      <div
        style={{ width: "100%", height: "100%" }}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <Link className="mt-4" to="/">
          <i className="fas fa-home" />
        </Link>
        <Link className="mt-4" to="/about">
          <i className="far fa-user" />
        </Link>
        <Link className="mt-4" to="/skills">
          <i className="fas fa-cogs" />
        </Link>
        <Link className="mt-4" to="/work">
          <i className="far fa-eye" />
        </Link>
        <Link className="mt-4" to="/contact">
          <i className="far fa-envelope" />
        </Link>
      </div>
      <div
        style={{ width: "100%", height: "10%" }}
        className="d-flex flex-column justify-content-end align-items-center"
      >
        <a className="mt-4" href="/">
          <i className="fab fa-linkedin-in" />
        </a>
        <a className="mt-4" href="https://www.codepen.io/s-haynes">
          <i class="fab fa-codepen" />
        </a>
        <a className="mt-4 mb-4" href="https://www.github.com/s-haynes">
          <i class="fab fa-github" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
