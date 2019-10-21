import { PositionToPoint } from './utils';

function translateProperties(options) {
  const { angle, ...others } = options;
  return {
    rotation: angle,
    ...others
  };
}

export class Marker {
  constructor(map, options) {
    this.map = map;
    const { position, ...others } = options;
    this.marker = new BMap.Marker(PositionToPoint(position), {
      ...translateProperties(others),
      icon: others.svgIcon && new BMap.Symbol(others.svgIcon, {
        fillColor: others.fillColor || 'currentColor',
        strokeColor: others.fillColor || 'currentColor',
        strokeWidth: 0,
        strokeOpacity: 0,
        scale: 0.6,
        fillOpacity: 1,
        anchor: new BMap.Size(23, 23)
      })
    });
    map.addOverlay(this.marker);
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