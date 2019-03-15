import React from "react";
import { Col, Row, CardImg } from "reactstrap";

const WorkItem = props => {
  return (
    <Col className="mt-4" xs="12">
      <Row style={{ backgroundColor: "#181818", padding: "2rem" }}>
        <Col sm="12" md="5">
          <u>
            <h6>2018</h6>
          </u>
          <h2>Movie Junkie</h2>
          <h6>React / Express / MongoDB / NodeJS</h6>
          <p className="mt-4">
            Full stack MERN application utilizing The Movie Database (TMDB) API.
            Users are able to authenticate themselves and create movie
            bucketlists, as well as stream movies on the platform.
          </p>
          <a href={props.link}>See it live</a>
        </Col>
        <Col className="d-flex justify-content-end" sm="12" md="7">
          <CardImg
            style={{
              maxWidth: "600px",
              height: "100%"
            }}
            src={props.logo}
          />
        </Col>
      </Row>
    </Col>
  );
};

export default WorkItem;
