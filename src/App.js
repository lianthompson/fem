import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Loadable from "react-loadable";
import Navbar from "./Navbar";
import { Provider } from "react-redux";
import store from "./store";

const LoadableDetails = Loadable({
  loader: () => import("./Details"),
  loading() {
    return <h1>loading split out code ...</h1>;
  }
});

const LoadableResults = Loadable({
  loader: () => import("./Results"),
  loading() {
    return <h1>loading split out code ...</h1>;
  }
});

const LoadableSearchParams = Loadable({
  loader: () => import("./Results"),
  loading() {
    return <h1>loading split out code ...</h1>;
  }
});

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Provider store={store}>
          <Router>
            <LoadableResults path="/" />
            <LoadableDetails path="/details/:id" />
            <LoadableSearchParams path="/search-params" />
          </Router>
        </Provider>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
