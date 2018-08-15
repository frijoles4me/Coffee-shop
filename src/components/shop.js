import React, { Component } from "react";
import Coffee from "../img/Coffee.jpg";

export default class Shop extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <img src={Coffee} alt="..." class="img-thumbnail" />
          <div>Jamaican dark coffee</div>
        </div>
      </div>
    );
  }
}
