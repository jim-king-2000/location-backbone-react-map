import { PositionToLngLat } from './utils';

export class Polyline {
  constructor(map, path, options) {
    this.polyline = new T.Polyline(
      path.map(position => PositionToLngLat(position)),
      options
    );
    map.addOverLay(this.polyline);
    this.map = map;
  }

  remove() {
    this.map.removeOverLay(this.polyline);
  }
}