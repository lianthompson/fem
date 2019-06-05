import React from "react";
import { ANIMALS } from "petfinder-client";

class SearchParams extends React.Component {
  state = {
    location: "San Francisco, CA",
    animal: "",
    breed: ""
  };

  handleLocationChange = e => {
    this.setState({
      location: e.target.value
    });
  };
  handleAnimalChange = e => {
    this.setState({
      animal: e.target.value
    });
  };
  render() {
    return (
      <div className="search-params">
        <label htmlFor="location">
          Location
          <input
            onChange={this.handleLocationChange}
            id="location"
            value={this.state.location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={this.state.animal}
            onChange={this.handleAnimalChange}
            onBlur={this.handleAnimalChange}
          >
            <option />
            {ANIMALS.map(animal => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
      </div>
    );
  }
}

export default SearchParams;
