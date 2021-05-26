import "./App.css";
import React, { Component } from "react";
import historia from "./hist.json";
import Options from "./Options.js";

var start = 18;
class App extends Component {
  constructor() {
    super();
    this.state = {
      options: historia[start].options,
      current: start,
      dialog: historia[start].text,
      background: "black",
      extras: {
        color: "green"
      }
    };
  }

  setCurrent = (val) => {
    var new_color = historia[val].options.color
      ? historia[val].options.color
      : this.state.extras.color;
    //console.log(new_color);
    //console.log(val, new_color);
    this.setState({
      current: val,
      options: historia[val].options,
      dialog: historia[val].text,
      extras: {
        color: new_color
      }
    });
  };

  render() {
    var text = this.state.dialog.split("\n").map((c) => {
      return <p> {c} </p>;
    });
    var me = this.state.current === 18 ? "@theCrowsLullaby (tumblr)" : "";
    var cover = "";
    var colo = "rgb(178, 207, 245)";
    if (historia[this.state.current].colo) {
      cover = (
        <img
          src={require(`./images/${this.state.current}.jpg`)}
          alt=""
          width="85%"
          height="50%"
        ></img>
      );
      colo = historia[this.state.current].colo;
    }
    const color = { backgroundColor: colo };

    return (
      <div className="background">
        <div className="App" style={color}>
          {cover}
          <div styles="color:white;">{me}</div>
          <div>{text}</div>
          <Options
            name="options"
            options={this.state.options}
            setCurrent={this.setCurrent}
            extras={this.state.extras}
          />
        </div>
      </div>
    );
  }
}

export default App;
