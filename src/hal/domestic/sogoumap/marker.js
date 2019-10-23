import { PositionToLatLng } from './utils';

export class Marker {
  constructor(map, options) {
    const { position, events, ...others } = options;
    this.marker = new sogou.maps.Marker({
      map,
      ...others,
      position: PositionToLatLng(position),
    });
    events && Object.entries(events).forEach(
      ([key, value]) => sogou.maps.event.addListener(this.marker, key, value)
    );
  }

  setOptions(options) {
    this.marker.setTitle(options.title);
    this.marker.setPosition(PositionToLatLng(options.position));
  }

  remove() {
    this.marker.setMap();
  }
}