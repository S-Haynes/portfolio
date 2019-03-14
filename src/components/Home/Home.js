import React from "react";
import { Container, Button, Row, Col, CardImg } from "reactstrap";
import BrandLogo from "../../assets/img/logo.jpg";

const Home = props => {
  return (
    <Container>
      <Row>
        <Col xs="6">
          <h1>Shaq Haynes</h1>
          <h1>Front-end/UI Developer</h1>
          <h6>Modern UI/UX / React Developer </h6>
          <div className="mt-4">
            <Button
              outline
              style={{
                color: "#08fdd8",
                border: "1px solid #08fdd8",
                backgroundColor: "transparent",
                letterSpacing: "1.5px"
              }}
            >
              CONTACT ME
            </Button>
          </div>
        </Col>
        <Col xs="6">
          <CardImg
            style={{ maxWidth: "300px", maxHeight: "400px" }}
            src={BrandLogo}
            alt="logo"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
