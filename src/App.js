import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./components/navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navigation />
        </Router>
        <div className="container">
          <header className="App-header">
            <h1 className="App-title">Welcome to Coffee Shop</h1>
          </header>
          <p className="App-intro">Good times start with great coffee</p>
        </div>
      </div>
    );
  }
}

export default App;
