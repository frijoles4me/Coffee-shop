import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <h2 className="text-center col-xs-5 col-xs-offset-3">Login</h2>
          <form className="center-block">
            <div className="row" />
            <div className="row">
              <div className="form-group col-xs-5 col-xs-offset-3">
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
            <button
              type="submit"
              className="btn btn-primary col-xs-2 col-xs-offset-3"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
