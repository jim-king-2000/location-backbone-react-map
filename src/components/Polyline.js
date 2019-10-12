import React, { Component } from 'react';

export class Polyline extends Component {
  componentDidMount() {
    const { __map__, path, ...options } = this.props;
    this.polyline = __map__.addPolyline && __map__.addPolyline(path, options);
  }

  componentWillUnmount() {
    this.polyline && this.polyline.remove();
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return null;
  }
}