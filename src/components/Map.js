import React, { Component } from 'react';
import LoadAPI from '../utils/APILoader';
import GetMapClass from '../utils/MapFactory';

export class Map extends Component {
  container = React.createRef();

  async componentDidMount() {
    const mapKey = this.props.mapKey;
    const NativeMapClass = GetMapClass(this.props.mapVendor);
    window[NativeMapClass.callbackName()] = () => {
      this.map = new NativeMapClass(this.container.current);
    };
    return LoadAPI(NativeMapClass, mapKey);
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