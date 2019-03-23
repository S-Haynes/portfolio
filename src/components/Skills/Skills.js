import React, { Component } from "react";
import { Container, Row, Col, Table, CardImg } from "reactstrap";
import ReactLogo from "../../assets/img/react-logo.svg";
import "./Skills.css";
import Logo from "../../assets/img/logo.png";
import { ScaleLoader } from "react-spinners";
class Skills extends Component {
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
        <h6 className="mt-4 mb-4">Fresh out the oven...</h6>
        <ScaleLoader size={20} color="#08fdd8" />
      </div>
    )
  };

  componentDidMount() {
    setTimeout(
      () =>
        this.setState({
          content: (
            <Container
              className="d-flex"
              style={{
                height: "100%",
                width: "100%",
                flex: "1"
              }}
            >
              <Row className="mt-4">
                <Col className="mb-4" xs="12">
                  <h1
                    className="animated fadeInDown"
                    style={{ fontSize: "72px", color: "#08fdd8" }}
                  >
                    Skills & Experience
                  </h1>
                </Col>
                <Col className="mb-4" xs="12" sm="6">
                  <p>
                    My primary area of expertise is in front-end development
                    (client side of the web).
                  </p>
                  <p>
                    I am well-versed in HTML, CSS and JS. I primarily build
                    small to medium web apps with React or vanilla JS, designing
                    interactive layouts and working with different API's.
                  </p>
                  <p>
                    Here is a selection of relevant technologies that I am
                    experienced in using:
                  </p>
                </Col>
                <Col
                  className="d-flex justify-content-center"
                  style={{ marginTop: "-100px" }}
                  xs="12"
                  sm="6"
                >
                  <CardImg
                    src={ReactLogo}
                    style={{ maxWidth: "250px" }}
                    alt="reactlogo"
                    className="App-logo"
                  />
                </Col>

                <Col xs="12">
                  <Container
                    className="animated fadeInUp fast"
                    style={{
                      background: "rgba(0, 0, 0, 0.1)",
                      padding: "50px"
                    }}
                  >
                    <Table borderless responsive>
                      <thead>
                        <tr>
                          <th>
                            LANGUAGES <hr />
                          </th>
                          <th>
                            METHOD & TOOLS <hr />
                          </th>
                          <th>
                            FRAMEWORKS & LIBS <hr />
                          </th>
                          <th>
                            ADDITIONAL <hr />
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>HTML5 (Handlebars, EJS)</td>
                          <td>Webpack, NPM Scripts</td>
                          <td>Wordpress</td>
                          <td>Git, GitHub</td>
                        </tr>
                        <tr>
                          <td>CSS3 (SCSS)</td>
                          <td>BEM, SASS</td>
                          <td>Bootstrap 4, Animate.css</td>
                          <td>Flexbox, Grid</td>
                        </tr>
                        <tr>
                          <td>JavaScript (ES6)</td>
                          <td>OOP, Functional</td>
                          <td>React, jQuery</td>
                          <td>Gulp</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Container>
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

export default Skills;
