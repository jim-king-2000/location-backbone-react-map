import { PositionToLatLng } from './utils';

export class DomMarker {
  #map;
  #marker;

  constructor(map, options) {
    this.#map = map;
    const { position, ...others } = options;
    import('./domMarkerOverlay')
    .then(({ default: DomMarkerOverlay }) => {
      this.#marker = new DomMarkerOverlay(
        PositionToLatLng(position),
        { map, ...others });
    });
  }

  remove() {
    this.#marker && this.#marker.setMap(null);
  }
}