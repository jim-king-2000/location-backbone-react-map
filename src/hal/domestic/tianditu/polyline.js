import { PositionToLngLat } from './utils';

function translatePolylineOptions(options) {
  const { strokeColor, strokeOpacity, strokeWeight, ...others } = options;
  return {
    color: strokeColor,
    opacity: strokeOpacity,
    weight: strokeWeight,
    ...others,
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