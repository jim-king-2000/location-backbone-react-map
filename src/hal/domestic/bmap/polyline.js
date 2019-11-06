import { PositionToPoint } from './utils';

function transformOptions(options) {
  const { strokeOpacity = 1, ...others } = options;
  return {
    ...others,
    strokeOpacity,
  }
}

export class Polyline {
  #map;
  #polyline;

  constructor(map, options) {
    const { path, ...others } = options;
    this.#polyline = new BMap.Polyline(
      path.map(position => PositionToPoint(position)),
      transformOptions(others),
    );
    map.addOverlay(this.#polyline);
    this.#map = map;
  }

  remove() {
    this.#map && this.#map.removeOverlay(this.#polyline);
  }
}