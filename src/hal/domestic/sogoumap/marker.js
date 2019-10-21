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

  setOptions(options) {
    this.marker.setTitle(options.title);
    this.marker.setPosition(PositionToLatLng(options.position));
  }

  remove() {
    this.marker.setMap();
  }
}