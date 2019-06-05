import React from "react";

class SearchParams extends React.Component {
  state = {
    location: "San Francisco, CA",
    animal: "",
    breed: ""
  };
  render() {
    return (
      <div className="search-params">
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={this.state.location}
            placeholder="Location"
          />
        </label>
      </div>
    );
  }
}

export default SearchParams;
