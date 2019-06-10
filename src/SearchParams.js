import React from "react";
import Search from "./SearchBox";
import { navigate } from "@reach/router/lib/history";

class SearchParams extends React.Component {
  handleSearchSubmit() {
    navigate("/");
  }
  render() {
    return (
      <div className="search-route">
        <Search />
      </div>
    );
  }
}

export default SearchParams;
