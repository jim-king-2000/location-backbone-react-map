import { PositionToLocation } from './utils';
import { transformColorToRgb } from '../../../utils/Color';

function translatePolylineOptions(options) {
  const { strokeColor, strokeOpacity, strokeWeight, ...others } = options;
  return {
    strokeColor: transformColorToRgb(strokeColor, strokeOpacity),
    strokeThickness: strokeWeight,
    ...others,
  }
}

export class Polyline {
  constructor(map, path, options) {
    this.map = map;
    this.polyline = new Microsoft.Maps.Polyline(
      path.map(position => PositionToLocation(position)),
      translatePolylineOptions(options)
    );
    this.map.entities.push(this.polyline);
  }

  remove() {
    this.map.entities.remove(this.polyline);
  }
}