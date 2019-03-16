import React from "react";
import { Container, Row, Col } from "reactstrap";
import WorkItem from "./WorkItem/WorkItem";
import WorkImage1 from "../../assets/img/work1.png";
import WorkImage2 from "../../assets/img/work2.png";
import WorkImage3 from "../../assets/img/work3.png";
import WorkImage4 from "../../assets/img/work4.png";

const Work = props => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%"
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
            <h1 style={{ fontSize: "72px", color: "#08fdd8" }}>Recent Work</h1>
          </Col>
          <div className="animated fast jackInTheBox">
            <WorkItem
              title="Movie Junkie"
              year="2018"
              tech="React / Express / MongoDB / NodeJS"
              info="Full stack MERN application utilizing The Movie Database (TMDB) API.
            Users are able to authenticate themselves and create movie
            bucketlists, as well as stream movies on the platform."
              link="https://mjunkie.herokuapp.com"
              logo={WorkImage1}
            />
          </div>
          <div className="animated jackInTheBox fast delay-1s">
            <WorkItem
              title="Big Boys Group"
              year="2018"
              tech="EJS / Express / MongoDB / NodeJS"
              info="Full stack application using EJS as a templating engine. Developed with a backend admin portal where the client is able to update costs and product names available for sale."
              link="https://bigboysgroup.herokuapp.com"
              logo={WorkImage2}
            />
          </div>
          <div className="animated jackInTheBox fast delay-2s">
            <WorkItem
              title="Cart Secure"
              year="2018"
              tech="Wordpress / CSS"
              info="Wordpress website built for a client, utilizing a multitude of plugins including WooCommerce and Mailchimp."
              link="https://cartsecure.io"
              logo={WorkImage3}
            />
          </div>
          <div className="animated jackInTheBox fast delay-3s">
            <WorkItem
              title="My Twitch"
              year="2018"
              tech="HTML / CSS / JS"
              info="Small application using the twitch.tv API to display channels I follow on my personal twitch, as well as online activity."
              link="https://mytwitch.surge.sh"
              logo={WorkImage4}
            />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Work;
