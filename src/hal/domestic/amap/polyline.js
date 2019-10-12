import { PositionToLngLat } from './utils';

export class Polyline {
  constructor(map, path, options) {
    this.polyline = new window.AMap.Polyline({
      map,
      path: path.map(position => PositionToLngLat(position)),
      ...options
    });
  }

  remove() {
    this.polyline && this.polyline.setMap(null);
  }
}