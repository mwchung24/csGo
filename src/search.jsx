import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({input: e.currentTarget.value});
    this.props.search(e.currentTarget.value);
  }

  render() {
    return (
      <input onChange = {this.handleChange} className="searchBar" placeholder="Search"></input>
    );
  }
}

export default Search;
