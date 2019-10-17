import { PositionToLngLat } from './utils';

function translatePolylineOptions(options) {
  const { strokeColor, strokeOpacity, strokeWeight, ...others } = options;
  return {
    ...others,
    color: strokeColor,
    opacity: strokeOpacity,
    weight: strokeWeight,
  }
}

export class Polyline {
  constructor(map, options) {
    const { path, ...others } = options;
    this.polyline = new T.Polyline(
      path.map(position => PositionToLngLat(position)),
      translatePolylineOptions(others)
    );
    map.addOverLay(this.polyline);
    this.map = map;
  }

  remove() {
    this.map.removeOverLay(this.polyline);
  }
}