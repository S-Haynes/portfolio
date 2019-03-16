import React from "react";
import { Container, Row, Col, CardImg } from "reactstrap";
import Timeline from "../../assets/img/timeline.png";
import { Link } from "react-router-dom";

const About = props => {
  return (
    <Container
      className="d-flex align-items-center"
      style={{ height: "100%", width: "100%" }}
    >
      <Row>
        <Col xs="12">
          <h1
            className="mt-4 animated jackInTheBox"
            style={{ fontSize: "72px", color: "#08fdd8" }}
          >
            About Me
          </h1>
        </Col>
        <Col xs="12" sm="6">
          <p style={{ fontSize: "18px" }}>
            Hey there! I'm Shaquille Haynes, a 25-year-old Freelance Front-end
            Developer. I consider myself an average dude who is passionate about
            coding & gaming. I love to create new, smart applications and
            percieve any design problem as a challenge worth overcoming.
          </p>
        </Col>
        <Col xs="12" sm="6">
          <p style={{ fontSize: "18px" }}>
            I have been working as a Front-end Developer for a little more than
            a year now. I am personally a <em>huge</em> fan of working with
            React and dabbling in all of its intricacies, but I am also
            experienced with backend technologies including Express and MongoDB.{" "}
            <Link to="/work">
              <u style={{ color: "#08fdd8" }}>Check out</u>
            </Link>{" "}
            a few of my full stack applications!
          </p>
        </Col>
        <Col xs="12">
          <CardImg
            className="animated flipInY delay-1s"
            src={Timeline}
            alt="timeline"
          />
        </Col>
      </Row>
    </Container>
  );
};
export default About;
