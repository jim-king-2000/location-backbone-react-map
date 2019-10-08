import React, { Component } from 'react';
import LoadAPI from '../utils/APILoader';

export class Map extends Component {
  container = React.createRef();

  async componentDidMount() {
    const mapKey = this.props.mapKey;
    if (!mapKey) {
      console.error('Wrong key of map.');
      return;
    }

    await LoadAPI(mapKey);
    this.map = new window.AMap.Map(this.container.current)
  }

  render() {
    return <div
      ref={this.container}
      style={{
        width: '100%',
        height: '100%'
      }}
    />;
  }
}