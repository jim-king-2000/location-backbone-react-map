import { PositionToLatLng } from './utils';

export class Polyline {
  constructor(map, path, options) {
    this.polyline = new L.polyline(
      path.map(position => PositionToLatLng(position)),
      options
    ).addTo(map);
  }

  remove() {
    this.polyline && this.polyline.remove();
  }
}