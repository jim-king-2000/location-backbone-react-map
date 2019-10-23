import { PositionToLatLng } from './utils';
import { buildSVGMarkup } from '../../../utils/svg';

function translateEvents(events) {
  const { click, ...otherEvents } = events;
  return {
    tap: click,
    ...otherEvents,
  };
}
export class Marker {
  constructor(map, options) {
    const { position, events, ...others } = options;
    this.marker = new H.map.Marker(PositionToLatLng(position), {
      icon: others.svgIcon && new H.map.Icon(buildSVGMarkup(others), {
        anchor: {
          x: 15,
          y: 15
        }
      }),
    });
    events && Object.entries(translateEvents(events)).forEach(
      ([key, value]) => this.marker.addEventListener(key, value)
    );
    map.addObject(this.marker);
    this.map = map;
  }

  setOptions(options) {
    this.marker.setGeometry(PositionToLatLng(options.position));
  }

  remove() {
    this.map.removeObject(this.marker);
  }
}