import React, { Component } from 'react';

class Flat extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);    
  }
  handleClick() {
    this.props.setSelectedFlat(this.props.flat);
  }
  render() {
    const { flat, selected } = this.props;

    return (<div
      className={`flat ${selected ? 'active' : ''}`}
      onClick={this.handleClick}
    >
      <img className="flat-picture" src={flat.imageUrl} />
      <div className="flat-title">{flat.price}€ - {flat.name}</div>
    </div>);
  }
}

export default Flat;


