import React, { Component } from 'react';
import LoadAPI from '../utils/APILoader';
import BuildMap from '../utils/MapFactory';

export class Map extends Component {
  container = React.createRef();

  async componentDidMount() {
    const mapKey = this.props.mapKey;
    if (!mapKey) {
      console.error('Wrong key of map.');
      return;
    }

    const NativeMap = BuildMap(this.props.mapVendor);
    window.initialize = () => {
      this.map = new NativeMap(this.container.current);
    };
    return LoadAPI(NativeMap.buildScriptTag(mapKey));
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