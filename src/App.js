import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "reactstrap";
import Home from "./components/Home/Home";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
