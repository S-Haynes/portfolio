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
import Loading from "../Loading/Loading";

class Contact extends Component {
  state = {
    content: <Loading text="Coffee it is." />
  };

  componentDidMount() {
    setTimeout(
      () =>
        this.setState({
          content: (
            <Container>
              <Form>
                <Row>
                  <Col sm="12" md="8">
                    <Row>
                      <Col xs="12">
                        <h1
                          style={{
                            fontSize: "72px",
                            color: "#08fdd8",
                            opacity: "0.9"
                          }}
                        >
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
                              borderBottom: "1px solid #08fdd8",
                              height: "350px"
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
