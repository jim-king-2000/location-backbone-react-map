import React, { Component } from 'react';
import { renderChildren, loadAndCreateMap } from '../utils/MapUtils';

export class Map extends Component {
  #container = React.createRef();
  #child = React.createRef();
  #map;

  async componentDidMount() {
    this.#map = await loadAndCreateMap(
      this.props, this.#container.current, this.#child.current);
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.mapVendor !== this.props.mapVendor) {
      componentWillUnmount();
      await componentDidMount();
    }
    renderChildren(
      this.#map,
      this.props.children,
      this.#child.current
    );
  }

  componentWillUnmount() {
    this.#map.destroy && this.#map.destroy();
  }

  render() {
    return (
      <div
        style={{
          height: '100%',
          position: 'relative'
        }}
      >
        <div
          ref={this.#container}
          style={{
            height: '100%'
          }}
        />
        <div ref={this.#child} />
      </div>
    );
  }
}