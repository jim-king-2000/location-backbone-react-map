import { PositionToLatLng } from './utils';
import { renderToDiv } from '../../../utils/Render';

function translateProperties(options) {
  const { angle, ...others } = options;
  return {
    rotation: angle || 0,
    ...others
  };
}

export class Marker {
  constructor(map, options) {
    const { position, ...others } = options;
    const markerOptions = {
      map,
      flat: true,
      ...translateProperties(others),
      position: PositionToLatLng(position),
    };
    this.marker = new qq.maps.Marker(markerOptions);
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