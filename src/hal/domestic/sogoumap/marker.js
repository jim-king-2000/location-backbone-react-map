import { PositionToLatLng } from './utils';

export class Marker {
  constructor(map, position, options) {
    this.marker = new sogou.maps.Marker({
      map,
      ...options,
      position: PositionToLatLng(position),
    });
  }

  setPosition(position) {
    this.marker.setPosition(PositionToLatLng(position));
  }

  setOptions(options) {
    this.marker.setTitle(options.title);
  }

  remove() {
    this.marker.setMap();
  }
}