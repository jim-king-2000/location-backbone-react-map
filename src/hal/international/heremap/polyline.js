import { PositionToLatLng } from './utils';

function translatePolylineOptions(options) {
  return {
    lineWidth: options.strokeWeight,
    lineJoin: 'round',
    lineCap: 'round',
    ...options,
  }
}

export class Polyline {
  constructor(map, path, options) {
    this.map = map;
    const lineString = new H.geo.LineString();
    path.forEach(position => lineString.pushPoint(PositionToLatLng(position)));
    this.polyline = new H.map.Polyline(
      lineString,
      { style: { ...translatePolylineOptions(options) } }
    );
    this.map.addObject(this.polyline);
  }

  remove() {
    this.map.removeObject(this.polyline);
  }
}