import React, { Component } from "react";
import { Container, Row, Col, CardImg } from "reactstrap";
import BrandLogo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../../assets/img/logo.png";
import { ScaleLoader } from "react-spinners";
import "./Home.css";

class Home extends Component {
  state = {
    content: (
      <div
        style={{ background: "#000", width: "100vw", height: "100vh" }}
        className="animated slideInLeft d-flex align-items-center justify-content-center flex-column"
      >
        <CardImg
          src={Logo}
          style={{
            maxWidth: "200px",
            animation: "changeColor",
            animationDuration: "5s",
            background: "#000"
          }}
        />
        <h6 className="mt-4 mb-4">Loading something special...</h6>
        <ScaleLoader size={20} color="#08fdd8" />
      </div>
    )
  };
  componentDidMount() {
    setTimeout(
      () =>
        this.setState({
          content: (
            <Container style={{ width: "100%", height: "100%" }}>
              <Row
                className="d-flex justify-content-between align-items-center"
                style={{ width: "100%", minHeight: "100%" }}
              >
                <Col
                  className="animated bounceInDown title__info"
                  sm="12"
                  md="8"
                >
                  <h1>Shaq Haynes</h1>
                  <h1>
                    Front-end <span style={{ color: "#444" }}>/</span> UI
                    Developer
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
                <Col className="brandlogo" sm="12" md="4">
                  <CardImg
                    className="animated flipInY delay-1s brandlogo__img"
                    src={BrandLogo}
                    alt="logo"
                  />
                </Col>
              </Row>
            </Container>
          )
        }),
      3000
    );
  }
  render() {
    return this.state.content;
  }
}

export default Home;
