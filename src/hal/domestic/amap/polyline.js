import { PositionToLngLat } from './utils';

export class Polyline {
  constructor(map, path, options) {
    this.polyline = new window.AMap.Polyline({
      map,
      path: path.map(position => PositionToLngLat(position)),
      lineJoin: 'round',
      lineCap: 'round',
      ...options
    });
  }

  remove() {
    this.polyline && this.polyline.setMap(null);
  }
}