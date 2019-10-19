import React, { Component } from 'react';

export class DomMarker extends Component {
  componentDidMount() {
    const { __map__, ...options } = this.props;
    if (__map__.addOverlay) {
      this.polyline = __map__.addOverlay('DomMarker', options);
      return;
    }
    this.marker = __map__.addDomMarker && __map__.addDomMarker(options);
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