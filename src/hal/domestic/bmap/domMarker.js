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

  remove() {
    this.map.removeOverlay(this.marker);
  }
}