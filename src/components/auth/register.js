import React, { Component } from "react";

export default class Register extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <h2 className="text-center">Register to Coffee Shop</h2>
          <p className="lead text-center"> Register for daily deals</p>
          <form className="center-block">
            <div className="row">
              <div className="form-group col-xs-5 col-xs-offset-3">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter email"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-xs-5 col-xs-offset-3">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter email"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-xs-5 col-xs-offset-3">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-xs-5 col-xs-offset-3">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="checkbox col-xs-offset-3">
              <label>
                <input type="checkbox" /> Remember me
              </label>
            </div>
            <button type="submit" className="btn btn-default col-xs-offset-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
