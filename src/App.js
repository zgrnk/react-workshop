import React, { Component } from 'react';
import Home from './Home';
import FlatList from './components/FlatList';
import Map from './components/Map';
import Search from './components/Search';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: [],
      selectedFlat: {},
    }

    this.setSelectedFlat = this.setSelectedFlat.bind(this);
  }
  setSelectedFlat(flat) {
    this.setState({ selectedFlat: flat });
  }
  componentDidMount() {
    fetch('https://raw.githubusercontent.com/nmajor/react-workshop-lisbon-data/master/flats2.json')
    .then(response => response.json())
    .then((data) => {
      this.setState({ flats: data });
    });
  }
  render() {
    return (
      <div class="app">
        <div class="main">
          <Search />
          <FlatList
            flats={this.state.flats}
            selectedFlat={this.state.selectedFlat}
            setSelectedFlat={this.setSelectedFlat}
          />
        </div>
        <Map
          flats={this.state.flats}
          selectedFlat={this.state.selectedFlat}
        />
      </div>
    );
  }
}

export default App;
