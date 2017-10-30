import React, { Component } from 'react';
import Flat from './Flat';

class FlatList extends Component {
  renderFlats() {
    return this.props.flats.map((flat) => {
      return (<Flat
        flat={flat}
        selected={this.props.selectedFlat.id === flat.id}
        setSelectedFlat={this.props.setSelectedFlat}
      />);
    });
  }
  render() {
    return (<div className="flats">
      {this.renderFlats()}
    </div>);
  }
}

export default FlatList;
