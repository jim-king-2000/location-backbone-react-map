import { PositionToLngLat } from './utils';

export class Marker {
  constructor(map, options) {
    const { position, events, ...others } = options;
    this.marker = new T.Marker(PositionToLngLat(position), {
      ...others,
    });
    map.addOverLay(this.marker);
    events && Object.entries(events).forEach(
      ([key, value]) => this.marker.addEventListener(key, value)
    );
    this.map = map;
  }

  setOptions(options) {
    this.marker.setLngLat(PositionToLngLat(options.position));
  }

  remove() {
    this.map.removeOverLay(this.marker);
  }
}