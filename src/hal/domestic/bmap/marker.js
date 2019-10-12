
function PositionToPoint(position) {
  return new window.BMap.Point(position.longitude, position.latitude);
}

function translateProperties(options) {
  const { angle, ...others } = options;
  return {
    rotation: angle,
    ...others
  };
}

export class Marker {
  constructor(map, position, options) {
    this.map = map;
    this.marker = new window.BMap.Marker(PositionToPoint(position), {
      ...translateProperties(options),
      icon: new window.BMap.Symbol(options.svgIcon, {
        fillColor: options.fillColor || 'currentColor',
        strokeWidth: 0,
        scale: 0.6,
        fillOpacity: 1,
        anchor: new window.BMap.Size(23, 23)
      })
    });
    map.addOverlay(this.marker);
  }

  setPosition(position) {
    this.marker.setPosition(PositionToPoint(position));
  }

  setAngle(angle) {
    this.marker.setRotation(angle);
  }

  setTitle(title) {
    this.marker.setTitle(title);
  }

  remove() {
    this.map.removeOverlay(this.marker);
  }
}