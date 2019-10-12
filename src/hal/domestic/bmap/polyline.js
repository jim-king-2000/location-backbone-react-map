import { PositionToPoint } from './utils';

export class Polyline {
  constructor(map, path, options) {
    this.map = map;
    this.polyline = new window.BMap.Polyline(
      path.map(position => PositionToPoint(position)),
      options
    );
    this.map.addOverlay(this.polyline);
  }

  remove() {
    this.map.removeOverlay(this.polyline);
  }
}