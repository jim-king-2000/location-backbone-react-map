import React, { Component } from 'react';
import {
  DomMarker,
  DynamicMarker,
  Map,
  Marker,
  Polyline,
  CarTopView } from 'location-backbone-react-map';

export default class extends Component {
  state = {
    showOverlays: true,
    position: {
      latitude: 31,
      longitude: 121
    },
    angle: 45
  }

  render() {
    return (
      <Map
        mapKey={this.props.mapKey}
        mapVendor={this.props.mapVendor}
        center={this.state.position}
        zoom={11}
      >
        {this.state.showOverlays &&
          <>
            <DynamicMarker
              position={this.state.position}
              title={JSON.stringify(this.state.position)}
              angle={this.state.angle}
              svgIcon={CarTopView}
              fillColor='red'
            />
            <Marker
              position={{
                latitude: 31.05,
                longitude: 120.95
              }}
              title='green'
              svgIcon={CarTopView}
              fillColor='green'
            />
            <Marker
              position={{
                latitude: 30.95,
                longitude: 121.05
              }}
              title='90'
              angle={90}
              svgIcon={CarTopView}
            />
            <Marker
              position={{
                latitude: 31.05,
                longitude: 121.05
              }}
              angle={90}
            />
            <Marker
              position={{
                latitude: 31.05,
                longitude: 121.05
              }}
              angle={-90}
            />
            <DomMarker
              position={{
                latitude: 31.05,
                longitude: 121.05
              }}
              angle={-45}
            >
              <div style={{ border: '1px solid' }}>HTML Marker</div>
            </DomMarker>
          </>
        }
        {this.state.showOverlays &&
          <Polyline path={[{
              longitude: 121,
              latitude: 31
            }, {
              longitude: 121.05,
              latitude: 31.05
            }, {
              longitude: 121,
              latitude: 31.10
            }, {
              longitude: 121.05,
              latitude: 31.15
            }]}
            strokeColor='#00FF007F'
            // strokeColor='rgba(0, 0, 255, 0.3)'
            // strokeColor='rgb(255, 0, 0)'
            // strokeColor='blue'
            // strokeOpacity={0.5}
            strokeWeight={10}
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
