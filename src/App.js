import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Shop from "./components/shop";
import Register from "./components/auth/register";
import Login from "./components/auth/login";

import Navigation from "./components/navbar";
import Body from "./components/body";
import Contacts from "./components/info/contact";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navigation />
            <Route exact path="/" component={Body} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
