const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement('h1', {}, props.name),
        React.createElement('h2', {}, props.animal),
        React.createElement('h2', {}, props.breed)
    ])
}

const App = () => {
    return React.createElement("div", {}, [
        React.createElement('h1', {}, "Adopt Me!"),
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
    ])
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))