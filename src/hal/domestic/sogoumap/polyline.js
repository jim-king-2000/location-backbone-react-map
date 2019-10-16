import { PositionToLatLng } from './utils';
import { transformColorToRgb } from '../../../utils/Color';

export class Polyline {
  constructor(map, options) {
    const { path, strokeColor, strokeOpacity, ...others } = options;
    this.polyline = new sogou.maps.Polyline({
      map,
      path: path.map(position => PositionToLatLng(position)),
      strokeColor: transformColorToRgb(strokeColor, strokeOpacity),
      ...others,
    });
  }

  remove() {
    this.polyline && this.polyline.setMap(null);
  }
}