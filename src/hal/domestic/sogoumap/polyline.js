import { PositionToLatLng } from './utils';
import { transformColorToRgb } from '../../../utils/Color';

export class Polyline {
  constructor(map, options) {
    const { path, strokeColor, strokeOpacity, ...others } = options;
    this.polyline = new sogou.maps.Polyline({
      map,
      ...others,
      path: path.map(position => PositionToLatLng(position)),
      strokeColor: transformColorToRgb(strokeColor, strokeOpacity),
    });
  }

  remove() {
    this.polyline && this.polyline.setMap(null);
  }
}