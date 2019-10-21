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
      icon: others.svgIcon && new BMap.Symbol(others.svgIcon.path, {
        fillColor: others.fillColor || 'currentColor',
        strokeColor: others.fillColor || 'currentColor',
        strokeWidth: 0,
        strokeOpacity: 0,
        scale: others.svgIcon.width / others.svgIcon.viewWidth,
        fillOpacity: 1,
        anchor: new BMap.Size(
          others.svgIcon.viewWidth / 2,
          others.svgIcon.viewHeight / 2)
      })
    });
    map.addOverlay(this.marker);
  }

  setOptions(options) {
    this.marker.setRotation(options.angle);
    this.marker.setTitle(options.title);
    this.marker.setPosition(PositionToPoint(options.position));
  }

  remove() {
    this.map.removeOverlay(this.marker);
  }
}