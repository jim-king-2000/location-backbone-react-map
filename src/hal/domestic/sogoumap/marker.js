import { PositionToLatLng } from './utils';

export class Marker {
  constructor(map, options) {
    const { position, ...others } = options;
    this.marker = new sogou.maps.Marker({
      map,
      ...others,
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