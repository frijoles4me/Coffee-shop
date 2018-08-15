import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

export default class Body extends Component {
  render() {
    return (
      <div className="container">
        <Carousel>
          <Carousel.Item>
            <img
              width={3000}
              height={600}
              alt="900x500"
              src="https://images.pexels.com/photos/769153/pexels-photo-769153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
            <Carousel.Caption>
              <h1 className="App-title">Welcome to Coffee Shop</h1>
              <p className="App-intro">Good times start with great coffee</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width={2000}
              height={600}
              alt="900x500"
              src="https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width={2000}
              height={600}
              alt="900x500"
              src="https://images.pexels.com/photos/6659/coffee-cup-mug-cafe.jpg?cs=srgb&dl=cafe-chemex-coffee-6659.jpg&fm=jpg"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
