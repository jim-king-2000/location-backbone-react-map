import { PositionToPoint } from './utils';

export class DomMarker {
  constructor(map, options) {
    this.map = map;
    const { position, ...others } = options;
    import('./domMarkerOverlay')
    .then(({ default: DomMarkerOverlay }) => {
      this.marker = new DomMarkerOverlay(
        PositionToPoint(position),
        others);
      map.addOverlay(this.marker);
    });
  }

  setPosition(position) {
    this.marker.setPosition(PositionToPoint(position));
  }

  setOptions(options) {
    this.marker.setRotation(options.angle);
    this.marker.setTitle(options.title);
  }

  remove() {
    this.map.removeOverlay(this.marker);
  }
}