import { PositionToLngLat } from './utils';

export class Polyline {
  #polyline;
  
  constructor(map, options) {
    const { path, lineJoin = 'round', lineCap = 'round', ...others } = options;
    this.#polyline = new AMap.Polyline({
      map,
      path: path.map(position => PositionToLngLat(position)),
      lineJoin,
      lineCap,
      ...others,
    });
  }

  remove() {
    this.#polyline && this.#polyline.setMap(null);
  }
}