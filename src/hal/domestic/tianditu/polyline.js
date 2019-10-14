import { PositionToLngLat } from './utils';

function translatePolylineOptions(options) {
  return {
    color: options.strokeColor,
    weight: options.strokeWeight,
    opacity: options.strokeOpacity,
    ...options,
  }
}

export class Polyline {
  constructor(map, path, options) {
    this.polyline = new T.Polyline(
      path.map(position => PositionToLngLat(position)),
      translatePolylineOptions(options)
    );
    map.addOverLay(this.polyline);
    this.map = map;
  }

  remove() {
    this.map.removeOverLay(this.polyline);
  }
}