import React from "react";
import { Container, Row, Col } from "reactstrap";
import ReactLogo from "../../assets/img/react-logo.svg";

const Skills = props => {
  return (
    <Container
      className="d-flex align-items-center"
      style={{ height: "100%", width: "100%" }}
    >
      <Row>
        <Col xs="12">
          <h1 style={{ fontSize: "72px", color: "#08fdd8" }}>
            Skills & Experience
          </h1>
        </Col>
        <Col xs="12" sm="6">
          <p>
            Hey there! I'm Shaquille Haynes, a 25-year-old Freelance Front-end
            Developer. I consider myself an average dude who is passionate about
            coding & gaming. I love to create new, smart applications and
            percieve any design problem as a challenge worth overcoming.
          </p>
        </Col>
        <Col xs="12" sm="6">
          <p>
            I have been working as a Front-end Developer for a little more than
            a year now. Although, I am also experienced with backend
            technologies including Express and MongoDB. Check out a few of my
            full stack applications!
          </p>
        </Col>
      </Row>
      <img src={ReactLogo} alt="reactlogo" className="App-logo" />
    </Container>
  );
};
export default Skills;
