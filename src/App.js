const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  ]);
};
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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
