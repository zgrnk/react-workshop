import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    }

    this.handleChange = this.handleChange.bind(this); 
  }
  handleChange(evt) {
    console.log(evt.target.value);
    this.setState({ search: evt.target.value })
  }
  render() {
    return (<div className="search">
      <input
        type="text"
        placeholder="Search..."
        value={this.state.search}
        onChange={this.handleChange}
      />
    </div>);
  }
}

export default Search;
