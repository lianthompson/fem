import React from "react";
import Pet from "./Pet";
import { render } from "react-dom";

class App extends React.Component {
  handleTitleClick() {
    alert("You clicked the title");
  }
  render() {
    // return React.createElement("div", {}, [
    //   React.createElement(
    //     "h1",
    //     { onClick: this.handleTitleClick },
    //     "Adopt Me!"
    //   ),
    //   React.createElement(Pet, {
    //     name: "Luna",
    //     animal: "dog",
    //     breed: "Havanese"
    //   }),
    //   React.createElement(Pet, {
    //     name: "Satoshi",
    //     animal: "cat",
    //     breed: "Black"
    //   }),
    //   React.createElement(Pet, {
    //     name: "Nakamoto",
    //     animal: "cat",
    //     breed: "White"
    //   })
    // ]);

    return (
      <div>
        <h1 onClick={this.handleTitleClick}>Adopt me!</h1>
        <Pet name="Luna" animal="dog" breed="Havanese" />
        <Pet name="Satoshi" animal="cat" breed="Black" />
        <Pet name="Nakamoto" animal="cat" breed="White" />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
