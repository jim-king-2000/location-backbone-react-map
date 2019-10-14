import { PositionToLatLng } from './utils';

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
    this.polyline = new L.polyline(
      path.map(position => PositionToLatLng(position)),
      translatePolylineOptions(options)
    ).addTo(map);
  }

  remove() {
    this.polyline && this.polyline.remove();
  }
}