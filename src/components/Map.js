import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import FlatMarker from './FlatMarker';

class Map extends Component {
  renderFlatMarkers() {
    return this.props.flats.map((flat) => {
      return (<FlatMarker
        lat={flat.lat}
        lng={flat.lng}
        text={`${flat.price}€`}
        selected={this.props.selectedFlat.id === flat.id}
      />);
    });
  }
  render() {
    return (<div className="map">
      <GoogleMapReact
        key='AIzaSyDfXEDbHTqoWUcLIaQmdbx0SRBYXUBk3Cg'
        defaultCenter={[38.736946, -9.142685]}
        defaultZoom={12}
      >
        {this.renderFlatMarkers()}
      </GoogleMapReact>
    </div>);
  }
}

export default Map;
