import React, { Component } from 'react';

function buildOverlay(overlayName) {
  return (
    class extends Component {
      componentDidMount() {
        const { __map__, ...options } = this.props;
        this.overlay = __map__.addOverlay &&
          __map__.addOverlay(overlayName, options);
      }

      componentWillUnmount() {
        this.overlay && this.overlay.remove();
      }

      shouldComponentUpdate() {
        return false;
      }

      render() {
        return null;
      }
    }
  );
}

function buildDynamicOverlay(overlayName) {
  return (
    class extends buildOverlay(overlayName) {
      shouldComponentUpdate() {
        return true;
      }

      componentDidUpdate(prevProps) {
        this.overlay.setOptions && this.overlay.setOptions(this.props);
      }
    }
  );
}

export const DomMarker = buildOverlay('DomMarker');
export const Marker = buildOverlay('Marker');
export const Polyline = buildOverlay('Polyline');

export const DynamicMarker = buildDynamicOverlay('Marker');
