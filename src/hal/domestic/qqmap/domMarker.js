import { PositionToLatLng } from './utils';

export class DomMarker {
  constructor(map, options) {
    this.map = map;
    const { position, ...others } = options;
    import('./domMarkerOverlay')
    .then(({ default: DomMarkerOverlay }) => {
      this.marker = new DomMarkerOverlay(
        PositionToLatLng(position),
        others);
      this.marker.setMap(map);
    });
  }

  setPosition(position) {
    this.marker.setPosition(PositionToLatLng(position));
  }

  setOptions(options) {
    this.marker.setRotation(options.angle);
    this.marker.setTitle(options.title);
  }

  remove() {
    this.marker.setMap(null);
  }
}