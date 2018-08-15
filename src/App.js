import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/auth/register";

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
            <Route exact path="/" component={Body} />
            <Route exact path="/register" component={Register} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
