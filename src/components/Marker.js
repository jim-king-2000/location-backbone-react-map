import React, { Component } from 'react';

export class Marker extends Component {
  componentDidMount() {
    const __map__ = this.props.__map__;
    if (!__map__.addMarker) return;
    this.marker = __map__.addMarker(this.props.position);
  }

  componentWillUnmount() {
    const __map__ = this.props.__map__;
    if (!__map__.removeMarker) return;
    __map__.removeMarker(this.marker);
  }

  render() {
    return null;
  }
}