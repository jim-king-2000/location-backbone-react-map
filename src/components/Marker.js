import React, { Component } from 'react';

export class Marker extends Component {
  componentDidMount() {
    const { __map__, ...options } = this.props;
    this.marker = __map__.addOverlay &&
      __map__.addOverlay('Marker', options);
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