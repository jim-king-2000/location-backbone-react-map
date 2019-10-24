import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LoadAPI from '../utils/APILoader';
import LoadCSS from '../utils/CSSLoader';
import GetMapClass from '../utils/MapFactory';
import { buildCallbackName } from '../utils/CallbackName';

export class Map extends Component {
  #container = React.createRef();
  #child = React.createRef();

  async #createMap(NativeMapClass, options, mapKey) {
    if (!this.map) {
      this.map = await NativeMapClass.loadMap(
        this.#container.current,
        options,
        mapKey);
      this.#renderChildren();
    }
  }

  #cloneChildren(children) {
    return React.Children.map(
      children,
      child => {
        if (!child || typeof child === 'string' || typeof child.type === 'string')
          return child;
        return React.cloneElement(
          child,
          { __map__: this.map },
          this.#cloneChildren(child.props && child.props.children)
        );
      }
    );
  }

  #renderChildren() {
    ReactDOM.render(
      this.#cloneChildren(this.props.children),
      this.#child.current);
  }

  async componentDidMount() {
    const { mapVendor, mapKey, ...options } = this.props;
    const NativeMapClass = GetMapClass(mapVendor);
    LoadCSS(NativeMapClass);
    if (NativeMapClass.AsyncLoad) {
      window[buildCallbackName(NativeMapClass.name)] =
        () => this.#createMap(NativeMapClass, options, mapKey);
      await LoadAPI(NativeMapClass, mapKey);
    } else {
      await LoadAPI(NativeMapClass, mapKey);
      this.#createMap(NativeMapClass, options, mapKey);
    }
  }

  componentDidUpdate() {
    this.#renderChildren();
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