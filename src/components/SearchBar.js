import React from "react";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.SearchingCountry = this.SearchingCountry.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("don't refresh");
  }
  SearchingCountry(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.SearchingCountry} />
        <button onClick={() => this.props.onClick(this.state.name)}>
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;
