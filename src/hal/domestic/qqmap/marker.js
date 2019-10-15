import { PositionToLatLng } from './utils';

function translateProperties(options) {
  const { angle, ...others } = options;
  return {
    rotation: angle,
    ...others
  };
}

export class Marker {
  constructor(map, position, options) {
    this.marker = new qq.maps.Marker({
      map,
      flat: true,
      ...translateProperties(options),
      position: PositionToLatLng(position),
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