import "./App.css";
import React, { Component } from "react";

class Image extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="IMG">
        <img src={require("./images/1.jpg")} />
      </div>
    );
  }
}
export default Image;
