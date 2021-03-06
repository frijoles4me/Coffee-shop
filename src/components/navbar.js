import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { bootstrapUtils } from "react-bootstrap/lib/utils";

bootstrapUtils.addStyle(Navbar, "custom");

export default class Navigation extends Component {
  render() {
    var styles = {
      backgroundColor: "#6F4E37",
      color: "#ff0000"
    };
    return (
      <Navbar collapseOnSelect style={styles} bsStyle="inverse">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Coffee Shop</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="Shop">
              Shop
            </NavItem>
            <NavItem eventKey={2} to="#">
              Link
            </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1} href="/contacts">
                Contact Us
              </MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="/login">
              Login
            </NavItem>
            <NavItem eventKey={2} href="/register">
              Register
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
