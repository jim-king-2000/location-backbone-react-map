import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LoadAPI from '../utils/APILoader';
import GetMapClass from '../utils/MapFactory';

export class Map extends Component {
  container = React.createRef();
  child = React.createRef();

  async componentDidMount() {
    const mapKey = this.props.mapKey;
    const NativeMapClass = GetMapClass(this.props.mapVendor);
    if (NativeMapClass.LoadType.async) {
      window[NativeMapClass.LoadType.startup] =
        () => this.createMap(NativeMapClass, mapKey);
    }
    await LoadAPI(NativeMapClass, mapKey);
    if (!NativeMapClass.LoadType.async) {
      this.createMap(NativeMapClass, mapKey);
    }
  }

  componentDidUpdate() {
    this.renderChildren();
  }

  createMap(NativeMapClass, mapKey) {
    if (!this.map) {
      this.map = new NativeMapClass(this.container.current, mapKey);
      this.renderChildren();
    }
  }

  renderChildren() {
    const children = React.Children.map(
      this.props.children,
      child => child && React.cloneElement(child, { __map__: this.map })
    );
    ReactDOM.render(children, this.child.current);
  }

  render() {
    return (
      <div
        style={{
          height: '100%',
          position: 'relative'
        }}
      >
        <div ref={this.child} />
        <div
          ref={this.container}
          style={{
            height: '100%'
          }}
        />
      </div>
    );
  }
}