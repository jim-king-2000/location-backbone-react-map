import { PositionToLatLng } from './utils';

export class Polyline {
  constructor(map, path, options) {
    this.polyline = new google.maps.Polyline({
      map,
      path: path.map(position => PositionToLatLng(position)),
      options
    });
  }

  remove() {
    this.polyline && this.polyline.setMap(null);
  }
}