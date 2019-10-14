import { PositionToLatLng } from './utils';

export class Polyline {
  constructor(map, path, options) {
    this.map = map;
    const lineString = new H.geo.LineString();
    path.forEach(position => lineString.pushPoint(PositionToLatLng(position)));
    this.polyline = new H.map.Polyline(
      lineString,
      { style: { ...options } }
    );
    this.map.addObject(this.polyline);
  }

  remove() {
    this.map.removeObject(this.polyline);
  }
}