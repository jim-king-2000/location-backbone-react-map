import { PositionToLocation } from './utils';
import { transformColorToRgb } from '../../../utils/Color';

function translatePolylineOptions(options) {
  const { strokeColor, strokeOpacity, strokeWeight, ...others } = options;
  return {
    ...others,
    strokeColor: transformColorToRgb(strokeColor, strokeOpacity),
    strokeThickness: strokeWeight,
  }
}

export class Polyline {
  constructor(map, options) {
    const { path, ...others } = options;
    this.map = map;
    this.polyline = new Microsoft.Maps.Polyline(
      path.map(position => PositionToLocation(position)),
      translatePolylineOptions(others)
    );
    this.map.entities.push(this.polyline);
  }

  remove() {
    this.map.entities.remove(this.polyline);
  }
}