import React from "react";
import SearchBox from "./SearchBox";
import { navigate } from "@reach/router/lib/history";

class SearchParams extends React.Component {
  handleSearchSubmit() {
    navigate("/");
  }
  render() {
    return (
      <div className="search-route">
        <SearchBox />
      </div>
    );
  }
}

export default SearchParams;
