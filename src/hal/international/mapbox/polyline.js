import { PositionToLatLng } from './utils';

function translatePolylineOptions(options) {
  return {
    ...options,
    color: options.strokeColor,
    weight: options.strokeWeight,
    opacity: options.strokeOpacity,
  }
}

export class Polyline {
  constructor(map, options) {
    const { path, ...others } = options;
    this.polyline = new L.polyline(
      path.map(position => PositionToLatLng(position)),
      translatePolylineOptions(others)
    ).addTo(map);
  }

  remove() {
    this.polyline && this.polyline.remove();
  }
}