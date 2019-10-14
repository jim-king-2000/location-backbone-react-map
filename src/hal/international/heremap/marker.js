import { PositionToLatLng } from './utils';
import { buildSVGMarkup } from '../../../utils/svg';

export class Marker {
  constructor(map, position, options) {
    this.marker = new H.map.Marker(PositionToLatLng(position), {
      icon: new H.map.Icon(buildSVGMarkup(options), {
        anchor: {
          x: 15,
          y: 15
        }
      }),
    });
    this.map = map;
    this.map.addObject(this.marker);
  }

  setPosition(position) {
    this.marker.setGeometry(PositionToLatLng(position));
  }

  setAngle(angle) {
    // this.marker.setAngle(angle);
  }

  setTitle(title) {
    // this.marker.setOptions({ title });
  }

  remove() {
    this.map.removeObject(this.marker);
  }
}