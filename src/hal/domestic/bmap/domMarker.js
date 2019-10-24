import { PositionToPoint } from './utils';

export class DomMarker {
  #map;
  #marker;

  constructor(map, options) {
    import('./domMarkerOverlay')
    .then(({ default: DomMarkerOverlay }) => {
      const { position, ...others } = options;
      this.#marker = new DomMarkerOverlay(
        PositionToPoint(position),
        others);
      map.addOverlay(this.#marker);
    });
    this.#map = map;
  }

  remove() {
    this.#marker && this.#map.removeOverlay(this.#marker);
  }
}