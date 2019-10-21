import { PositionToLngLat } from './utils';

export class Polyline {
  constructor(map, options) {
    const { path, ...others } = options;
    this.polyline = new AMap.Polyline({
      map,
      ...others,
      path: path.map(position => PositionToLngLat(position)),
      lineJoin: 'round',
      lineCap: 'round',
    });
  }

  remove() {
    this.polyline && this.polyline.setMap(null);
  }
}