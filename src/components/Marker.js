import React, { Component } from 'react';

export class Marker extends Component {
  componentDidMount() {
    const { __map__, position, ...options } = this.props;
    this.marker = __map__.addMarker && __map__.addMarker(position, options);
  }

  componentWillUnmount() {
    this.marker && this.marker.remove();
  }

  shouldComponentUpdate() {
    return false;
  }
  
  render() {
    return null;
  }
}