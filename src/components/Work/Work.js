import React from "react";
import { Container, Row, Col } from "reactstrap";
import WorkItem from "./WorkItem/WorkItem";
import WorkImage1 from "../../assets/img/work1.png";
import WorkImage2 from "../../assets/img/work2.png";

const Work = props => {
  return (
    <div
      style={{
        minHeight: "100%",
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        background: "#222"
      }}
    >
      <Container
        className="d-flex"
        style={{
          height: "100%",
          width: "100%"
        }}
      >
        <Row>
          <Col xs="12" className="text-center mt-4">
            <h1 style={{ fontSize: "72px", color: "#08fdd8" }}>My Work</h1>
          </Col>
          <WorkItem link="https://mjunkie.herokuapp.com" logo={WorkImage1} />
          <WorkItem
            link="https://bigboysgroup.herokuapp.com"
            logo={WorkImage2}
          />
        </Row>
      </Container>
    </div>
  );
};

export default Work;
