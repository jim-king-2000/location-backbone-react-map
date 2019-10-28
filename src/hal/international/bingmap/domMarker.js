import { PositionToLocation } from './utils';

export class DomMarker {
  #map;
  #marker;

  constructor(map, options) {
    this.#map = map;
    const { position, ...others } = options;
    import('./domMarkerOverlay')
    .then(({ default: DomMarkerOverlay }) => {
      this.#marker = new DomMarkerOverlay(
        PositionToLocation(position),
        others);
      map.layers.insert(this.#marker)
    });
  }

  remove() {
    this.#map.layers.remove(this.#marker);
  }
}