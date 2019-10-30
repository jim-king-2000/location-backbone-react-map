import React from 'react';
import ReactDOM from 'react-dom';
import LoadCSS from '../utils/CSSLoader';
import LoadAPI from '../utils/APILoader';
// import GetMapClass from '../utils/MapFactory';
import GetMapClass from '../utils/MapDynamicFactory';
import { buildCallbackName } from '../utils/CallbackName';

function cloneChildren(map, children) {
  return React.Children.map(
    children,
    child => {
      if (!child || typeof child === 'string' || typeof child.type === 'string')
        return child;
      return React.cloneElement(
        child,
        { __map__: map },
        cloneChildren(map, child.props && child.props.children)
      );
    }
  );
}

export function renderChildren(map, children, dom) {
  ReactDOM.render(
    cloneChildren(map, children),
    dom
  );
}

async function createMap(
  NativeMapClass, options, mapKey, domMap, domChild) {
  const map = await NativeMapClass.loadMap(
    domMap,
    options,
    mapKey);
  renderChildren(
    map,
    options.children,
    domChild
  );
  return map;
}

export async function loadAndCreateMap(props, domMap, domChild) {
  const { mapVendor, mapKey, ...options } = props;
  const NativeMapClass = await GetMapClass(mapVendor);

  LoadCSS(NativeMapClass);

  if (NativeMapClass.AsyncLoad) {
    const promise = new Promise(resolve =>
      window[buildCallbackName(NativeMapClass.name)] =
        () => resolve(createMap(NativeMapClass, options, mapKey, domMap,
          domChild))
    );
    await LoadAPI(NativeMapClass, mapKey);
    return promise;
  } else {
    await LoadAPI(NativeMapClass, mapKey);
    return createMap(NativeMapClass, options, mapKey, domMap, domChild);
  }
}