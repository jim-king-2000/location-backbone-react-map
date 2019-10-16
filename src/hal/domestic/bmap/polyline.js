import { PositionToPoint } from './utils';

function transformOptions(options) {
  const { strokeOpacity, ...others } = options;
  return {
    strokeOpacity: strokeOpacity || 1,
    ...others,
  }
}

export class Polyline {
  constructor(map, options) {
    const { path, ...others } = options;
    this.map = map;
    this.polyline = new window.BMap.Polyline(
      path.map(position => PositionToPoint(position)),
      transformOptions(others),
    );
    this.map.addOverlay(this.polyline);
  }

  remove() {
    this.map.removeOverlay(this.polyline);
  }
}