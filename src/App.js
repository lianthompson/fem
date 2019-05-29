import React from "react";
import Pet from "./Pet.js";
import { render } from "react-dom";

class App extends React.Component {
  handleTitleClick() {
    alert("You clicked the title");
  }
  render() {
    return React.createElement("div", {}, [
      React.createElement(
        "h1",
        { onClick: this.handleTitleClick },
        "Adopt Me!"
      ),
      React.createElement(Pet, {
        name: "Luna",
        animal: "dog",
        breed: "Havanese"
      }),
      React.createElement(Pet, {
        name: "Satoshi",
        animal: "cat",
        breed: "Black"
      }),
      React.createElement(Pet, {
        name: "Nakamoto",
        animal: "cat",
        breed: "White"
      })
    ]);
  }
}

render(React.createElement(App), document.getElementById("root"));
