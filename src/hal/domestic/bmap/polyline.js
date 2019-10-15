import { PositionToPoint } from './utils';

function transformOptions(options) {
  const { strokeOpacity, ...others } = options;
  return {
    strokeOpacity: strokeOpacity || 1,
    ...others,
  }
}

export class Polyline {
  constructor(map, path, options) {
    this.map = map;
    this.polyline = new window.BMap.Polyline(
      path.map(position => PositionToPoint(position)),
      transformOptions(options),
    );
    this.map.addOverlay(this.polyline);
  }

  remove() {
    this.map.removeOverlay(this.polyline);
  }
}