import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./components/navbar";
import Body from "./components/body";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navigation />
          </div>
        </Router>

        <div className="container">
          <Body />
        </div>
      </div>
    );
  }
}

export default App;
