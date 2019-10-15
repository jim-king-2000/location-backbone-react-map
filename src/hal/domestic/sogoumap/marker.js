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

  setAngle(angle) {
    // this.marker.setRotation(angle);
  }

  setTitle(title) {
    this.marker.setTitle(title);
  }

  remove() {
    this.marker.setMap();
  }
}