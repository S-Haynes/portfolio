import React from "react";
import { Container, Row, Col, CardImg } from "reactstrap";
import BrandLogo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
const Home = props => {
  return (
    <Container style={{ width: "100%", height: "100%" }}>
      <Row
        className="d-flex justify-content-between align-items-center"
        style={{ width: "100%", minHeight: "100%" }}
      >
        <Col className="animated bounceInDown" xs="8">
          <h1>Shaq Haynes</h1>
          <h1>
            Front-end <span style={{ color: "#444" }}>/</span> UI Developer
          </h1>
          <h6 style={{ color: "#777", letterSpacing: "3px" }}>
            Modern UI/UX / React Developer{" "}
          </h6>
          <div className="mt-4">
            <Link to="/contact">
              <Button text="CONTACT ME" />
            </Link>
          </div>
        </Col>
        <Col xs="4">
          <CardImg
            className="animated flipInY delay-1s"
            style={{
              maxWidth: "400px",
              maxHeight: "500px",
              animationDuration: "3s"
            }}
            src={BrandLogo}
            alt="logo"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
