import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div
          style={{
            paddingLeft: "80px",
            width: "100%",
            minHeight: "100%",
            backgroundColor: "#222",
            position: "relative",
            display: "flex",
            alignItems: "center"
          }}
        >
          <Navbar />
          <div className="App">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/about" exact component={About} />
              <Route path="/skills" exact component={Skills} />
              <Route path="/work" exact component={Work} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
