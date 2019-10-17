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

  remove() {
    this.marker.setMap(null);
  }
}