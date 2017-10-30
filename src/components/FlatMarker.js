import React, { Component } from 'react';

class FlatMarker extends Component {
  render() {
    return (<div className={`flat-marker ${this.props.selected ? 'active' : ''}`}>
      {this.props.text}
    </div>);
  }
}

export default FlatMarker;
