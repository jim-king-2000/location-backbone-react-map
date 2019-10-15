import { PositionToLatLng } from './utils';
import { transformColorToRgb } from '../../../utils/Color';

function translatePolylineOptions(options) {
  const { strokeWeight, strokeColor, strokeOpacity, ...others } = options;
  return {
    strokeColor: transformColorToRgb(strokeColor, strokeOpacity),
    lineWidth: strokeWeight,
    lineJoin: 'round',
    lineCap: 'round',
    ...others,
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