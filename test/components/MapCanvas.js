import React, { Component } from 'react';
import { Map, Marker } from 'location-backbone-react-map';

export default class extends Component {
  state = {
    showOverlays: true
  }

  render() {
    return (
      <Map
        mapKey={this.props.mapKey}
        mapVendor={this.props.mapVendor}>
        {this.state.showOverlays && <Marker
          position={{
            latitude: 31,
            longitude: 121
          }}
        />}
        <button
          style={{
            position: 'absolute',
            zIndex: 100
          }}
          onClick={() => {
            this.setState({
              showOverlays: !this.state.showOverlays
            })
          }}
        >
          显示/隐藏覆盖物
        </button>
      </Map>
    );
  }
}
