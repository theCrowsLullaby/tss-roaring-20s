import "./App.css";
import React, { Component } from "react";

class Options extends Component {
  constructor() {
    super();
    this.state = {};
  }

  setCurrent = (event) => {
    const { value } = event.target;
    this.props.setCurrent(value);
  };

  render() {
    var b0 = this.props.options.id0 ? (
      !this.props.options.id0.color ||
      this.props.extras.color.includes(this.props.options.id0.color) ? (
        <button
          id="b0"
          onClick={() => {
            this.props.setCurrent(this.props.options.id0.next);
          }}
        >
          {this.props.options.id0.text}
        </button>
      ) : (
        ""
      )
    ) : (
      ""
    );
    var b1 = this.props.options.id1 ? (
      !this.props.options.id1.color ||
      this.props.extras.color === this.props.options.id1.color ? (
        <button
          id="b1"
          onClick={() => {
            this.props.setCurrent(this.props.options.id1.next);
          }}
        >
          {this.props.options.id1.text}
        </button>
      ) : (
        ""
      )
    ) : (
      ""
    );
    var b2 = this.props.options.id2 ? (
      !this.props.options.id2.color ||
      this.props.extras.color === this.props.options.id2.color ? (
        <button
          id="b2"
          onClick={() => {
            this.props.setCurrent(this.props.options.id2.next);
          }}
        >
          {this.props.options.id2.text}
        </button>
      ) : (
        ""
      )
    ) : (
      ""
    );
    var b3 = this.props.options.id3 ? (
      !this.props.options.id3.color ||
      this.props.extras.color === this.props.options.id3.color ? (
        <button
          id="b3"
          onClick={() => {
            this.props.setCurrent(this.props.options.id3.next);
          }}
        >
          {this.props.options.id3.text}
        </button>
      ) : (
        ""
      )
    ) : (
      ""
    );
    return (
      <div>
        {b0}
        {b1}
        {b2}
        {b3}
      </div>
    );
  }
}

export default Options;
