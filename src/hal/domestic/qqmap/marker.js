import { PositionToLatLng } from './utils';

function translateProperties(options) {
  const { angle, ...others } = options;
  return {
    rotation: angle || 0,
    ...others
  };
}

export class Marker {
  constructor(map, options) {
    const { position, events, ...others } = options;
    const markerOptions = {
      map,
      flat: true,
      ...translateProperties(others),
      position: PositionToLatLng(position),
    };
    this.marker = new qq.maps.Marker(markerOptions);
    events && Object.entries(events).forEach(
      ([key, value]) => qq.maps.event.addListener(this.marker, key, value)
    );
  }

  setOptions(options) {
    this.marker.setRotation(options.angle);
    this.marker.setTitle(options.title);
    this.marker.setPosition(PositionToLatLng(options.position));
  }
  
  remove() {
    this.marker.setMap(null);
  }
}