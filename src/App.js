import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Adopt me!</h1>
        <Pet name="Luna" animal="dog" breed="Havanese" />
        <Pet name="Satoshi" animal="cat" breed="Black" />
        <Pet name="Nakamoto" animal="cat" breed="White" />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
