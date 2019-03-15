import React from "react";
import { Container, Button, Row, Col, CardImg } from "reactstrap";
import BrandLogo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
const Home = props => {
  return (
    <Container style={{ width: "100%", height: "100%" }}>
      <Row
        className="d-flex justify-content-between align-items-center"
        style={{ width: "100%", height: "100%" }}
      >
        <Col xs="8">
          <h1>Shaq Haynes</h1>
          <h1>
            Front-end <span style={{ color: "#444" }}>/</span> UI Developer
          </h1>
          <h6 style={{ color: "#777", letterSpacing: "3px" }}>
            Modern UI/UX / React Developer{" "}
          </h6>
          <div className="mt-4">
            <Link to="/contact">
              <Button
                outline
                style={{
                  color: "#08fdd8",
                  border: "1px solid #08fdd8",
                  backgroundColor: "transparent",
                  letterSpacing: "4px",
                  fontSize: "12px",
                  padding: "8px 10px"
                }}
                size="sm"
              >
                CONTACT ME
              </Button>
            </Link>
          </div>
        </Col>
        <Col xs="4">
          <CardImg
            style={{
              maxWidth: "400px",
              maxHeight: "500px"
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
