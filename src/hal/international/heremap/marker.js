import { PositionToLatLng } from './utils';
import { buildSVGMarkup } from '../../../utils/svg';

export class Marker {
  constructor(map, options) {
    const { position, ...others } = options;
    this.marker = new H.map.Marker(PositionToLatLng(position), {
      icon: others.svgIcon && new H.map.Icon(buildSVGMarkup(others), {
        anchor: {
          x: 15,
          y: 15
        }
      }),
    });
    this.map = map;
    this.map.addObject(this.marker);
  }

  setOptions(options) {
    this.marker.setGeometry(PositionToLatLng(options.position));
  }

  remove() {
    this.map.removeObject(this.marker);
  }
}