import { PositionToLatLng } from './utils';

export class Polyline {
  #polyline;

  constructor(map, options) {
    const { path, ...others } = options;
    this.#polyline = new google.maps.Polyline({
      map,
      ...others,
      path: path.map(position => PositionToLatLng(position)),
    });
  }

  remove() {
    this.#polyline && this.#polyline.setMap(null);
  }
}