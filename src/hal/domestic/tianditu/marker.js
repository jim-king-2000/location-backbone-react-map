import { PositionToLngLat } from './utils';

export class Marker {
  constructor(map, position, options) {
    this.marker = new T.Marker(PositionToLngLat(position), {
      ...options,
    });
    map.addOverLay(this.marker);
    this.map = map;
  }

  setPosition(position) {
    this.marker.setLngLat(PositionToLngLat(position));
  }

  setOptions(options) {
  }

  remove() {
    this.map.removeOverLay(this.marker);
  }
}