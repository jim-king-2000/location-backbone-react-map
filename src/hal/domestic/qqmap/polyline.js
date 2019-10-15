import { PositionToLatLng } from './utils';
import { transformColorToRgbObject } from '../../../utils/Color';

function transformColor(color, opacity) {
  const strokeColor = transformColorToRgbObject(color, opacity);
  return new qq.maps.Color(
    strokeColor.r,
    strokeColor.g,
    strokeColor.b,
    strokeColor.a,
  );
}

export class Polyline {
  constructor(map, path, options) {
    const { strokeColor, strokeOpacity, ...others } = options;
    this.polyline = new qq.maps.Polyline({
      map,
      path: path.map(position => PositionToLatLng(position)),
      strokeColor: transformColor(strokeColor, strokeOpacity),
      ...others,
    });
  }

  remove() {
    this.polyline && this.polyline.setMap(null);
  }
}