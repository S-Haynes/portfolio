import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "reactstrap";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div style={{ paddingLeft: "80px" }} className="App">
          <Navbar />
          <div style={{ width: "100%", height: "100%" }} className="container">
            <Route path="/" exact component={Home} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/about" exact component={About} />
            <Route path="/skills" exact component={Skills} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
