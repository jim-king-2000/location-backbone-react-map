import React, { Component } from 'react';
import LoadAPI from '../utils/APILoader';
import GetMapClass from '../utils/MapFactory';

export class Map extends Component {
  container = React.createRef();

  async componentDidMount() {
    const mapKey = this.props.mapKey;
    const NativeMapClass = GetMapClass(this.props.mapVendor);
    if (NativeMapClass.LoadType.async) {
      window[NativeMapClass.LoadType.startup] =
        () => this.createMap(NativeMapClass);
    }
    await LoadAPI(NativeMapClass, mapKey);
    if (!NativeMapClass.LoadType.async) {
      this.createMap(NativeMapClass);
    }
  }

  createMap(NativeMapClass) {
    if (!this.map) {
      this.map = new NativeMapClass(this.container.current);
    }
  }

  render() {
    return <div
      ref={this.container}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative'
      }}
    />;
  }
}