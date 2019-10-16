import { PositionToLngLat } from './utils';

export class Marker {
  constructor(map, options) {
    const { position, ...others } = options;
    this.marker = new T.Marker(PositionToLngLat(position), {
      ...others,
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