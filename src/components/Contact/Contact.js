import React, { Component } from "react";
import {
  CardImg,
  Container,
  Form,
  FormGroup,
  Input,
  Col,
  Row
} from "reactstrap";
import Logo from "../../assets/img/logo.png";
import { ScaleLoader } from "react-spinners";
class Contact extends Component {
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
        <h6 className="mt-4 mb-4">Coffee it is.</h6>
        <ScaleLoader size={20} color="#08fdd8" />
      </div>
    )
  };

  componentDidMount() {
    setTimeout(
      () =>
        this.setState({
          content: (
            <Container>
              <Form>
                <Row>
                  <Col sm="6">
                    <Row>
                      <Col xs="12">
                        <h1 style={{ fontSize: "72px", color: "#08fdd8" }}>
                          Contact Me
                        </h1>
                      </Col>
                      <Col md="6" sm="12">
                        <FormGroup>
                          <Input
                            className="formInput"
                            style={{
                              color: "white",
                              background: "#111",
                              border: "none",
                              borderBottom: "1px solid #08fdd8"
                            }}
                            type="text"
                            name="name"
                            id="name"
                            placeholder="name"
                          />
                        </FormGroup>
                      </Col>
                      <Col md="6" sm="12">
                        <FormGroup>
                          <Input
                            className="formInput"
                            style={{
                              color: "white",
                              background: "#111",
                              border: "none",
                              borderBottom: "1px solid #08fdd8"
                            }}
                            type="email"
                            name="email"
                            id="email"
                            placeholder="email"
                          />
                        </FormGroup>
                      </Col>

                      <Col xs="12">
                        <FormGroup>
                          <Input
                            className="formInput"
                            style={{
                              color: "white",
                              background: "#111",
                              border: "none",
                              borderBottom: "1px solid #08fdd8"
                            }}
                            type="text"
                            name="subject"
                            id="subject"
                            placeholder="subject"
                          />
                        </FormGroup>
                      </Col>
                      <Col xs="12">
                        <FormGroup>
                          <Input
                            className="formInput"
                            style={{
                              color: "white",
                              background: "#111",
                              border: "none",
                              borderBottom: "1px solid #08fdd8"
                            }}
                            type="textarea"
                            name="message"
                            id="message"
                            placeholder="leave a message"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Col>
                  <Col sm="6" />
                </Row>
              </Form>
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

export default Contact;
