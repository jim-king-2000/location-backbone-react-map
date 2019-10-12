import { PositionToLocation } from './utils';

export class Polyline {
  constructor(map, path, options) {
    this.map = map;
    this.polyline = new Microsoft.Maps.Polyline(
      path.map(position => PositionToLocation(position)),
      options
    );
    this.map.entities.push(this.polyline);
  }

  remove() {
    this.map.entities.remove(this.polyline);
  }
}