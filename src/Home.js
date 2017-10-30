import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (<div className="home">
      Hello {this.props.name}
    </div>);
  }
}

export default Home;
