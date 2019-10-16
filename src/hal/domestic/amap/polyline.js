import { PositionToLngLat } from './utils';

export class Polyline {
  constructor(map, options) {
    const { path, ...others } = options;
    this.polyline = new window.AMap.Polyline({
      map,
      path: path.map(position => PositionToLngLat(position)),
      lineJoin: 'round',
      lineCap: 'round',
      ...others
    });
  }

  remove() {
    this.polyline && this.polyline.setMap(null);
  }
}