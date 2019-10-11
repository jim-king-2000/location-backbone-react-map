import React, { Component } from 'react';
import { Map, Marker } from 'location-backbone-react-map';

export default class extends Component {
  state = {
    showOverlays: true,
    position: {
      latitude: 31,
      longitude: 121
    },
    angle: 0
  }

  render() {
    return (
      <Map
        mapKey={this.props.mapKey}
        mapVendor={this.props.mapVendor}>
        {this.state.showOverlays &&
          <Marker
            position={this.state.position}
            title={JSON.stringify(this.state.position)}
            angle={this.state.angle}
          />
        }
        <div
          style={{
            position: 'absolute',
            top: 0,
            zIndex: 5000
          }}
        >
          <button
            onClick={() => {
              this.setState({
                showOverlays: !this.state.showOverlays
              })
            }}
          >
            显示/隐藏覆盖物
          </button>
          <button
            onClick={() => {
              this.setState({
                position: {
                  latitude: this.state.position.latitude + 0.01,
                  longitude: this.state.position.longitude
                },
                angle: this.state.angle + 10
              })
            }}
          >
            移动覆盖物
          </button>
        </div>
      </Map>
    );
  }
}
