import { PositionToPoint } from './utils';

function translateProperties(options) {
  const { angle, ...others } = options;
  return {
    rotation: angle,
    ...others
  };
}

export class Marker {
  #map;
  #marker;

  constructor(map, options) {
    const { position, events, ...others } = options;
    this.#marker = new BMap.Marker(PositionToPoint(position), {
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
    events && Object.entries(events).forEach(
      ([key, value]) => this.#marker.addEventListener(key, value)
    );
    map.addOverlay(this.#marker);
    this.#map = map;
  }

  setOptions(options) {
    if (!this.#marker) return;
    this.#marker.setRotation(options.angle);
    this.#marker.setTitle(options.title);
    this.#marker.setPosition(PositionToPoint(options.position));
  }

  remove() {
    this.#marker && this.#map.removeOverlay(this.#marker);
  }
}